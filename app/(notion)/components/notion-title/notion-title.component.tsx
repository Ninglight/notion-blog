import { NotionParentNavigationComponent } from '@/app/(notion)/components/notion-parent-navigation/notion-parent-navigation.component';
import { getNotionEmoji } from '@/app/(notion)/utils/notion-emoji';
import { getNotionPageParentId } from '@/app/(notion)/utils/notion-page-parent-id';
import { getNotionTitle } from '@/app/(notion)/utils/notion-title';
import { getNotionCover } from '@/app/(notion)/utils/notion-cover';
import Image from 'next/image';
import { NotionTitleComponentProps } from './notion-title.model';
import styles from './notion-title.module.css';

export const NotionTitleComponent = ({ page }: NotionTitleComponentProps): JSX.Element => {
    const cover = getNotionCover(page.cover);
    const emoji = getNotionEmoji(page.icon);
    const title = getNotionTitle(page.properties.title);
    const parentId = getNotionPageParentId(page.parent);
    
    return <div className={styles.title}>
        {parentId ? <NotionParentNavigationComponent parentId={parentId}/> : ''}
        <NotionTitleCoverComponent cover={cover} />
        {emoji ? <div className={styles.emoji}>{emoji}</div> : ''}
        <h1>{title}</h1>
    </div>
}

export const NotionTitleCoverComponent = ({ cover }: { cover?: string }) => {
    if(!cover) {
        return <></>
    }
    return (
        <div className={[styles.cover, styles.coverWithEmoji].join(' ')}>
            <Image src={cover} priority={true} alt={'cover'} width={700} height={300} />
        </div>
    )
}