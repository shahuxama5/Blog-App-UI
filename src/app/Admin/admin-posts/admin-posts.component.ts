import { PostService } from './../../Services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(res => {
       this.posts = res;
      });
  }

}
