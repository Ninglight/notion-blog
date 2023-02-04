import { BulletedListItemComponent } from "./components/bulleted-list-item/bulleted-list-item.component";
import { CalloutComponent } from "./components/callout/callout.component";
import { LinkComponent } from "./components/link/link.component";
import { ParagraphComponent } from "./components/paragraph/paragraph.component";
import { QuoteComponent } from "./components/quote/quote.component";
import { TodoComponent } from "./components/todo/todo.component";
import { NotionBlockType } from "./notion.model";

export const BLOCK_TYPE_COMPONENTS = {
    [NotionBlockType.PARAGRAPH]: ParagraphComponent,
    [NotionBlockType.CHILD_PAGE]: LinkComponent,
    [NotionBlockType.TODO]: TodoComponent,
    [NotionBlockType.CALLOUT]: CalloutComponent,
    [NotionBlockType.QUOTE]: QuoteComponent,
    [NotionBlockType.BULLETED_LIST_ITEM]: BulletedListItemComponent,
}