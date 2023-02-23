import { NotionResponse } from 'notion-api-types';
import { Emoji } from 'notion-api-types/responses/global';
import { NotionRichtextComponent } from '../notion-richtext/notion-richtext.component';
import { NotionCalloutComponentProps } from './notion-callout.module';
import styles from './notion-callout.module.css';

export const NotionCalloutComponent = ({ result }: NotionCalloutComponentProps) => {
    const emoji = (result.callout.icon as Emoji)?.emoji;
    const color = result.callout.color;
    return  <div className={[styles.callout, styles[color]].join(' ')}>
        {emoji && <div className={styles.icon}>{emoji}</div>}
        <p className={styles.text}>{result.callout.rich_text.map((richtext: NotionResponse.RichText, index: number) => <NotionRichtextComponent key={index} richtext={richtext} />)}</p>
    </div>
}