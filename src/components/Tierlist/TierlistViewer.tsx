import React from 'react';
import Muuri from 'muuri';
import styles from "./Tierlist.module.css";

import { TierName, CREATE_EMPTY_TIERLIST, ITierlist, NUMBER_TO_TIERNAME, VIEW_ONLY_TIERS } from '../../data/TierlistConstants';
import { AGGREGATE_TIERLIST_MIN_VOTES, GET_AGGREGATE_TIERLIST, GET_SAVED_ITIERLIST, GET_SAVED_USERNAMES } from '../../data/SavedTierlists';
import { Tier } from './Tier';

interface ISetup { type: string };
interface UsernameSetup extends ISetup { type: "username", username: string };
interface AggregateSetup extends ISetup { type: "aggregate" };
type TSetup = UsernameSetup | AggregateSetup;

interface IProps {
    muuris: {[key: string]: Muuri};
    setup: TSetup;
}

export class TierlistViewer extends React.Component<IProps> {
    private tierlist: { [name in TierName]: string[] };

    public constructor(props: IProps) {
        super(props);
        if(props.setup.type === "username") {
            this.tierlist = CREATE_EMPTY_TIERLIST();
            if(GET_SAVED_USERNAMES().includes(props.setup.username)) {
                const itierlist: ITierlist = GET_SAVED_ITIERLIST(props.setup.username);
                // console.log(itierlist);
                if(itierlist.tierlistSchema === "0.1.0") {
                    for(let tier in itierlist.tierlist) {
                        this.tierlist[NUMBER_TO_TIERNAME(+tier)] = itierlist.tierlist[tier];
                    }
                } else {
                    throw Error(`Unsupported tierlistSchema ${itierlist.tierlistSchema}`);
                }
            }
        } else {
            this.tierlist = GET_AGGREGATE_TIERLIST();
        }
    }

    public render(): React.ReactNode {
        const title: string = (
            (this.props.setup.type === "username")
                ? `Viewing ${this.props.setup.username}'s tierlist`
                : `Viewing aggregate tierlist for characters with at least ${AGGREGATE_TIERLIST_MIN_VOTES} votes`
        );
        return (
            <div className={styles.container}>
                <div className={styles.buttonHeader}>
                    <span className={styles.userTitle}>{title}</span>
                </div>
                <div className={styles.scroller}>
                    {VIEW_ONLY_TIERS.map((tierName) => 
                        <Tier
                            tierName={tierName}
                            characters={this.tierlist[tierName]}
                            key={tierName}
                            id={`tier${tierName}`}
                            canEdit={false}
                            showVoting={true}
                        />
                    )}
                </div>
            </div>
          );
    }
}
