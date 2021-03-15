import { Injectable, StaticProvider, Injector, inject, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { DEFAULT_CONFIG, FilePreviewOverlayConfig, FILE_PREVIEW_DATA } from './file-preview-overlay.config';
import { FilePreviewOverlayRef } from './file-preview-overlay.ref';
import { Location } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class FilePreviewOverlayService {

  // Inject overlay service
  constructor(private overlay: Overlay, private locationService: Location, private injector: Injector) { }

  open(config: FilePreviewOverlayConfig = DEFAULT_CONFIG): FilePreviewOverlayRef {

    // Override default configuration
    const overlayConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(overlayConfig);

    // Instantiate remote control
    const fileOverlayRef = new FilePreviewOverlayRef(overlayRef, this.locationService);

    const overlayComponent = this.attachOverlayContainer(overlayRef, fileOverlayRef, overlayConfig);
    fileOverlayRef.componentInstance = overlayComponent;

    // Return remote control
    return fileOverlayRef;

  }

  // Returns an OverlayRef (which is a PortalHost)
  private createOverlay(config: FilePreviewOverlayConfig): OverlayRef {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);
    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }


  private getOverlayConfig(config: FilePreviewOverlayConfig) {
    const positionStrategy = this.overlay.position().global();
    positionStrategy.top('0');
    config.side === 'right' ? positionStrategy.right('0') : positionStrategy.left('0');
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      height: config.height,
      width: config.width,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }


  private attachOverlayContainer(overlayRef: OverlayRef, filePreviewRef: FilePreviewOverlayRef, config: FilePreviewOverlayConfig) {
    const injector = this.createInjector(filePreviewRef, config);
    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent, null, injector);

    //attach component potal to portalhost
    const containerRef: ComponentRef<FilePreviewOverlayComponent> = overlayRef.attach(filePreviewPortal);
    return containerRef.instance;
  }

  private createInjector(filePreviewRef: FilePreviewOverlayRef, config: FilePreviewOverlayConfig) {
    const providers: StaticProvider[] = [
      { provide: FilePreviewOverlayRef, useValue: filePreviewRef },
      { provide: FILE_PREVIEW_DATA, useValue: config.data }
    ];
    const injector = Injector.create({ providers: providers, parent: this.injector })
    return injector;
  }
}


