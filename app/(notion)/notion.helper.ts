import { NotionAdapter } from "./notion.adapter";

export class NotionHelper {
    static async getPaths(pageId: string): Promise<Array<{ slug: Array<string> }>> {
        return (await NotionAdapter.getPageChildRecursive(pageId)).map(NotionHelper.transformChildPageToPaths(pageId));
    }

    static transformChildPageToPaths(rootPageId: string) {
        return (child: Array<string>): { slug: Array<string> } => ({
            slug: child
        })
    }
}