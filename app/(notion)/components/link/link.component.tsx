import Link from "next/link";
import { use } from "react";
import { NotionAdapter } from "../../notion.adapter";
import styles from './link.module.css';

export const LinkComponent = ({ result }: { result: any }) => {
    const page = use(NotionAdapter.getPageMeta(result.id));
    return <Link href={`/${result.id}`}>{page.icon && <span className={styles.icon}>{page.icon?.emoji}</span>}{result.child_page.title}</Link>
}