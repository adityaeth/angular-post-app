import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {
  @Input() posts = Array();
  constructor() {}

  ngOnInit(): void {}
}
