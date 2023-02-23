import { NotionParagraphComponentProps } from './notion-paragraph.model';
import { NotionResponse } from 'notion-api-types';
import { NotionRichtextComponent } from '../notion-richtext/notion-richtext.component';

export const NotionParagraphComponent = ({ result }: NotionParagraphComponentProps): JSX.Element => {
    return (
        <p>
            {result.paragraph.rich_text.map((richtext: NotionResponse.RichText, index: number) => <NotionRichtextComponent key={index} richtext={richtext} />)}
        </p>
    )
}