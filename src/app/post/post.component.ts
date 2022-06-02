import { Post } from 'src/app/Models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../Services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  post!: Post;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.postService.getPostById(id).subscribe( res => {
          this.post = res;
        });
      }
    });
  }

}
