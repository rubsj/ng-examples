import { OverlayRef } from '@angular/cdk/overlay';
import { Location } from '@angular/common';
import { Observable, pipe, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { hasModifierKey } from '@angular/cdk/keycodes'
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';

// keys are standardized and keyCode/which/keyIdentifier are deprecated...
const ESCAPE = 'Escape';
// ...except of course IE has to be special!
const ESCAPE_IE11 = 'Esc';

export class FilePreviewOverlayRef {
    private _beforeClose = new Subject<void>();
    private _afterClosed = new Subject<void>();
    componentInstance: FilePreviewOverlayComponent;

    constructor(private overlayRef: OverlayRef, private locationService: Location) {
        this.overlayRef.backdropClick().subscribe(_ => {
            this.close();
        });

        this.locationService.subscribe((value: PopStateEvent) => {
            this.close();
        });

        this.overlayRef.keydownEvents()
            .pipe(
                filter((event: KeyboardEvent) => (event.key === ESCAPE || event.key === ESCAPE_IE11) && !hasModifierKey(event))
            )
            .subscribe(() => {
                this.close();
            });

    }

    afterClosed(): Observable<void> {
        return this._afterClosed.asObservable();
    }

    beforeClose(): Observable<void> {
        return this._beforeClose.asObservable();
    }

    close(): void {
         // Listen for animation 'start' events
        this.componentInstance.animationStateChanged.pipe(
            filter(event => (event as any).phaseName === 'start'),
            take(1)
        ).subscribe(() => {
            this._beforeClose.next();
            this._beforeClose.complete();
            this.overlayRef.detachBackdrop();
        });

        // Listen for animation 'done' events
        this.componentInstance.animationStateChanged.pipe(
            filter(event => (event as any).phaseName === 'done' && (event as any).toState === 'exit'),
            take(1)
        ).subscribe(() => {
            this.overlayRef.dispose();
            this._afterClosed.next();
            this._afterClosed.complete();

            // Make sure to also clear the reference to the
            // component instance to avoid memory leaks
            this.componentInstance = null!;
        });

        this.componentInstance.startExitAnimation();
    }
}

