import { CdkOverlayOrigin, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, ComponentPortal, Portal, TemplatePortal, TemplatePortalDirective } from '@angular/cdk/portal';
import { ViewChildren } from '@angular/core';
import { Component, ViewContainerRef, OnDestroy, ViewChild, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { BasicPanelLoadComponent } from './basic-panel-load.component';
@Component({
    selector: 'app-mixed-overlay-samples',
    templateUrl: './mixed-overlay-samples.component.html',
    styleUrls: ['./mixed-overlay-samples.component.scss']
})
export class MixedOverlaySamplesComponent implements OnDestroy {
    // used for example 2
    @ViewChild(CdkPortal) templatePortal: TemplatePortal<any>;
    // for example 3
    @ViewChild(CdkOverlayOrigin) overlayOrigin : CdkOverlayOrigin;

    private destroy$ = new Subject();
    templateOverlayRef : OverlayRef;
    isOverlayOpen = false;
    constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openGlobalComponentPanel() {
        let config = new OverlayConfig();
        config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
        config.hasBackdrop = true;

        let overlayRef = this.overlay.create(config);
        overlayRef.backdropClick().pipe(take(1)).subscribe(() => {
            overlayRef.dispose();
        });

        overlayRef.attach(new ComponentPortal(BasicPanelLoadComponent, this.viewContainerRef))
    }

    openTemplatePanel() {
        let config = new OverlayConfig();
        config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

        this.templateOverlayRef = this.overlay.create(config);
        this.templateOverlayRef.attach(this.templatePortal);

    }

    closeTemplatePanel(){
        this.templateOverlayRef.dispose();
    }

    openLocalComponentPanel(){
        let strategy = this.overlay.position()
        .flexibleConnectedTo(this.overlayOrigin.elementRef )
        .withPositions([{
            originX: 'start',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'top'
        }]);
        ;
        let config = new OverlayConfig({positionStrategy : strategy});
        config.hasBackdrop = true;
        config.backdropClass = "cdk-overlay-transparent-backdrop";
        let overlayRef = this.overlay.create(config);

        overlayRef.backdropClick().pipe(take(1)).subscribe(() => {
            overlayRef.dispose();
        });

        overlayRef.attach(new ComponentPortal(BasicPanelLoadComponent, this.viewContainerRef))
    }

    closeOverlay(){
        this.isOverlayOpen = false;
    }

    openOverlay(){
        this.isOverlayOpen = true;
    }
}