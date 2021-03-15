import { Component, HostBinding, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { FilePreviewOverlayRef } from '../../file-preview-overlay.ref';

@Component({
  selector: 'app-preview-toolbar',
  templateUrl: './preview-toolbar.component.html',
  styleUrls: ['./preview-toolbar.component.scss'],
  animations: [
    trigger('slideDown' , [
      state('void , exit' , style({transform: 'translateY(-100%)'})),
      state('enter' , style({transform: 'translateY(0)'})),
      transition('* => *' , animate('1000ms ease-in-out'))
    ])
  ]
})
export class PreviewToolbarComponent implements OnInit {

  // Apply animation to the host element
  @HostBinding('@slideDown')
  slideDown : 'enter' | 'exit' |'void' = 'enter';

  constructor(private filePreviewRef: FilePreviewOverlayRef) { }

  ngOnInit(): void {
    this.filePreviewRef.beforeClose().subscribe(_ => this.slideDown = 'exit'); 
  }

}
