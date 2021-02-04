import { Component, OnInit } from '@angular/core';
import { Books, NutrientTypes, Book } from '../drag-drop.model';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-mixed-drag-drop-samples',
  templateUrl: './mixed-drag-drop-samples.component.html',
  styleUrls: ['./mixed-drag-drop-samples.component.scss']
})
export class MixedDragDropSamplesComponent implements OnInit {

  nutrients = NutrientTypes;
  books : Book[] = Books;
  completedBooks : Book[] = [
    { name: 'Ultralearning', author: 'Scott Young' },
    { name: 'Stillness is the Key', author: 'Ryan Holiday' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  reorderNutrient(event: CdkDragDrop<string[]>) {
    console.log('reorder nutrienet called ' , event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.nutrients, event.previousIndex, event.currentIndex);
    }
  }

  dropbook(event: CdkDragDrop<Book[]>){
    console.log('received book drop event ' , event);
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }

}
