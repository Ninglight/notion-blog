import styles from './heading-3.module.css';

export const Heading3Component = ({ result }: { result: any }) => {
    const content = result.heading_3.rich_text.map((text: any) => text.text.content).flat();
    return <h2 className={styles.heading3}>{content}</h2>
}