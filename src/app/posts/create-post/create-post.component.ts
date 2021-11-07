import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public PostsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) return;

    this.PostsService.addPost(form.value.title, form.value.content);
  }
}
