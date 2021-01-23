import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { ColorPickerOptionDirective } from './color-picker-option.directive';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements AfterViewInit {

  isOpen = false;
  selectedColor = '';

  @ViewChildren(ColorPickerOptionDirective) options: QueryList<ColorPickerOptionDirective>;
  keyManager: ActiveDescendantKeyManager<ColorPickerOptionDirective>;

  colors = [
    { hex: '#F44336', name: 'Purple' },
    { hex: '#E91E63', name: 'Red' },
    { hex: '#673AB7', name: 'Pink' },
    { hex: '#3F51B5', name: 'Indigo' },
    { hex: '#00BCD4', name: 'Cyan' },
    { hex: '#4CAF50', name: 'Green' },
    { hex: '#FFEB3B', name: 'Yellow' },
    { hex: '#FF9800', name: 'Orange' },
    { hex: '#795548', name: 'Brown' },
  ];

  ngAfterViewInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
  }

  keydownHandler(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);
  }

  onSelectColor(color) {
    console.log('select color called with ', color);
    this.selectedColor = color.hex;
    this.isOpen = false;
  }

  buttonClicked(event) {
    console.log('button click event called');
    this.isOpen = !this.isOpen;
  }

}
