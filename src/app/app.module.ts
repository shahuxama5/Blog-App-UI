import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './Admin/admin-posts/admin-posts.component';
import { AdminViewPostsComponent } from './Admin/admin-view-posts/admin-view-posts.component';
import { FormsModule } from '@angular/forms';
import { AdminAddPostsComponent } from './Admin/admin-add-posts/admin-add-posts.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostsComponent,
    AdminViewPostsComponent,
    AdminAddPostsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
