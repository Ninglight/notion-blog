import { use } from "react";
import { NotionAdapter } from "../../notion.adapter";
import { BlockComponent } from "../../components/block/block.component";
import styles from './post.module.css'
import { TitleComponent } from "../../components/title/title.component";

export const Post = ({ postId, navigateToParent = true }: { postId: string, navigateToParent?: boolean }) => {
    const [page, blocks] = use(NotionAdapter.getPageData(postId)); 
    const emoji = page.icon ? page.icon?.emoji : '';
    const title = page.properties.title.title[0].plain_text;
    const parentId = page.parent.type === 'page_id' && navigateToParent ? page.parent.page_id : '';
    console.log('page', page)
    return (
      <main className={styles.main}>
        <TitleComponent parentId={parentId} emoji={emoji} title={title} />
        {blocks?.results.map((result: any, index: number) => <BlockComponent key={index} result={result} /> )}
      </main>
    )
}