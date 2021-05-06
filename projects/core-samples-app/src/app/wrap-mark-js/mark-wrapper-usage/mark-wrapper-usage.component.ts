import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-mark-wrapper-usage',
  templateUrl: './mark-wrapper-usage.component.html',
  styleUrls: ['./mark-wrapper-usage.component.scss']
})
export class MarkWrapperUsageComponent implements AfterViewInit  {
  title = 'markjs wrapper demo';
  @ViewChild('search', {static: false}) searchElemRef: ElementRef;
  searchText$: Observable<string>;
  searchConfig = {separateWordSearch: false,  className: 'markjs-highlighter' , element: 'span'}; // if element is provided classname must be provided

  ngAfterViewInit() {
    this.searchText$ = fromEvent(this.searchElemRef.nativeElement, 'keyup').pipe(
      map((e: Event) => (e.target as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged()
    );
  }
}
