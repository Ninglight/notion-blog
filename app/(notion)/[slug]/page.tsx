import { NotionHelper } from '../notion.helper';
import { Post } from '../templates/post/post.component';

export default async function NotionPost({ params }: { params: { slug: string }}) {
  return <Post postId={params.slug} />
}

export async function generateStaticParams() {
  const rootPageId = process.env.BLOG_INDEX_ID || '';
  return NotionHelper.getPaths(rootPageId);
}