import Image from 'next/image';
import styles from './image.module.css'

export const ImageComponent = ({ result }: { result: any }): JSX.Element => {
    const image = result.image?.file?.url;
    
    if(!image) {
        return <></>;
    }

    return <Image className={styles.image} src={image} priority={true} alt={'cover'} width={700} height={300} />
}