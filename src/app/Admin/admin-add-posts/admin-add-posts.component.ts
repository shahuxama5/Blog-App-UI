import { PostService } from './../../Services/post.service';
import { Component, OnInit } from '@angular/core';
import { AddPost } from 'src/app/Models/add.model';

@Component({
  selector: 'app-admin-add-posts',
  templateUrl: './admin-add-posts.component.html',
  styleUrls: ['./admin-add-posts.component.css']
})
export class AdminAddPostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  post: AddPost = {
    author: '',
    title: '',
    content: '',
    summary: '',
    featuredImageUrl: '',
    publishDate: '',
    updatedDate: '',
    visible: true,
    urlHandle: '',
  };

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.postService.addPost(this.post).subscribe(res => {
      alert("success");
    });
  }

}
