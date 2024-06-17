import React from 'react';
import styles from "./Tier.module.css";

import { Character } from "../Character";

import { TierName, TIERNAME_TO_STRING } from '../../../data';

interface IProps {
    tierName: TierName;
    characters: string[];
    id: string;
    canEdit: boolean;
    showVoting?: boolean;
}

const BASE_TIERS = ["Z", "S", "A", "B", "C", "D", "F"];
function getColorStyle (tier: TierName): string {
    const tierStr = TIERNAME_TO_STRING(tier);
    for(let baseTier of BASE_TIERS) {
        if(tierStr[0] === baseTier) {
            return styles[`tier${baseTier}`];
        }
    }
    return "";
}

export class Tier extends React.Component<IProps> {
    public render(): React.ReactNode {
        const tierName = this.props.tierName;
        const tierString = TIERNAME_TO_STRING(tierName);
        const tierStringFull = (tierName === TierName.UR) ? "Unranked" : (tierName === TierName.DW) ? "Didn't Watch / Don't Know" : `${tierString} Tier`;
        return (
            <div className={styles.tier}>
                <span className={`${styles.tierText} ${getColorStyle(tierName)}`} title={tierStringFull}>
                    {tierString}
                </span>
                {/* keep tierX at beginning */}
                <div className={`tier${tierName} ${styles.tierCharacters}`} id={`tierCharacters${tierName}`}>
                    {this.props.characters.map((char) =>
                        <Character character={char} key={char} canEdit={this.props.canEdit} showVoting={this.props.showVoting ?? false}/>
                    )}
                </div>
            </div>
        );
    }
};
