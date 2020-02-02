import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostResolverService } from './post-resolver.service';
import { DeactivateGuardService } from '../guards/deactivate-guard.service';


const routes: Routes = [
  {path: '' , children: [
    {path : '' , component: PostListComponent, canDeactivate: [DeactivateGuardService]},
    {path: ':id', component: PostDetailComponent, resolve : {post : PostResolverService}}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
