import { NotionApi } from "./notion.api";
import { NotionBlockType } from "./notion.model";

export class NotionAdapter {
    static async getPageMeta(pageId: string) {
        return await NotionApi.getPage(pageId);
    }

    static async getBlock(pageId: string) {
        return await NotionApi.getBlock(pageId);
    }

    static async getPageData(pageId: string) {
        const page = await NotionApi.getPage(pageId);
        const blocks = await NotionApi.getBlockChildren(pageId);
        return [page, blocks];
    }

    static async getPageChild(pageId: string): Promise<Array<string>> {
        const blocks = await NotionApi.getBlockChildren(pageId);
        const getPageIdFromBlock = (block: any) => block.type === NotionBlockType.CHILD_PAGE ? block.id : '';
        const removeEmpty = (n: any) => n;
        return blocks.results.map(getPageIdFromBlock).filter(removeEmpty);
    }
}