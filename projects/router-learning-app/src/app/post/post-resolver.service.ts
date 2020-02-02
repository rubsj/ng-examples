import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Post } from './model';
import { Observable, of, EMPTY } from 'rxjs';
import { PostService } from './post.service';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post> {
  constructor(private postService: PostService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Observable<never> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      this.router.navigate(['/']);
      return EMPTY;
    }
    return this.postService.getPost(+id)
      .pipe(
        take(1),
        mergeMap(post => {
          if (post) {
            return of(post);
          } else {
            this.router.navigate(['/']);
            return EMPTY;
          }
        }));
  }


}
