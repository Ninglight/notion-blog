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
        const filterChildPage = (block: any) => block.type === NotionBlockType.CHILD_PAGE;
        const getPageIdFromBlock = (block: any) => block.id;
        return blocks.results.filter(filterChildPage).map(getPageIdFromBlock);
    }


    static async getPageChildRecursive(pageId: string): Promise<Array<Array<string>>> {
        const children = []
        const blocks = await NotionAdapter.getPageChild(pageId);
        children.push(...blocks.map((child) => [child]))
        for(const block of blocks) {
            const childBlocks = await NotionAdapter.getPageChild(block);
            children.push(...childBlocks.map((child) => [block, child]))
            for(const child of childBlocks) {
                const subChildBlocks = await NotionAdapter.getPageChild(child);
                children.push(...subChildBlocks.map((subChild) => [block, child, subChild]))
                for(const subChild of subChildBlocks) {
                    const subSubChildBlocks = await NotionAdapter.getPageChild(subChild);
                    children.push(...subSubChildBlocks.map((subSubChild) => [block, child, subChild, subSubChild]))
                }
            }
        }

        return children;
    }
}