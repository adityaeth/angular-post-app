import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onAddPost() {
    const post: Post[] = [];
    this.postCreated.emit(post);
  }
}
