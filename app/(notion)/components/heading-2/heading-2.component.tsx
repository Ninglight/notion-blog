import styles from './heading-2.module.css';

export const Heading2Component = ({ result }: { result: any }) => {
    const content = result.heading_2.rich_text.map((text: any) => text.text.content).flat();
    return <h3 className={styles.heading2}>{content}</h3>
}