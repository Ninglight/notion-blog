import { NotionAdapter } from "@/app/(notion)/notion.adapter";
import { getNotionPageParentId } from "@/app/(notion)/utils/notion-page-parent-id";
import { use } from "react";

export const useNotionPageHref = (pageId: string): string => {
    const href = `/${pageId}`;
    const page = use(NotionAdapter.getPageMeta(pageId));
    const parentId = getNotionPageParentId(page.parent);

    // TODO: Manage recursive parentPageFetching
    if (!!parentId && parentId !== process.env.BLOG_INDEX_ID) {
        return `/${parentId}${href}`;
    }

    return href;
}
