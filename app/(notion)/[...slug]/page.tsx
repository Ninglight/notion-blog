import { NotionHelper } from '../notion.helper';
import { Post } from '../templates/post/post.component';

export default async function NotionPost({ params }: { params: { slug: Array<string> }}) {
  const pageId = params.slug[params.slug.length - 1];
  return <Post postId={pageId} />
}

export async function generateStaticParams() {
  const rootPageId = process.env.BLOG_INDEX_ID || '';
  return NotionHelper.getPaths(rootPageId);
}