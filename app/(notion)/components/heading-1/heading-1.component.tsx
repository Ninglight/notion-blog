import styles from './heading-1.module.css';

export const Heading1Component = ({ result }: { result: any }) => {
    const content = result.heading_1.rich_text.map((text: any) => text.text.content).flat();
    return <h2 className={styles.heading1}>{content}</h2>
}