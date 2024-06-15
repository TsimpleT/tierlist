import React from 'react';
import Muuri from 'muuri';
import styles from "./Tierlist.module.css";

import { TierName, CREATE_EMPTY_TIERLIST, TierlistSchema, ImageUtil, EImageIcon, ITierlist, NUMBER_TO_TIERNAME, VIEW_ONLY_TIERS } from '../../data';
import { Tier } from './Tier';
import { GET_SAVED_ITIERLIST, GET_SAVED_USERNAMES } from '../../data/savedTierlists';

const OLD_SHEET_LINK = "https://docs.google.com/spreadsheets/d/1QlH4sO5_ExwYWnqgb9Jl35T-xXLLR3xhPEEUyjwVWh4/edit?gid=1864619649#gid=1864619649";

interface IProps {
    muuris: {[key: string]: Muuri};
    username: string;
}

interface IState {}

export class TierlistViewer extends React.Component<IProps, IState> {
    private tierlist: { [name in TierName]: string[] };

    public constructor(props: IProps) {
        super(props);
        this.tierlist = CREATE_EMPTY_TIERLIST();
        if(GET_SAVED_USERNAMES().includes(this.props.username)) {
            const itierlist: ITierlist = GET_SAVED_ITIERLIST(this.props.username);
            // console.log(itierlist);
            if(itierlist.tierlistSchema === TierlistSchema.V0) {
                for(let tier in itierlist.tierlist) {
                    this.tierlist[NUMBER_TO_TIERNAME(+tier)] = itierlist.tierlist[tier];
                }
            } else {
                throw Error(`Unsupported tierlistSchema ${itierlist.tierlistSchema}`);
            }
        }
    }

    // private exportToClipboard = (): void => {
    //     // console.log(this.state.tierlist);
    //     const copyData = {
    //         username: "TODO",
    //         tierlistSchema: TierlistSchema.V0,
    //         tierlist: this.state.tierlist
    //     };
    //     copy(JSON.stringify(
    //         copyData,
    //         // remove unranked tier to save space
    //         (key, value) => {
    //             console.log(key, value);
    //             return (key === `${TierName.UR}` && Array.isArray(value)) ? undefined : value
    //         },
    //         // 4 space tabs
    //         4
    //     ));
    //     window.alert("Tierlist copied. Please paste it in a document and send it to tsimplet.");
    // }

    /*private importFromClipboard = (): void => {
        let text = window.prompt("Paste the tierlist.");
        if(text) {
            let parsed = JSON.parse(text);
            console.log(parsed);
            let charStatusDict: {[key: string]: boolean} = {};
            for(let tierName of ALL_TIERS) {
                if(tierName in parsed) {
                    for(let char of parsed[tierName]) {
                        charStatusDict[char] = true;
                        this.state.tierlist[tierName].push(char);
                    }
                }
            }
            for(let series of ALL_SERIES) {
                for(let char of SERIES_CHARACTERS[series]) {
                    if(!(char in charStatusDict)) {
                        this.state.tierlist[TierName.UR].push(char);
                    }
                }
            }
            // console.log();
            
            this.props.test(this.state.tierlist);
            // console.log(this.state.tierlist);
        }
    }*/

    private showImportantInfo = (): void => {
        window.alert("Your tierlist does NOT auto-save, you must \"Export to Clipboard\" and save it to a file and/or send it to TsimpleT\n\nHover over anything to see what a button does or who the character is");
    }
    
    private recentlyAdded = (): void => {
        window.alert("RECENTLY ADDED:\n- Anime when you hover over a character\n- More characters!");
    }

    private comingSoon = (): void => {
        window.alert("NEXT MAJOR UPDATE:\n- Home page with everyone's tierlists and an averaged tierlist\n- Character requests (almost always adding more)\n\nFUTURE UPDATES:\n- Starting from a saved tierlist instead of from scratch\n- Search by anime/character\n\nSuggestions/requests for improvements/characters/series are welcome!");
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.container}>
                <div className={styles.buttonHeader}>
                    <span className={styles.userTitle}>{`viewing ${this.props.username}'s tierlist`}</span>
                    {/* <img src={ImageUtil.getIconImage(EImageIcon.COPY_TO_CLIPBOARD)} title={"Export to Clipboard"} alt={"Export to Clipboard"}
                        className={styles.imageButton} onClick={this.exportToClipboard} height={20}/> */}
                    {/* <span onClick={this.importFromClipboard}>Import from Clipboard</span> */}
                    <img src={ImageUtil.getIconImage(EImageIcon.INFO)} title={"Show Important Info"} alt={"Show Important Info"}
                        className={styles.imageButton} onClick={this.showImportantInfo} height={20}/>
                    <img src={ImageUtil.getIconImage(EImageIcon.UPDATE_NOTES)} title={"Update Notes"} alt={"Update Notes"}
                        className={styles.imageButton} onClick={this.recentlyAdded} height={20}/>
                    <img src={ImageUtil.getIconImage(EImageIcon.COMING_SOON)} title={"Coming Soon"} alt={"Coming Soon"}
                        className={styles.imageButton} onClick={this.comingSoon} height={20}/>
                    <a href={OLD_SHEET_LINK} target="_blank" rel="noreferrer" className={styles.linkImageButton} >
                        <img src={ImageUtil.getIconImage(EImageIcon.GOOGLE_SHEET)} title={"Link to Old Tierlist Sheet"} alt={"Link to Old Tierlist Sheet"}
                        height={20} />
                    </a>
                </div>
                <div className={styles.scroller}>
                    {VIEW_ONLY_TIERS.map((tierName) => <Tier
                        tierName={tierName}
                        characters={this.tierlist[tierName]}
                        key={tierName}
                        id={`tier${tierName}`}
                        canEdit={false}
                    />)}
                </div>
            </div>
          );
    }
}
