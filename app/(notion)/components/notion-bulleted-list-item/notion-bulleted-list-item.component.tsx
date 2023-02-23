import { NotionResponse } from 'notion-api-types';
import { NotionRichtextComponent } from '../notion-richtext/notion-richtext.component';
import { NotionBulletedListItemComponentProps } from './notion-bulleted-list-item.model';
import styles from './notion-bulleted-list-item.module.css';

// TODO: create ItemListComponent
// TODO: rename NotionBulletedListItemComponent
export const NotionBulletedListItemComponent = ({ result }: NotionBulletedListItemComponentProps) => {
    return (
        <div className={styles.bulletedListItem}>
            <div className={styles.bullet}></div>
            <p>{result.bulleted_list_item.rich_text.map((richtext: NotionResponse.RichText, index: number) => <NotionRichtextComponent key={index} richtext={richtext} />)}</p>
        </div>
    )
}