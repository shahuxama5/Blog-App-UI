import { UpdatePost } from './../../Models/update.model';
import { Post } from 'src/app/Models/post.model';
import { PostService } from './../../Services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-view-posts',
  templateUrl: './admin-view-posts.component.html',
  styleUrls: ['./admin-view-posts.component.css']
})
export class AdminViewPostsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  post!: Post;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id)
      {
        this.postService.getPostById(id).subscribe(res => {
          this.post = res;
        });
      }
    });
  }

  onSubmit(): void {
    const updatePostRequest: UpdatePost = {
      author: this.post?.author,
      title: this.post?.title,
      content: this.post?.content,
      summary: this.post?.summary,
      featuredImageUrl: this.post?.featuredImageUrl,
      publishDate: this.post?.publishDate,
      updatedDate: this.post?.updatedDate,
      visible: this.post?.visible,
      urlHandle: this.post?.urlHandle,
    };
    this.postService.updatePost(this.post?.id, updatePostRequest).subscribe(res => {
      alert("success");
    });
  }

  deletePost(): void {
    this.postService.deletePost(this.post?.id).subscribe(res => {
      alert("Deleted successfully");
    });
  }

}
