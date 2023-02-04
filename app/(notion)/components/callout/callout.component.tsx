import styles from './callout.module.css';

export const CalloutComponent = ({ result }: { result: any }) => {
    const content = result.callout.rich_text.map((text: any) => text.text.content).flat();
    const emoji = result.callout.icon?.emoji;
    const color = result.callout.color;
    return  <div className={[styles.callout, styles[color]].join(' ')}>
        {emoji && <div className={styles.icon}>{emoji}</div>}
        <div className={styles.text}>{content.map((content: string, index: number) => <p key={index}>{content}</p>)}</div>
    </div>
}