import styles from './todo.module.css';

export const TodoComponent = ({ result }: { result: any }) => {
    const content = result.to_do.rich_text.map((text: any) => text.text.content).flat();
    return  <div className={styles.todo}>
        <div className={styles.checkbox}>           
            <svg width={16} height={16} viewBox="0 0 16 16" >
                <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
            </svg>
        </div>
        {content.map((content: string, index: number) => <p key={index}>{content}</p>)}
    </div>
}