import React from 'react';
import styles from "./Tier.module.css";

import { Character } from "../Character";

import { TierName, TIERNAME_TO_STRING } from '../../../data';

interface IProps {
    tierName: TierName;
    characters: string[];
    id: string;
}

const getColor = (tier: TierName) => styles[`tier${tier}`];

export class Tier extends React.Component<IProps> {
    public render(): React.ReactNode {
        const tierName = this.props.tierName;
        const tierString = TIERNAME_TO_STRING(tierName);
        const tierStringFull = (tierName === TierName.UR) ? "Unranked" : (tierName === TierName.DW) ? "Didn't Watch" : `${tierString} Tier`;
        return (
            <div className={`${(tierName === TierName.DW) ? styles.tierBottom : styles.tier}`}>
                <span className={[getColor(tierName), styles.tierText].join(" ")} title={tierStringFull}>
                    {tierString}
                </span>
                {/* keep tierX at beginning */}
                <div className={`tier${tierName} ${styles.tierCharacters}`} id={`tierCharacters${tierName}`}>
                    {this.props.characters.map((char) =>
                        <Character character={char} key={char} />
                    )}
                </div>
            </div>
        );
    }
};
