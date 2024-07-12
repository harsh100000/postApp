import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrl: './detailpost.component.css'
})
export class DetailpostComponent {

  title:string="";
  content:string="";
  author:string="";

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService)
  {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    let post:Post=postService.getPostById(id);
    this.title=post.title;
    this.author=post.author;
    this.content=post.content;
  };
}
