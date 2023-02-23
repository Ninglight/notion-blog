import { Parent } from "notion-api-types/responses";

export const getNotionPageParentId = (parent: Parent): string | undefined => {
    if(parent.type === 'page_id') {
        return parent?.page_id;
    }
    return;
}