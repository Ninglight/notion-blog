import React from "react";
import { NotionBlockType } from "../../notion.model";
import styles from './notion-block.module.css';
import { NotionParagraphComponent } from "../notion-paragraph/notion-paragraph.component";
import { NotionHeading1Component } from "../notion-heading-1/notion-heading-1.component";
import { NotionHeading2Component } from "../notion-heading-2/notion-heading-2.component";
import { NotionHeading3Component } from "../notion-heading-3/notion-heading-3.component";
import { NotionImageComponent } from "../notion-image/notion-image.component";
import { NotionChildPageComponent } from "../notion-child-page/notion-child-page.component";
import { NotionTodoComponent } from "../notion-todo/notion-todo.component";
import { NotionCalloutComponent } from "../notion-callout/notion-callout.component";
import { NotionQuoteComponent } from "../notion-quote/notion-quote.component";
import { NotionBulletedListItemComponent } from "../notion-bulleted-list-item/notion-bulleted-list-item.component";
import { NotionBlockComponentProps } from "./notion-block.model";
import { Block } from "notion-api-types/responses";

const getBlockTypeComponent = (result: Block) => {
    switch(result.type) {
        case NotionBlockType.PARAGRAPH: 
            return <NotionParagraphComponent result={result} />
        case NotionBlockType.HEADING_1: 
            return <NotionHeading1Component result={result} />
        case NotionBlockType.HEADING_2: 
            return <NotionHeading2Component result={result} />
        case NotionBlockType.HEADING_3: 
            return <NotionHeading3Component result={result} />
        case NotionBlockType.IMAGE: 
            return <NotionImageComponent result={result} />
        case NotionBlockType.CHILD_PAGE: 
            return <NotionChildPageComponent result={result} />
        case NotionBlockType.TODO: 
            return <NotionTodoComponent result={result} />
        case NotionBlockType.CALLOUT: 
            return <NotionCalloutComponent result={result} />
        case NotionBlockType.QUOTE: 
            return <NotionQuoteComponent result={result} />
        case NotionBlockType.BULLETED_LIST_ITEM: 
            return <NotionBulletedListItemComponent result={result} />
    }
}

export const NotionBlockComponent = ({ result }: NotionBlockComponentProps): JSX.Element => {
    const component = getBlockTypeComponent(result);

    if(!component) {
        return <div className={styles.block}>{JSON.stringify(result)}</div>;
    }

    return <div id={result.id} data-type={result.type} className={styles.block}>{component}</div>;
}