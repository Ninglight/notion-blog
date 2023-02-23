import { RichTexts } from 'notion-api-types/responses';
import { HeadingComponent } from '@/app/components/heading/heading.component';
import { HeadingTags } from '@/app/components/heading/heading.model';
import { NotionResponse } from 'notion-api-types';
import { NotionHeading3ComponentProps } from './notion-heading-3.model';

export const NotionHeading3Component = ({ result }: NotionHeading3ComponentProps): JSX.Element => {
    const content = result.heading_3.rich_text.map((text: NotionResponse.RichText) => (text as RichTexts.Text).text.content).flat();
    return <HeadingComponent tag={HeadingTags.H2}>{content}</HeadingComponent>
}