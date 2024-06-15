import React from 'react';
import Muuri from 'muuri';
import styles from "./HomeApp.module.css";

import { GET_SAVED_USERNAMES } from '../data/savedTierlists';
import { Link } from 'react-router-dom';

interface IProps {}
interface IState {}

export class HomeApp extends React.Component<IProps, IState> {
    private muuris: {[key: string]: Muuri} = {};

    public constructor(props: IProps) {
        super(props);
    }

    public override componentDidMount(): void {
        document.title = `Best Girl Tierlist`;
        console.log(`HomeApp MOUNT`);
        // for(let n in ALL_TIERS) {
        //     if(ALL_TIERS[n] !== TierName.UR && ALL_TIERS[n] !== TierName.DW) {
        //         const muuriName = `.tier${n}`;
        //         if(!this.muuris[muuriName]) {
        //             this.muuris[muuriName] = new Muuri(muuriName, {
        //                 dragEnabled: false,
        //                 dragContainer: document.body,
        //                 dragSort: () => Object.values(this.muuris)
        //             });
        //         }
        //     }
        // }
    }

    public render(): React.ReactNode {
        const allUsers = GET_SAVED_USERNAMES();
        console.log(allUsers);
        return (
            <div>
                {allUsers.map((username) => (
                    <div>
                        <span className={styles.text}>{username}</span>
                        <Link to={`/tierlist/view/${username}`} className={styles.text}>view</Link>
                        <Link to={`/tierlist/create/${username}`} className={styles.text}>create starting from</Link>
                    </div>
                ))}
                <Link to={`/tierlist/create/`} className={styles.text}>create new</Link>
            </div>
        );
    }
}
