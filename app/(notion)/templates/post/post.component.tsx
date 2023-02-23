import { use } from "react";
import { NotionAdapter } from "../../notion.adapter";
import { NotionBlockComponent } from "../../components/notion-block/notion-block.component";
import styles from './post.module.css'
import { NotionTitleComponent } from "../../components/notion-title/notion-title.component";
import { Block } from "notion-api-types/responses";

export const Post = ({ postId, navigateToParent = true }: { postId: string, navigateToParent?: boolean }) => {
    const [page, blocks] = use(NotionAdapter.getPageData(postId)); 
    return (
      <main className={`${styles.main} container`}>
        <NotionTitleComponent page={page} />
        {blocks?.results.map((result: Block, index: number) => <NotionBlockComponent key={index} result={result} /> )}
      </main>
    )
}