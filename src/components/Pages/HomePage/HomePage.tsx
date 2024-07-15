import React from 'react';
import styles from "./HomePage.module.css";

import { DEV_STRING_PRE } from '../../../data';

export class HomePage extends React.Component {
    public override componentDidMount(): void {
        console.log(`HomePage MOUNT`);
        document.title = `${DEV_STRING_PRE}Best Girl Tierlist Home`;
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.container}>
                <span>Home Page is under construction</span>
            </div>
        );
    }
}
