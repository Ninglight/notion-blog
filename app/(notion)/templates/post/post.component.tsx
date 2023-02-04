import { use } from "react";
import { NotionAdapter } from "../../notion.adapter";
import { BlockComponent } from "../../components/block/block.component";
import styles from './post.module.css'

export const Post = ({ postId }: { postId: string }) => {
    const [page, blocks] = use(NotionAdapter.getPageData(postId)); 
    const emoji = page.icon ? page.icon?.emoji : '';
    const title = page.properties.title.title[0].plain_text;
    return (
      <main className={styles.main}>
        <div className={styles.center}>
          {emoji ? <div className={styles.emoji}>{emoji}</div> : ''}
          <h1>{title}</h1>
          {blocks?.results.map((result: any, index: number) => <BlockComponent key={index} result={result} /> )}
        </div>
      </main>
    )
}