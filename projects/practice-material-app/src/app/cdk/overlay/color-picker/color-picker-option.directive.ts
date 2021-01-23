import { Highlightable } from '@angular/cdk/a11y';
import { Directive } from '@angular/core';

@Directive({
    selector: '[role="option"]',
    host: {
        '[class.active-option]': 'isActive'
    }
})
export class ColorPickerOptionDirective implements Highlightable {
    isActive = false;
    setActiveStyles(): void {
        this.isActive = true;
    }
    setInactiveStyles(): void {
        this.isActive = false;
    }

}