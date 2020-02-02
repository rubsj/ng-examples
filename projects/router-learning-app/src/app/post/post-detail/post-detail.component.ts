import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  template: `
    <div class="container" *ngIf="(post | async) as detail">
    <h3>{{ detail.title }}</h3>
    <i>{{ detail.description }}</i>
    <p>{{ detail.content }}</p>
    <p><button class="btn btn-primary" (click)="gotoPosts()">Back</button></p>
  </div>
  `,
  styles: []
})
export class PostDetailComponent implements OnInit {
  post: Observable<Post>;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    /*     this.route.params.subscribe(
          (params: Params) => {
            this.post = this.postService.getPost(params.id);
          }
        ); */
    this.post = this.route.data.pipe(
      map((data: { post: Post }) => data.post));
  }

  gotoPosts() {
    this.router.navigate(['/posts']);
  }

}
