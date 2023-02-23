import { PageProperty } from "notion-api-types/responses";

export const getNotionTitle = (titleProperty: PageProperty): string | undefined => {
    if(titleProperty.type === 'title') {
      return titleProperty.title.map((title) => title.text.content).join(' ')
    }

    return;
}