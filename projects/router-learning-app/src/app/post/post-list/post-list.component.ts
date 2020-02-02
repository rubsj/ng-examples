import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../model';
import { Observable, of } from 'rxjs';
import { GuardDeactivation } from '../../guards/deactivate-guard.service';

@Component({
  selector: 'app-post-list',
  template: `
  <ul class="list-group">
    <li class="list-group-item" *ngFor="let post of (posts| async)">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <a class="btn btn-primary" [routerLink]="[post.id]">View More</a>
    </li>
  </ul>
  `,
  styles: []
})
export class PostListComponent implements OnInit, GuardDeactivation {

  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getposts();
  }
  canDeactivate(): Observable<boolean> {
    console.log('can deactivate of posts called');
    return of(true);
  }

}
