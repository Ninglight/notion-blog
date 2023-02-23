import { HeadingComponent } from '@/app/components/heading/heading.component';
import { HeadingTags } from '@/app/components/heading/heading.model';
import { NotionResponse } from 'notion-api-types';
import { Blocks, RichTexts } from 'notion-api-types/responses';
import { NotionHeading1ComponentProps } from './notion-heading-1.model';

export const NotionHeading1Component = ({ result }: NotionHeading1ComponentProps): JSX.Element => {
    const content = result.heading_1.rich_text.map((text: NotionResponse.RichText) => (text as RichTexts.Text).text.content).flat();
    return <HeadingComponent tag={HeadingTags.H1}>{content}</HeadingComponent>
}