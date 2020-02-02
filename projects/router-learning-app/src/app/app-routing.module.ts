import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'posts', loadChildren: './post/post.module#PostModule' }, //projects\router-learning-app\src\app\post\post.module.ts
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : true , preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
