import React from 'react';
import Muuri, { Item } from 'muuri';
import copy from 'copy-to-clipboard';
import styles from "./Tierlist.module.css";

import { Tier } from './Tier';
import { SERIES_CHARACTERS, ALL_SERIES, ImageUtil, EImageIcon, GET_SAVED_ITIERLIST, GET_SAVED_USERNAMES } from '../../data';
import { TierName, ALL_TIERS, CREATE_EMPTY_TIERLIST, ITierlist, NUMBER_TO_TIERNAME } from '../../data/TierlistConstants';

interface IProps {
    muuris: {[key: string]: Muuri};
    username: string;
}

interface IState {
    tierlist: { [name in TierName]: string[] };
}

interface CharacterAndTransform {
    character: string;
    transformX: number;
    transformY: number;
};

export class TierlistCreator extends React.Component<IProps, IState> {
    private removeListenerDict: {[key: string]: (data: Item) => void} = {};
    private addListenerDict: {[key: string]: (data: Item) => void} = {};
    private filterTo?: string;

    public constructor(props: IProps) {
        super(props);
        let tierlist = CREATE_EMPTY_TIERLIST();
        if(GET_SAVED_USERNAMES().includes(this.props.username)) {
            const itierlist: ITierlist = GET_SAVED_ITIERLIST(this.props.username);
            let characterAddedDict: {[key: string]: boolean} = {};
            if(itierlist.tierlistSchema === "0.1.0") {
                for(let tier in itierlist.tierlist) {
                    tierlist[NUMBER_TO_TIERNAME(+tier)] = itierlist.tierlist[tier];
                    for(let char of itierlist.tierlist[tier]) {
                        characterAddedDict[char] = true;
                    }
                }
            } else {
                throw Error(`Unsupported tierlistSchema ${itierlist.tierlistSchema}`);
            }
            for(let series of ALL_SERIES) {
                for(let char of SERIES_CHARACTERS[series]) {
                    if(!(char in characterAddedDict)) {
                        tierlist[TierName.UR].push(char);
                    }
                }
            }
        } else {
            for(let series of ALL_SERIES) {
                for(let char of SERIES_CHARACTERS[series]) {
                    tierlist[TierName.UR].push(char);
                }
            }
        }
        this.state = { tierlist: tierlist }
    }

