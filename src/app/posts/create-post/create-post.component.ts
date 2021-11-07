import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}
  onAddPost(form: NgForm) {
    if (form.invalid) return;
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);
  }
}
