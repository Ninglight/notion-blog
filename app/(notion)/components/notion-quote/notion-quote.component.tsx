import { NotionResponse } from 'notion-api-types';
import { NotionRichtextComponent } from '../notion-richtext/notion-richtext.component';
import { NotionQuoteComponentProps } from './notion-quote.model';
import styles from './notion-quote.module.css';

export const NotionQuoteComponent = ({ result }: NotionQuoteComponentProps): JSX.Element => {
    return (
        <div className={styles.quote}>
            <p>{result.quote.rich_text.map((richtext: NotionResponse.RichText, index: number) => <NotionRichtextComponent key={index} richtext={richtext} />)}</p>
        </div>
    )
}