import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./MenuSavesPage.module.css";

import { DEV_STRING_PRE, EImageIcon, GET_SERIES_FOR_CHARACTER, ITierlist, ImageUtil } from '../../../data';
import { GET_FAVORITE_CHARACTER, GET_SAVED_ITIERLIST, GET_SAVED_USERNAMES, NO_FAVORITE_CHARACTER } from '../../../data/SavedTierlists';

export class MenuSavesPage extends React.Component {
    public override componentDidMount(): void {
        console.log(`MenuSavesPage MOUNT`);
        document.title = `${DEV_STRING_PRE}Best Girl Tierlist`;
    }
    
    public render(): React.ReactNode {
        const savedUsernames: string[] = GET_SAVED_USERNAMES();
        return (
            <div className={styles.container}>
                <div className={styles.row}>
                    <Link to={`/tierlist/create`} className={styles.colorAndMargin}>
                        <img src={ImageUtil.getIconImage(EImageIcon.CREATE_NEW)} title={"Create New Tierlist"} alt={"Create New Tierlist"}
                            className={styles.margin} height={35}/>
                        <span>create new</span>
                    </Link>
                </div>
                {savedUsernames.map((username) => {
                    const itierlist: ITierlist = GET_SAVED_ITIERLIST(username);
                    const favChar: string = GET_FAVORITE_CHARACTER(username);
                    return (
                        <div className={styles.row} key={username}>
                            {(favChar !== NO_FAVORITE_CHARACTER) && <img src={require(`../../../assets/characters/${favChar}.png`)}
                                className={styles.margin}
                                alt={favChar}
                                title={`${favChar} (${GET_SERIES_FOR_CHARACTER(favChar)})`}
                                width={35}
                                height={35}
                            />}
                            <span className={styles.margin}>{itierlist.username}</span>
                            <Link to={`/tierlist/view/${username}`} className={styles.colorAndMargin}>view</Link>
                            <Link to={`/tierlist/create/${username}`} className={styles.colorAndMargin}>create starting from</Link>
                            <span className={styles.margin}>{`(Last Updated: ${itierlist.lastUpdated})`}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
