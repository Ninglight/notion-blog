
import { Post } from './(notion)/templates/post/post.component';

export default async function Home() {
  const rootPageId = process.env.BLOG_INDEX_ID || '';
  return <Post postId={rootPageId} />
}
