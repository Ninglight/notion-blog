import { use } from "react";
import { NotionAdapter } from "./(notion)/notion.adapter";

export default function Head() {
  const rootPageId = process.env.BLOG_INDEX_ID || '';
  const page = use(NotionAdapter.getPageMeta(rootPageId)); 
  const emoji = page.icon ? page.icon?.emoji : '';
  const title = page.properties.title.title[0].plain_text;
  return (
    <>
      <title>{title}</title>
      <meta name="robots" content="noindex, nofollow"></meta>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="notion blog" />
      <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`} />
    </>
  )
}
