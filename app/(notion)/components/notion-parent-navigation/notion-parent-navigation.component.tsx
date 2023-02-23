import Link from "next/link";
import { NotionParentNavigationComponentProps } from "./notion-parent-navigation.model";
import styles from './notion-parent-navigation.module.css';

export const NotionParentNavigationComponent = ({ parentId }: NotionParentNavigationComponentProps): JSX.Element => {
    
    const defineHref = (parentId: string) => {
        const rootPageId = process.env.BLOG_INDEX_ID || '';
        if(parentId === rootPageId) {
            return '/';
        }
        return `/${parentId}`;
    }

    return <div className={styles.parentNavigation}><Link href={defineHref(parentId)}>« Retour</Link></div> 
}