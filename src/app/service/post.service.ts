import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private allPosts: Post[] = [];
  constructor() { }

  addPost(userPost: Post) {
    this.allPosts.push(userPost);
    console.log(this.allPosts);
  }

  getPost(): Post[] {
    return this.allPosts;
  }

  getPostById(id: string):Post {
    let post:Post;
    for (let i = 0; i < this.allPosts.length; i++) {
      if (id === this.allPosts[i].id){
        post = this.allPosts[i];
        break;
      }
    }
    return post;
  }
}