import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(public PostsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.PostsService.getPosts();
  }
}
