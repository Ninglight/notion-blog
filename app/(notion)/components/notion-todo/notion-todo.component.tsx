import { NotionResponse } from 'notion-api-types';
import { Blocks } from 'notion-api-types/responses';
import { NotionRichtextComponent } from '../notion-richtext/notion-richtext.component';
import { NotionTodoComponentProps } from './notion-todo.model';
import styles from './notion-todo.module.css';

const UncheckedTodoIcon = () => {
    return (
        <svg width={16} height={16} viewBox="0 0 16 16" >
            <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
        </svg>
    )
}

export const NotionTodoComponent = ({ result }: NotionTodoComponentProps): JSX.Element => {
    return (
        <div className={styles.todo}>
            <div className={styles.checkbox}>           
                <UncheckedTodoIcon />
            </div>
            <p>{result.to_do.rich_text.map((richtext: NotionResponse.RichText, index: number) => <NotionRichtextComponent key={index} richtext={richtext} />)}</p>
        </div>
    )
}