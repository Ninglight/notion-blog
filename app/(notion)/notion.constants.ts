import { BulletedListItemComponent } from "./components/bulleted-list-item/bulleted-list-item.component";
import { CalloutComponent } from "./components/callout/callout.component";
import { Heading1Component } from "./components/heading-1/heading-1.component";
import { Heading2Component } from "./components/heading-2/heading-2.component";
import { Heading3Component } from "./components/heading-3/heading-3.component";
import { ImageComponent } from "./components/image/image.component";
import { LinkComponent } from "./components/link/link.component";
import { ParagraphComponent } from "./components/paragraph/paragraph.component";
import { QuoteComponent } from "./components/quote/quote.component";
import { TodoComponent } from "./components/todo/todo.component";
import { NotionBlockType } from "./notion.model";

export const BLOCK_TYPE_COMPONENTS = {
    [NotionBlockType.HEADING_1]: Heading1Component,
    [NotionBlockType.HEADING_2]: Heading2Component,
    [NotionBlockType.HEADING_3]: Heading3Component,
    [NotionBlockType.IMAGE]: ImageComponent,
    [NotionBlockType.PARAGRAPH]: ParagraphComponent,
    [NotionBlockType.CHILD_PAGE]: LinkComponent,
    [NotionBlockType.TODO]: TodoComponent,
    [NotionBlockType.CALLOUT]: CalloutComponent,
    [NotionBlockType.QUOTE]: QuoteComponent,
    [NotionBlockType.BULLETED_LIST_ITEM]: BulletedListItemComponent,
}