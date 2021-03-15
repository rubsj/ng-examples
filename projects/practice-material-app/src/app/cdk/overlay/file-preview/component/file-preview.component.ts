import { Component, OnInit } from '@angular/core';
import { FilePreviewImage, FilePreviewOverlayConfig } from '../file-preview-overlay.config';
import { FilePreviewOverlayService } from '../file-preview-overlay.service';


@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {
  files: FilePreviewImage[] = [
    { name: 'fall.jpeg', path: 'assets/images/fall.jpeg' },
    { name: 'mountains-nature.jpg', path: 'assets/images/mountains-nature.jpg' },
    { name: 'road-sun-rays-path.jpg', path: 'assets/images/road-sun-rays-path.jpg' },
    { name: 'sunset.jpeg', path: 'assets/images/sunset.jpeg' },
    { name: 'valley.jpeg', path: 'assets/images/valley.jpeg' }
  ]

  constructor(private filePreviewService: FilePreviewOverlayService) { }

  ngOnInit(): void {
  }

  showPreview(file: FilePreviewImage) {
    let config: FilePreviewOverlayConfig = {
      data: file
    }
    this.filePreviewService.open(config);

  }
}
