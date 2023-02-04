import { LinkComponent } from "./components/link/link.component";
import { ParagraphComponent } from "./components/paragraph/paragraph.component";
import { TodoComponent } from "./components/todo/todo.component";
import { NotionBlockType } from "./notion.model";

export const BLOCK_TYPE_COMPONENTS = {
    [NotionBlockType.PARAGRAPH]: ParagraphComponent,
    [NotionBlockType.CHILD_PAGE]: LinkComponent,
    [NotionBlockType.TODO]: TodoComponent
}