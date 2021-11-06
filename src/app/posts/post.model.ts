export interface Post {
  push(post: Post);
  title: String;
  content: String;
}
