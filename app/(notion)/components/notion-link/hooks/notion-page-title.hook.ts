import { NotionAdapter } from "@/app/(notion)/notion.adapter";
import { getNotionTitle } from "@/app/(notion)/utils/notion-title";
import { use } from "react";

export const useNotionPageTitle = (pageId: string, label?: string): string | undefined  => {
    if(!!label) {
        return label;
    }

    const page = use(NotionAdapter.getPageMeta(pageId));
    return getNotionTitle(page.properties.title);
}
