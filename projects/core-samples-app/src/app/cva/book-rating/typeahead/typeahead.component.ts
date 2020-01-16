import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeaheadComponent),
    multi: true
  }]
})
export class TypeaheadComponent implements ControlValueAccessor {
  public selected;
  @Input() data: { name: string, id: number }[];
  onChanged: any = () => { }
  onTouched: any = () => { }

  writeValue(val: any): void {
    console.log('write value in typeahead ', val);
    const inputVal = val && val.value ? val.value : val;
    if (inputVal && this.data) {
      console.log('this.data and val', this.data, val);
      this.selected = this.data.filter(x => x.id === inputVal)[0] ? this.data.filter(x => x.id === inputVal)[0].name : '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(event) {
    console.log('typeahead on select called with ' , event);
    this.onTouched();
    if (event.item.id !== this.selected.id) {
      this.onChanged(event.item.id);
    }
  }

  onBlur(event) {
    this.onTouched();
    if (!this.selected) {
      this.onChanged(null);
    }
  }

}
