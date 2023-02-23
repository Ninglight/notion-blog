import { Files } from "notion-api-types/responses";

export const getNotionCover = (cover: Files.External | null) => {
    if(!!cover) {
        return cover.external.url;
    }
    return;
}