import React from 'react';
import styles from "./Character.module.css";
import { GET_SERIES_FOR_CHARACTER } from '../../../data';

interface IProps {
    character: string;
}

export class Character extends React.Component<IProps> {
    public render(): React.ReactNode {
        return (
            <div className={styles.item}>
                <div className={styles.itemContent}>
                    <img
                        src={require(`../../../assets/characters/${this.props.character}.png`)}
                        alt={this.props.character}
                        title={`${this.props.character} (${GET_SERIES_FOR_CHARACTER(this.props.character)})`}
                        width={35}
                        height={35}
                    />
                </div>
            </div>
        );
    }
};
