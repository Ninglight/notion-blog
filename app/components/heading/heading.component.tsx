import React from 'react';
import styles from './heading.module.css';
import { HeadingComponentProps } from './heading.model';

export const HeadingComponent = ({ tag, apperance, children }: HeadingComponentProps) => {
    const className = ` ${styles.heading} ${styles[apperance || tag]}`;
    return React.createElement(tag, { className }, children);
}