import { Post } from 'src/app/Models/post.model';
import { PostService } from './../Services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postSerivce: PostService) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.postSerivce.getAllPosts().subscribe(res => {
      this.posts = res;
    });
  }

}
