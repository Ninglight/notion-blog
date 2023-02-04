export const ParagraphComponent = ({ result }: { result: any }) => {
    const content = result.paragraph.rich_text.map((text: any) => text.text.content).flat();
    return  <>{content.map((content: string, index: number) => <p key={index}>{content}</p>)}</>
}