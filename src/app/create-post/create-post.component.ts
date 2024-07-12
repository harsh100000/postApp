import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private postService:PostService){}

  postFormSubmit(form:NgForm){
    let userPost:Post={
      id:this.getRandomId(),
      title:form.value.title,
      content:form.value.content,
      author:form.value.author,
      date:new Date(),
      age:form.value.age,
    };
    this.postService.addPost(userPost);
  }

  getRandomId(): string {
    const characterSet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return result;
  }

}


