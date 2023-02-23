import { LinkComponent } from "../../../components/link/link.component";
import { useNotionPageEmoji } from "./hooks/notion-page-emoji.hook";
import { useNotionPageHref } from "./hooks/notion-page-href.hook";
import { useNotionPageTitle } from "./hooks/notion-page-title.hook";
import { NotionLinkComponentProps } from "./notion-link.model";

export const NotionLinkComponent = ({ pageId, label }: NotionLinkComponentProps) => {
    const href = useNotionPageHref(pageId);
    const emoji = useNotionPageEmoji(pageId);
    const title = useNotionPageTitle(pageId, label);
    return <LinkComponent href={href} emoji={emoji}>{label || title}</LinkComponent>
}


