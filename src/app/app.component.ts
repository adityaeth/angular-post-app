import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  storedPosts = Array();
  onPostAdded(post: any) {
    this.storedPosts.push(post);
  }
}
