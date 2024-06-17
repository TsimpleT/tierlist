import React from 'react';
import styles from "./Character.module.css";
import { GET_SERIES_FOR_CHARACTER, GET_CHARACTER_USER_RATING_DESCRIPTOR_STRING } from '../../../data';

interface IProps {
    character: string;
    canEdit: boolean;
    showVoting: boolean;
}

export class Character extends React.Component<IProps> {
    public render(): React.ReactNode {
        let titleAppend = (this.props.showVoting) ? GET_CHARACTER_USER_RATING_DESCRIPTOR_STRING(this.props.character) : "";
        return (
            <div className={styles.item}>
                <div className={`${styles.itemContent} ${this.props.canEdit && styles.itemContentHover}`}>
                    <img
                        src={require(`../../../assets/characters/${this.props.character}.png`)}
                        alt={this.props.character}
                        title={`${this.props.character} (${GET_SERIES_FOR_CHARACTER(this.props.character)})${titleAppend}`}
                        width={35}
                        height={35}
                    />
                </div>
            </div>
        );
    }
};
