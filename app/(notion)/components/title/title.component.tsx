import Image from 'next/image';
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

export const TitleComponent = ({ emoji, title, parentId, cover }: TitleComponentProps): JSX.Element => {
    return <div className={styles.title}>
        {parentId ? <GoBack className={styles.goBack} parentId={parentId}/> : ''}
        {cover ? 
            <div className={[styles.cover, styles.coverWithEmoji].join(' ')}>
                <Image src={cover} priority={true} alt={'cover'} width={700} height={300} />
            </div>
            : ''}
        {emoji ? <div className={styles.emoji}>{emoji}</div> : ''}
        <h1>{title}</h1>
    </div>
}