import { Component, Inject, OnInit, EventEmitter, Output } from '@angular/core';
import { FilePreviewImage, FILE_PREVIEW_DATA } from '../file-preview-overlay.config';
import { FilePreviewOverlayRef } from '../file-preview-overlay.ref';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-file-preview-overlay',
  templateUrl: './file-preview-overlay.component.html',
  styleUrls: ['./file-preview-overlay.component.scss'],
  animations: [
    trigger('fade', [
      state('fadeIn', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('* => fadeIn', animate('1000ms')),
    ]),
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(100%, 0, 0) scale(0.9)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('exit', style({ transform: 'translate3d(100%, 0, 0)', opacity: 0 })),
      transition('* => exit , * => void', animate('1000ms')),
      transition('* => enter', animate('2000ms')),
    ])
  ]
})
export class FilePreviewOverlayComponent implements OnInit {
  image: FilePreviewImage;
  loading: boolean = true;
  animationState: 'void' | 'exit' | 'enter' = 'enter';
  @Output() animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor(private fileRef: FilePreviewOverlayRef, @Inject(FILE_PREVIEW_DATA) private data: FilePreviewImage) {
    this.image = data;
  }

  ngOnInit(): void {
  }

  onLoad(event: Event) {
    setTimeout(() => {
      this.loading = false;
    }, 1000);

  }

  onAnimationStart(event: AnimationEvent){
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent){
    this.animationStateChanged.emit(event);
  }

  startExitAnimation(){
    this.animationState = 'exit';
  }

}
