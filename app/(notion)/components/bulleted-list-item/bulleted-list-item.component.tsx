import styles from './bulleted-list-item.module.css';

export const BulletedListItemComponent = ({ result }: { result: any }) => {
    const content = result.bulleted_list_item.rich_text.map((text: any) => text.text.content).flat();
    return <div className={styles.bulletedListItem}>
        <div className={styles.bullet}></div>
        {content.map((content: string, index: number) => <p key={index}>{content}</p>)}
    </div>
}