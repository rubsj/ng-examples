import { InjectionToken } from "@angular/core"

export interface FilePreviewOverlayConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    side?: 'left' | 'right';
    height?: string;
    width?: string;
    data?: FilePreviewImage;
}
export const DEFAULT_CONFIG: FilePreviewOverlayConfig = {
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-dark-backdrop',
    panelClass: 'app-file-preview-overlay-panel',
    side: 'right',
    width: '80%',
    height: '100%',
}

export const FILE_PREVIEW_DATA = new InjectionToken<unknown>('filePreviewData');

export interface FilePreviewImage {
    name: string;
    path: string;
}