import React from 'react';
import Muuri, { Item } from 'muuri';
import copy from 'copy-to-clipboard';
import styles from "./Tierlist.module.css";

import { TierName, ALL_TIERS, SERIES_CHARACTERS, ALL_SERIES, CREATE_EMPTY_TIERLIST, TierlistSchema } from '../../data';
import { Tier } from './Tier';

const OLD_SHEET_LINK = "https://docs.google.com/spreadsheets/d/1QlH4sO5_ExwYWnqgb9Jl35T-xXLLR3xhPEEUyjwVWh4/edit?gid=1864619649#gid=1864619649";

interface IProps {
    // initialTierlist: { [name in TierName]: string[] };
    muuris: {[key: string]: Muuri};
    test: (tierlist: { [name in TierName]: string[] }) => void;
}

interface IState {
    tierlist: { [name in TierName]: string[] };
}

interface CharacterAndTransform {
    character: string;
    transformX: number;
    transformY: number;
};

export class Tierlist extends React.Component<IProps, IState> {
    private removeListenerDict: {[key: string]: (data: Item) => void} = {};
    private addListenerDict: {[key: string]: (data: Item) => void} = {};

    public constructor(props: IProps) {
        super(props);
        this.state = {
            tierlist: CREATE_EMPTY_TIERLIST()
        }
        for(let series of ALL_SERIES) {
            for(let char of SERIES_CHARACTERS[series]) {
                this.state.tierlist[TierName.UR].push(char);
            }
        }
    }

    public override componentDidMount(): void {
        setTimeout(() => {
            console.log("TL MOUNT timeout");
            for(let tierName of ALL_TIERS) {
                const muuriName = `.tier${tierName}`;

                if(muuriName in this.removeListenerDict) {
                    this.props.muuris[muuriName].off('dragEnd', this.removeListenerDict[muuriName]);
                    delete this.removeListenerDict[muuriName];
                }
                this.removeListenerDict[muuriName] = this.createRemoveListener(tierName);
                this.props.muuris[muuriName].on('dragEnd', this.removeListenerDict[muuriName]);

                if(muuriName in this.addListenerDict) {
                    this.props.muuris[muuriName].off('dragReleaseEnd', this.addListenerDict[muuriName]);
                    delete this.addListenerDict[muuriName];
                }
                this.addListenerDict[muuriName] = this.createAddListener(tierName);
                this.props.muuris[muuriName].on('dragReleaseEnd', this.addListenerDict[muuriName]);
            }
        }, 100);
    }

    private createRemoveListener(fromTierName: TierName): (data: Item) => void {
        return (data: Item): void => {
            const character: string|undefined|null = data.getElement()?.children[0].children[0].getAttribute("title");
            if(character === undefined || character === null) {
                console.debug("Character remove from tier failed", data);
                return;
            }
            // const toTierName = CLASSNAME_TO_TIERNAME(data.getGrid()?.getElement().classList[0]);
            // console.log(character, "from", TIERNAME_TO_STRING(fromTierName)/*, "to", TIERNAME_TO_STRING(toTierName)*/);
            this.updateTier(fromTierName);
        }
    }

    private createAddListener(toTierName: TierName): (data: Item) => void {
        return (data: Item): void => {
            const character: string|undefined|null = data.getElement()?.children[0].children[0].getAttribute("alt");
            if(character === undefined || character === null) {
                console.debug("Character add to tier failed", data);
                return;
            }
            // console.log(character, "to", TIERNAME_TO_STRING(fromTierName));
            this.updateTier(toTierName);
        }
    }

    private updateTier(tierName: TierName): void {
        // console.log("updateTier", TIERNAME_TO_STRING(tierName));
        const children = document.getElementById(`tierCharacters${tierName}`)?.children;
        if(children) {
            let characterAndTransformList: CharacterAndTransform[] = [];
            for(let i = 0; i < children.length; i++) {
                let char: string|null = children[i].children[0].children[0].getAttribute("title");
                if(!char) {
                    console.error("no title in child img");
                    break;
                }

                let styleStr: string|null = children[i].getAttribute("style");
                if(!styleStr) {
                    console.error("no style str");
                    break;
                }
                let transformIdx: number = styleStr.indexOf("transform: ");
                if(transformIdx < 0) {
                    console.error("no 'transform: ' in style str");
                    break;
                }
                const transformStr = styleStr.substring(transformIdx+11, styleStr.indexOf(";", transformIdx));
                const translateXIdx: number = transformStr.indexOf("translateX(");
                const translateYIdx: number = transformStr.indexOf("translateY(");

                characterAndTransformList.push({
                    character: char,
                    transformX: +transformStr.substring(translateXIdx+11, transformStr.indexOf(")", translateXIdx)-2),
                    transformY: +transformStr.substring(translateYIdx+11, transformStr.indexOf(")", translateYIdx)-2)
                });
            }
            // console.log(characterAndTransformList);
            let charList: string[] = characterAndTransformList.sort((a, b) => {
                const dy = a.transformY - b.transformY, dx = a.transformX - b.transformX;
                return (dy === 0) ? dx : dy;
            }).map(obj => obj.character);
            // console.log(charList);
            this.state.tierlist[tierName] = charList;
        }
    }

    private exportToClipboard = (): void => {
        // console.log(this.state.tierlist);
        const copyData = {
            username: "TODO",
            tierlistSchema: TierlistSchema.V0,
            tierlist: this.state.tierlist
        };
        copy(JSON.stringify(
            copyData,
            // remove unranked tier to save space
            (key, value) => {
                console.log(key, value);
                return (key === `${TierName.UR}` && Array.isArray(value)) ? undefined : value
            },
            // 4 space tabs
            4
        ));
        window.alert("Tierlist copied. Please paste it in a document and send it to tsimplet.");
    }

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

    private showInfo = (): void => {
        window.alert("Your tierlist does NOT auto-save, you must \"Export to Clipboard\" and save it to a file and/or send it to TsimpleT.\n\nNEXT UPDATE:\n- Character requests\n- Home page with everyone's tierlists and an averaged tierlist.\n\nUPCOMING UPDATES:\n- Starting from a saved tierlist instead of from scratch.\n- Search by anime/character\n\nSuggestions/requests for improvements/characters/series are welcome!");
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.container}>
                <div className={styles.buttonHeader}>
                    <span onClick={this.exportToClipboard}>Export to Clipboard</span>
                    {/* <span onClick={this.importFromClipboard}>Import from Clipboard</span> */}
                    <span onClick={this.showInfo}>Info</span>
                    <a href={OLD_SHEET_LINK} target="_blank" rel="noreferrer">Old Sheet Link</a>
                </div>
                <div className={styles.scroller}>
                    {ALL_TIERS.map((tierName) => <Tier
                        tierName={tierName}
                        characters={this.state.tierlist[tierName]}
                        key={tierName}
                        id={`tier${tierName}`}
                    />)}
                </div>
            </div>
          );
    }
}
