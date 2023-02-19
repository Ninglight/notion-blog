import Link from "next/link";
import { use } from "react";
import { NotionAdapter } from "../../notion.adapter";
import styles from './link.module.css';

export const LinkComponent = ({ result }: { result: any }) => {
    const page = use(NotionAdapter.getPageMeta(result.id));
    const parentId = page?.parent?.page_id;
    const getHref = (parentId: any) => {
        if (!!parentId && parentId !== process.env.BLOG_INDEX_ID) {
            return `/${parentId}/${result.id}`;
        } 
        return `/${result.id}`;
    }
    const href = getHref(parentId);

    return <Link href={href}>{page.icon && <span className={styles.icon}>{page.icon?.emoji}</span>}{result.child_page.title}</Link>
}