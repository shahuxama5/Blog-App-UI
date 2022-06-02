import { AddPost } from './../Models/add.model';
import { UpdatePost } from './../Models/update.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = 'https://localhost:7135';


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiBaseUrl + '/api/posts');
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiBaseUrl + '/api/posts/' + id);
  }

  updatePost(id: string, updatePostRequest: UpdatePost): Observable<Post> {
    return this.http.put<Post>(this.apiBaseUrl + '/api/posts/' + id, updatePostRequest);
  }

  addPost(addPostRequest: AddPost): Observable<Post> {
    return this.http.post<Post>(this.apiBaseUrl + '/api/posts', addPostRequest);
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(this.apiBaseUrl + '/api/posts/' + id);
  }

}
