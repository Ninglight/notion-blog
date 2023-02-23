import { Emoji } from "notion-api-types/responses/global";
import { File } from "notion-api-types/responses";

export const getNotionEmoji = (icon: File | Emoji | null): string | undefined => {
    if (icon?.type === 'emoji') {
      return icon.emoji;
    }

    return;
}