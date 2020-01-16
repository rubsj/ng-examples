import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Rating } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks() {
    return of([
      {
        name: 'Grit',
        id: 1
      },
      {
        name: 'Give and Take',
        id: 2
      },
      {
        name: 'One Dharma',
        id: 3
      },
      {
        name: 'Wild Robot',
        id: 4
      },
      {
        name: 'Range',
        id: 5
      },
      {
        name: 'Harry Potter',
        id: 6
      },
      {
        name: 'Goal',
        id: 7
      },
      {
        name: 'Man\'s search for meaning',
        id: 8
      },
      {
        name: 'How to talk to Strangers',
        id: 9
      },
      {
        name: 'Peace in every step',
        id: 10
      }
    ]);
  }

  getPossibleRatings(): Rating[] {
    return [{
      stars: 1,
      text: 'Strongly Disliked'
    },
    {
      stars: 2,
      text: 'Disliked'
    },
    {
      stars: 3,
      text: 'It was OK'
    },
    {
      stars: 4,
      text: 'Would recommend'
    },
    {
      stars: 5,
      text: 'Would strongly recommend'
    }];
  }

}
