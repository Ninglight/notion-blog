import Link from 'next/link';
import { TitleComponentProps } from './title.model';
import styles from './title.module.css';

export const GoBack = ({ className, parentId }: { className: string, parentId: string }): JSX.Element => {
    
    const defineHref = (parentId: string) => {
        const rootPageId = process.env.BLOG_INDEX_ID || '';
        if(parentId === rootPageId) {
            return '/';
        }
        return `/${parentId}`;
    }

    return <div className={className}><Link href={defineHref(parentId)}>« Retour</Link></div> 
}

export const TitleComponent = ({ emoji, title, parentId }: TitleComponentProps): JSX.Element => {
    return <div className={styles.title}>
        {parentId ? <GoBack className={styles.goBack} parentId={parentId}/> : ''}
        {emoji ? <div className={styles.emoji}>{emoji}</div> : ''}
        <h1>{title}</h1>
    </div>
}