import { PostsComponent } from './posts/posts.component';
import { AdminAddPostsComponent } from './Admin/admin-add-posts/admin-add-posts.component';
import { AdminViewPostsComponent } from './Admin/admin-view-posts/admin-view-posts.component';
import { AdminPostsComponent } from './Admin/admin-posts/admin-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'admin/posts',
    component: AdminPostsComponent
  },
  {
    path: 'admin/posts/add',
    component: AdminAddPostsComponent
  },
  {
    path: 'admin/posts/:id',
    component: AdminViewPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
