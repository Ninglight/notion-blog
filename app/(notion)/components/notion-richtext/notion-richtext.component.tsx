import { NotionResponse } from "notion-api-types";
import { NotionLinkComponent } from "../notion-link/notion-link.component";
import { Annotations, AnnotationType, NotionRichtextComponentProps, NotionRichtextEquationComponentProps, NotionRichtextMentionComponentProps, NotionRichtextTextComponentProps } from "./notion-richtext.model";
import styles from './notion-richtext.module.css';

export const NotionRichtextComponent = ({ richtext }: NotionRichtextComponentProps) => {
    switch(richtext.type) {
        case 'text': 
            return <NotionRichtextTextComponent richtext={richtext} />
        case 'mention': 
            return <NotionRichtextMentionComponent richtext={richtext} />
        case 'equation': 
            return <NotionRichtextEquationComponent richtext={richtext} />
    }
}

export const NotionRichtextTextComponent = ({ richtext }: NotionRichtextTextComponentProps) => {
    const getAnnotation = (annotations: Annotations) => {
        const aggregateAnnotationKeys = (usedAnnotations: Array<AnnotationType>, annotationKey: AnnotationType) => {
            if (annotations[annotationKey]) {
                usedAnnotations.push(annotationKey);
            }
            return usedAnnotations;
        };
        return (Object.keys(annotations) as Array<AnnotationType>).reduce(aggregateAnnotationKeys, []);
    }

    const defineClassNamesFromAnnotation = (richtext: NotionResponse.RichText): string => {
        const annotations = getAnnotation(richtext.annotations);
        const colorClassName = styles[richtext.annotations.color] || '';
        const annotationClassNames = annotations.map((annotation) => styles[annotation]).join(' ')
        return `${styles.text} ${colorClassName} ${annotationClassNames}`.trim();
    }

    const extractPageIdFromRichtextHref = (href: string) => {
        return href.split('/')[1];
    }

    if(!!richtext.href) {
        const pageId = extractPageIdFromRichtextHref(richtext.href)
        return <NotionLinkComponent pageId={pageId} label={richtext.text.content}></NotionLinkComponent>
    }
    const className = defineClassNamesFromAnnotation(richtext);
    return <span className={className}>{richtext.text.content}</span>
}

export const NotionRichtextMentionComponent = ({ richtext }: NotionRichtextMentionComponentProps) => {
    // TODO : manage Mention + styles
    switch(richtext.mention.type) {
        case 'database':
            return <span className={styles.mention}>{richtext.mention.database.id}</span>
        case 'date':
            return <span className={styles.mention}>{richtext.mention.date.start} {richtext.mention.date.end} {richtext.mention.date.time_zone}</span>
        case 'page':
            return <span className={styles.mention}><NotionLinkComponent pageId={richtext.mention.page.id} /></span>
        case 'user':
            return <span className={styles.mention}>{richtext.mention.user.name}</span>
    }
}

export const NotionRichtextEquationComponent = ({ richtext }: NotionRichtextEquationComponentProps) => {
     // TODO : manage equation styles
     return <span className={styles.equation}>{richtext.equation.expression}</span>
}