    public override componentDidMount(): void {
        setTimeout(() => {
            console.log("TierlistCreator MOUNT (in timeout)");
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
                
                // this.props.muuris[muuriName].on('synchronize', () => { console.log("synchronize"); });
                // this.props.muuris[muuriName].on('layoutStart', (items, isInstant) => { console.log("layoutStart", items, isInstant); });
                // this.props.muuris[muuriName].on('layoutEnd', (items) => { console.log("layoutEnd", items); });
                // this.props.muuris[muuriName].on('layoutAbort', (items) => { console.log("layoutAbort", items); });
                // this.props.muuris[muuriName].on('add', (items) => { console.log("add", items); });
                // this.props.muuris[muuriName].on('remove', (items, indicies) => { console.log("remove", items, indicies); });
                // this.props.muuris[muuriName].on('showStart', (items) => { console.log("showStart", items); });
                // this.props.muuris[muuriName].on('showEnd', (items) => { console.log("showEnd", items); });
                // this.props.muuris[muuriName].on('hideStart', (items) => { console.log("hideStart", items); });
                // this.props.muuris[muuriName].on('hideEnd', (items) => { console.log("hideEnd", items); });
                // this.props.muuris[muuriName].on('filter', (shownItems, hiddenItems) => { console.log("filter", shownItems, hiddenItems); });
                // this.props.muuris[muuriName].on('sort', (currOrder, prevOrder) => { console.log("sort", currOrder, prevOrder); });
                // this.props.muuris[muuriName].on('move', (data) => { console.log("move", data); });
                // this.props.muuris[muuriName].on('send', (data) => { console.log("send", data); });
                // this.props.muuris[muuriName].on('beforeSend', (data) => { console.log("beforeSend", data); });
                // this.props.muuris[muuriName].on('receive', (data) => { console.log("receive", data); });
                // this.props.muuris[muuriName].on('beforeReceive', (data) => { console.log("beforeReceive", data); });
                // this.props.muuris[muuriName].on('dragInit', (item, event) => { console.log("dragInit", item, event); });
                // this.props.muuris[muuriName].on('dragStart', (item, event) => { console.log("dragStart", item, event); });
                // this.props.muuris[muuriName].on('dragMove', (item, event) => { console.log("dragMove", item, event); });
                // this.props.muuris[muuriName].on('dragScroll', (item, event) => { console.log("dragScroll", item, event); });
                // this.props.muuris[muuriName].on('dragEnd', (item, event) => { console.log("dragEnd", item, event); });
                // this.props.muuris[muuriName].on('dragReleaseStart', (data) => { console.log("dragReleaseStart", data); });
                // this.props.muuris[muuriName].on('dragReleaseEnd', (data) => { console.log("dragReleaseEnd", data); });
                // this.props.muuris[muuriName].on('destroy', () => { console.log("destroy"); });
            }
        }, 100);
    }

    private createRemoveListener(fromTierName: TierName): (data: Item) => void {
        return (data: Item): void => {
            // const character: string|undefined|null = data.getElement()?.children[0].children[0].getAttribute("title");
            // if(character === undefined || character === null) {
            //     console.debug("Character remove from tier failed", data);
            //     return;
            // }
            // const toTierName = CLASSNAME_TO_TIERNAME(data.getGrid()?.getElement().classList[0].substring(4));
            // console.log(character, "from", TIERNAME_TO_STRING(fromTierName)/*, "to", TIERNAME_TO_STRING(toTierName)*/);
            this.updateTier(fromTierName);
        }
    }

    private createAddListener(toTierName: TierName): (data: Item) => void {
        return (data: Item): void => {
            // const character: string|undefined|null = data.getElement()?.children[0].children[0].getAttribute("alt");
            // if(character === undefined || character === null) {
            //     console.debug("Character add to tier failed", data);
            //     return;
            // }
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
                char = char.substring(0, char.indexOf("(")-1);

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
                const transformStr: string = styleStr.substring(transformIdx+11, styleStr.indexOf(";", transformIdx));
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
            tierlistSchema: "0.1.0",
            lastUpdated: "TODO",
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

    private viewAllCharacters = () => {
        for(let tierName of ALL_TIERS) {
            this.props.muuris[`.tier${tierName}`].filter(() => true);
        }
        (document.getElementById("filterInput") as any).value = "";
    }

    private filterToOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.filterTo = e.currentTarget.value;
        if(!this.filterTo) {
            this.viewAllCharacters();
            return;
        }
        for(let tierName of ALL_TIERS) {
            this.props.muuris[`.tier${tierName}`].filter((item: Item) => {
                const characterAndSeries: string|undefined|null = item.getElement()?.children[0].children[0].getAttribute("title");
                if(!characterAndSeries) {
                    return false;
                }
                return (this.filterTo) ? characterAndSeries.substring(0, characterAndSeries.lastIndexOf(")")+1).toLowerCase().includes(this.filterTo.toLowerCase()) : true;
            });
        }
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.container}>
                <div className={styles.buttonHeader}>
                    <img src={ImageUtil.getIconImage(EImageIcon.COPY_TO_CLIPBOARD)} title={"Export to Clipboard"} alt={"Export to Clipboard"}
                        className={styles.imageButton} onClick={this.exportToClipboard} height={16}/>
                    <span className={styles.userTitle}>{`← IMPORTANT COPY/EXPORT TIERLIST: must press and save or YOU LOSE PROGRESS`}</span>
                    <span className={styles.filterButton} onClick={this.viewAllCharacters}>View All Characters</span>
                    <span className={styles.filterButton}>
                        <span className={styles.filterText}>Filter To</span>
                        <input className={styles.filterInput} placeholder={"enter series or character"} onChange={this.filterToOnChange} id={"filterInput"} />
                    </span>
                </div>
                <div className={styles.scroller}>
                    {ALL_TIERS.map((tierName) => <Tier
                        tierName={tierName}
                        characters={this.state.tierlist[tierName]}
                        key={tierName}
                        id={`tier${tierName}`}
                        canEdit={true}
                    />)}
                </div>
            </div>
          );
    }
}
