import { NotionResponse } from "notion-api-types";
import { RichTexts } from "notion-api-types/responses";
import { Color } from "notion-api-types/responses/global";

export interface NotionRichtextComponentProps {
    richtext: NotionResponse.RichText;
}

export interface NotionRichtextTextComponentProps {
    richtext: RichTexts.Text
}

export interface NotionRichtextMentionComponentProps {
    richtext: RichTexts.Mention
}

export interface NotionRichtextEquationComponentProps {
    richtext: RichTexts.Equation
}

export enum AnnotationType {
    BOLD = 'bold',
    ITALIC = 'italic',
    STRIKETHROUGH = 'strikethrough',
    UDERLINE = 'underline',
    CODE = 'code'
}

export interface Annotations {
    /** Whether the text is bolded. */
    [AnnotationType.BOLD]: boolean;
    /** Whether the text is italicized. */
    [AnnotationType.ITALIC]: boolean;
    /** Whether the text is struck through. */
    [AnnotationType.STRIKETHROUGH]: boolean;
    /** Whether the text is underlined. */
    [AnnotationType.UDERLINE]: boolean;
    /** Whether the text is code style. */
    [AnnotationType.CODE]: boolean;
}