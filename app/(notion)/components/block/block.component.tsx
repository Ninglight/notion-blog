import React from "react";
import { BLOCK_TYPE_COMPONENTS } from "../../notion.constants";
import { NotionBlockType } from "../../notion.model";
import styles from './block.module.css';

export const BlockComponent = ({ result }: { result: { type: NotionBlockType } }): JSX.Element => {
    const component = BLOCK_TYPE_COMPONENTS[result.type];

        if(!component) {
            return <div className={styles.block}>{JSON.stringify(result)}</div>;
        }
        
        return <div className={styles.block}>{React.createElement(component, { result: result })}</div>;
}