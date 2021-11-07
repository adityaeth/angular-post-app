import { Post } from './post.model';

export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return this.posts;
  }
  addPost(title: String, content: String) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
  }
}
