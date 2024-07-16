import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./AppNav.module.css";

import { EImageIcon, ImageUtil, OLD_SHEET_LINK, VERSION_STRING } from '../data';

function showImportantInfo(): void {
    window.alert("When creating a tierlist, it does NOT auto-save, you must \"Export to Clipboard\" and save it to a file and/or send it to TsimpleT\n\nHover over anything to see what a button does or who the character is");
}

function displayUpdateNotes(): void {
    window.alert("[beta v3.0]\n- Aggregate tierlist and beginning prettification\n[beta v2.0]\n- Simple menu/view/create pages; saves\n[beta v1.0]\n- Tierlist creation only");
}

function displayComingSoon(): void {
    window.alert("Coming Soon\n- Making things prettier + Character requests (almost always)\n\nNext Major Feature [beta v4.0]\n- tournament\n\nFuture Release [v1.0.0]\n- Auto-save via cookies\n\nSuggestions/requests for improvements/characters/series are welcome!");
}

export class AppNav extends React.Component {
    public render(): React.ReactNode {
        return (
            <nav className={styles.container}>
                <span className={styles.title}>Best Girl Tierlist</span>
                <span className={styles.version}>{VERSION_STRING}</span>
                <Link to={"/tierlist/menu"}>
                    <img src={ImageUtil.getIconImage(EImageIcon.MENU)} className={styles.homeButton} height={20}
                        title={"View/Create Individual Tierlist Menu"} alt={"View/Create Individual Tierlist Menu"} />
                </Link>
                <Link to={"/tierlist/aggregate"}>
                    <img src={ImageUtil.getIconImage(EImageIcon.AGGREGATE_BEST_GIRL)} className={styles.homeButton} height={20}
                        title={"View Aggregate Tierlist"} alt={"View Aggregate Tierlist"} />
                </Link>
                {/* <Link to={"/tierlist/tournament"}>
                    <img src={ImageUtil.getIconImage(EImageIcon.BRACKET)} className={styles.homeButton} height={20}
                        title={"Play Tournament"} alt={"Play Tournament"} />
                </Link> */}
                <img src={ImageUtil.getIconImage(EImageIcon.WARNING)} title={"Show Important Info"} alt={"Show Important Info"}
                    className={styles.imageButton} onClick={showImportantInfo} height={16}/>
                <img src={ImageUtil.getIconImage(EImageIcon.UPDATE_NOTES)} title={"Update Notes"} alt={"Update Notes"}
                    className={styles.imageButton} onClick={displayUpdateNotes} height={16}/>
                <img src={ImageUtil.getIconImage(EImageIcon.COMING_SOON)} title={"Coming Soon"} alt={"Coming Soon"}
                    className={styles.imageButton} onClick={displayComingSoon} height={16}/>
                <a href={OLD_SHEET_LINK} target="_blank" rel="noreferrer" className={styles.linkImageButton} >
                    <img src={ImageUtil.getIconImage(EImageIcon.GOOGLE_SHEET)} height={14}
                        title={"Link to Old Tierlist Sheet (access only if you have used it)"}
                        alt={"Link to Old Tierlist Sheet (access only if you have used it)"} />
                </a>
            </nav>
        );
    }
}
