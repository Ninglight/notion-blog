import { NotionAdapter } from "./notion.adapter";

export class NotionHelper {
    static async getPaths(pageId: string): Promise<Array<{ slug: string }>> {
        return (await NotionAdapter.getPageChild(pageId)).map(NotionHelper.transformChildPageToPaths);
    }

    static transformChildPageToPaths(child: string): { slug: string } {
        return {
            slug: child
        }
    }
}