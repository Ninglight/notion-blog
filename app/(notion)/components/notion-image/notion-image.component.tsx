import Image from 'next/image';
import { Blocks } from 'notion-api-types/requests';
import styles from './notion-image.module.css'
import { NotionImageComponentProps } from './notion-image.model';
import { NotionRichtextComponent } from '../notion-richtext/notion-richtext.component';
import { NotionResponse } from 'notion-api-types';

export const NotionImageComponent = ({ result }: NotionImageComponentProps): JSX.Element => {

    if (result.image.caption) {
       return  <p>{result.image.caption.map((richtext: NotionResponse.RichText, index: number) => <NotionRichtextComponent key={index} richtext={richtext} />)}</p>
    }

    const getImage = (result: Blocks.Image) => {
        console.log('result', result)
        switch(result.image.type) {
            case 'file': 
                return result.image.file.url;
            case 'external': 
                return result.image.external.url;
        }
    }
    
    const image = getImage(result);

    if(!image) {
        return <></>;
    }

    // TODO: try placeholder

    return <Image className={styles.image} src={image} priority={true} alt={'cover'} width={700} height={300} />
}