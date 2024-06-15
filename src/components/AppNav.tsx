import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./AppNav.module.css";

import { EImageIcon, ImageUtil, VERSION_STRING } from '../data';

export class AppNav extends React.Component {
    public render(): React.ReactNode {
        return (
            <nav className={styles.container}>
                <Link to={"/tierlist"}>
                    <img src={ImageUtil.getIconImage(EImageIcon.HOME)} title={"Home"} alt={"Home"} className={styles.homeButton} height={18}/>
                </Link>
                <span className={styles.title}>Best Girl Tierlist</span>
                <span className={styles.version}>{VERSION_STRING}</span>
            </nav>
        );
    }
}
