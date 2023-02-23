import { NotionAdapter } from "../notion.adapter";
import { getNotionEmoji } from "../utils/notion-emoji";
import { getNotionTitle } from "../utils/notion-title";

export default async function Head({ params }: { params: { slug: string }}) {
  const pageId = params.slug[params.slug.length - 1];
  const page = await NotionAdapter.getPageMeta(pageId); 
  const emoji = getNotionEmoji(page.icon);
  const title = getNotionTitle(page.properties.title);

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
