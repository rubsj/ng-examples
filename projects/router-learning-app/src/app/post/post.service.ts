import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter, take, map, delay } from 'rxjs/operators';
import { POSTS } from './mock-posts';
import { Post } from './model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  getposts(): Observable<Post[]> {
    return of(POSTS);
  }

  getPost(id: number | string): Observable<Post> {
    return this.getposts().pipe(
      map((posts: Post[]) => posts.find(p => p.id === +id)),
      delay(3000)
      );
  }
}
