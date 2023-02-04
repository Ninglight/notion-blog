import styles from './quote.module.css';

export const QuoteComponent = ({ result }: { result: any }) => {
    const content = result.quote.rich_text.map((text: any) => text.text.content).flat();
    return <div className={styles.quote}>
        {content.map((content: string, index: number) => <p key={index}>{content}</p>)}
    </div>
}