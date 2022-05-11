import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new-post', component: NewPostComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts/:id/edit', component: EditPostComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
