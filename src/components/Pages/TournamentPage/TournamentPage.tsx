import React from 'react';
import styles from "./TournamentPage.module.css";

import { A_CHAR_CODE, ALL_CHARACTERS, DEV_STRING_PRE, GET_RELEVANT_FACTORS, RAND_INT } from '../../../data';
import Muuri from 'muuri';
import { Character } from '../../Tierlist/Character';

interface CharacterAndTransform {
    character: string;
    transformX: number;
    transformY: number;
};

interface IProps {}
interface IState {
    phase: number;
    phases: Phase[];
}

interface Phase {
    phaseName: string;
    count: number;
    groupTiers: GroupTier[];
}

interface GroupAdvancement {
    amount: number;
    phase: number;
    groupTier: number;
}

interface GroupTier {
    tierName: string;
    count: number;
    numGroups: number;
    groups: string[][];
    groupAdvancements: GroupAdvancement[];
}

interface CharacterAndScore { character: string; score: number; }

export class TournamentPage extends React.Component<IProps, IState> {
    private characters: string[];
    private muuris: {[key: string]: Muuri} = {};

    public constructor(props: IProps) {
        super(props);
        const n = ALL_CHARACTERS.length;
        const factors = GET_RELEVANT_FACTORS(n);
        const startingIdx = Math.floor(factors.length*0.65);
        const numGroups = factors[startingIdx];
        const charsPerGroup = n/factors[startingIdx];
        this.state = {
            phase: -1,
            phases: [
                {
                    phaseName: "PRELIMINARY PHASE",
                    count: n,
                    groupTiers: [
                            {
                            tierName: "Preliminary Groups",
                            count: n,
                            numGroups: numGroups,
                            groups: [],
                            groupAdvancements: [
                                {amount: Math.floor(charsPerGroup/4), phase: 1, groupTier: 0},
                                {amount: Math.floor(charsPerGroup/4), phase: 1, groupTier: 1},
                            ]
                        }
                    ]
                },
                {
                    phaseName: "GROUP PHASE R1",
                    count: 8*32,
                    groupTiers: [
                        {
                            tierName: "Upper Groups",
                            count: 4*32,
                            numGroups: 8,
                            groups: [],
                            groupAdvancements: [
                                {amount: 4, phase: 2, groupTier: 0},
                                {amount: 8, phase: 2, groupTier: 1},
                                {amount: 4, phase: 2, groupTier: 2},
                            ]
                        },
                        {
                            tierName: "Lower Groups",
                            count: 4*32,
                            numGroups: 8,
                            groups: [],
                            groupAdvancements: [
                                {amount: 2, phase: 2, groupTier: 2},
                            ]
                        }
                    ]
                },
                {
                    phaseName: "GROUP PHASE R2",
                    count: 8*16+8*2,
                    groupTiers: [
                        {
                            tierName: "Play-in Qualifers",
                            count: 8*4,
                            numGroups: 4,
                            groups: [],
                            groupAdvancements: [
                                {amount: 3, phase: 5, groupTier: 0},
                                {amount: 2, phase: 4, groupTier: 0},
                                {amount: 3, phase: 3, groupTier: 0},
                            ]
                        },
                        {
                            tierName: "Groups",
                            count: 8*8,
                            numGroups: 8,
                            groups: [],
                            groupAdvancements: [
                                {amount: 2, phase: 3, groupTier: 0},
                                {amount: 4, phase: 3, groupTier: 1},
                                {amount: 2, phase: 3, groupTier: 2},
                            ]
                        },
                        {
                            tierName: "Lower Groups",
                            count: 8*(4+2),
                            numGroups: 4,
                            groups: [],
                            groupAdvancements: [
                                {amount: 2, phase: 3, groupTier: 2},
                            ]
                        }
                    ]
                },
                {
                    phaseName: "GROUP PHASE R3",
                    count: 28+32+24,
                    groupTiers: [
                        {
                            tierName: "Play-in Qualifers",
                            count: 28,
                            numGroups: 4,
                            groups: [],
                            groupAdvancements: [
                                {amount: 1, phase: 6, groupTier: 0},
                                {amount: 4, phase: 5, groupTier: 0},
                                {amount: 2, phase: 4, groupTier: 0},
                            ]
                        },
                        {
                            tierName: "Groups",
                            count: 32,
                            numGroups: 4,
                            groups: [],
                            groupAdvancements: [
                                {amount: 4, phase: 4, groupTier: 0},
                                {amount: 4, phase: 4, groupTier: 1},
                            ]
                        },
                        {
                            tierName: "Lower Groups",
                            count: 24,
                            numGroups: 2,
                            groups: [],
                            groupAdvancements: [
                                {amount: 4, phase: 4, groupTier: 1},
                            ]
                        }
                    ]
                },
                {
                    phaseName: "LAST CHANCE PHASE",
                    count: 32+24,
                    groupTiers: [
                        {
                            tierName: "Finals Qualifiers",
                            count: 32,
                            numGroups: 4,
                            groups: [],
                            groupAdvancements: [
                                {amount: 1, phase: 6, groupTier: 0},
                                {amount: 7, phase: 5, groupTier: 0},
                            ]
                        },
                        {
                            tierName: "Last Chance Group",
                            count: 24,
                            numGroups: 2,
                            groups: [],
                            groupAdvancements: [
                                {amount: 4, phase: 5, groupTier: 0},
                            ]
                        }
                    ]
                },
                {
                    phaseName: "PLAY-INS",
                    count: 64,
                    groupTiers: [
                        {
                            tierName: "Play-ins",
                            count: 64,
                            numGroups: 4,
                            groups: [],
                            groupAdvancements: [
                                {amount: 2, phase: 6, groupTier: 0},
                            ]
                        }
                    ]
                },
                {
                    phaseName: "FINALS",
                    count: 16,
                    groupTiers: [
                        {
                            tierName: "Finals",
                            count: 16,
                            numGroups: 1,
                            groups: [],
                            groupAdvancements: [
                                // {amount: 2, groupTier: 0}
                            ]
                        }
                    ]
                }
            ]
        };
        this.characters = [...ALL_CHARACTERS];
    }

    public override componentDidMount(): void {
        console.log(`TournamentPage MOUNT`);
        document.title = `${DEV_STRING_PRE}Best Girl Tierlist Tournament`;
    }

    public override componentDidUpdate(): void {
        console.log(`TournamentPage UPDATE`);
        const phase = this.state.phase;
        if(phase < 0 || phase >= this.state.phases.length) {
            return;
        }

        // clear old muuris
        const phaseIdx = this.state.phase;
        if(phaseIdx > 0) {
            for(let groupTierIdx = 0; groupTierIdx < this.state.phases[phaseIdx-1].groupTiers.length; groupTierIdx++) {
                const groupTier = this.state.phases[phaseIdx-1].groupTiers[groupTierIdx];
                for(let groupIdx = 0; groupIdx < groupTier.groups.length; groupIdx++) {
                    const muuriName = `.group${phaseIdx-1}_${groupTierIdx}_${groupIdx}`;
                    if(this.muuris[muuriName]) {
                        this.muuris[muuriName].destroy();
                    }
                }
            }
        }

        // new muuris
        for(let groupTierIdx = 0; groupTierIdx < this.state.phases[phase].groupTiers.length; groupTierIdx++) {
            const groupTier = this.state.phases[phase].groupTiers[groupTierIdx];
            for(let groupIdx = 0; groupIdx < groupTier.groups.length; groupIdx++) {
                const muuriName = `.group${phase}_${groupTierIdx}_${groupIdx}`;
                if(!this.muuris[muuriName]) {
                    this.muuris[muuriName] = new Muuri(muuriName, {
                        dragEnabled: true,
                        dragContainer: document.body,
                        dragSort: true
                    });
                }
            }
        }
    }

    private generateGroupConfigOnChange(phaseIdx: number, groupTierIdx: number): (event: React.FormEvent<HTMLSelectElement>) => void {
        return (event: React.FormEvent<HTMLSelectElement>): void => {
            event.preventDefault();
            const nGroups = +event.currentTarget.value;
            const nChars = this.state.phases[phaseIdx].groupTiers[groupTierIdx].count/nGroups;
            this.state.phases[phaseIdx].groupTiers[groupTierIdx].numGroups = nGroups;
            this.forceUpdate();
            // this.setState({ tournamentState: TournamentState.SETUP, prelimConfig: [nGroups, nChars], prelimToUB: 1, prelimToLB: 1 });
        }
    }

    // private changePreliminaryUBAdvance = (event: React.FormEvent<HTMLSelectElement>) => {
    //     if(this.state.tournamentState === TournamentState.SETUP) {
    //         event.preventDefault();
    //         const n = +event.currentTarget.value;
    //         this.setState({ tournamentState: TournamentState.SETUP, prelimToUB: n });
    //     }
    // }

    // private changePreliminaryLBAdvance = (event: React.FormEvent<HTMLSelectElement>) => {
    //     if(this.state.tournamentState === TournamentState.SETUP) {
    //         event.preventDefault();
    //         const n = +event.currentTarget.value;
    //         this.setState({ tournamentState: TournamentState.SETUP, prelimToLB: n });
    //     }
    // }

    private renderSetup(): React.ReactNode | undefined {
        if(this.state.phase !== -1) {
            return;
        }
        // const ubn = setupState.prelimConfig[0]*this.state.prelimToUB;
        // const lbn = setupState.prelimConfig[0]*this.state.prelimToLB;
        return (
            <div className={styles.container}>
                <div>{`${this.characters.length} characters total`}</div>
                {/* <div>
                    {this.characters.map(char => <Character character={char} />)}
                </div> */}
                {(this.state.phases.map((phase, phaseIdx) => (
                    <div className={styles.setupPhase} key={phaseIdx}>
                        <div>{`${phase.phaseName} (${phase.count} characters)`}</div>
                        {phase.groupTiers.map((groupTier, groupTierIdx) => {
                            const factors = GET_RELEVANT_FACTORS(groupTier.count);
                            return (
                                <div className={styles.setupGroupTier} key={groupTierIdx}>
                                    <div>{`${groupTier.tierName} (${groupTier.count} characters)`}</div>
                                    <select onChange={this.generateGroupConfigOnChange(phaseIdx, groupTierIdx)}>
                                        {factors.map((factor) =>
                                            <option key={factor} value={factor} selected={factor === groupTier.numGroups}>
                                                {`${factor} groups of ${groupTier.count/factor} characters each`}
                                            </option>
                                        )}
                                    </select>
                                    {groupTier.groupAdvancements.map((advancement, idx) => (
                                        <span className={styles.groupAdvancementInfo}>
                                            {`${idx===0 ? "Top" : "Next"} ${advancement.amount} to ${this.state.phases[advancement.phase].phaseName}: ${this.state.phases[advancement.phase].groupTiers[advancement.groupTier].tierName}`}
                                        </span>
                                    ))}
                                    {/* <select onChange={this.changePreliminaryUBAdvance}>
                                        {[...Array(Math.ceil((groupTier.groupConfig.charsPerGroup-1)/2)+1).keys()].slice(1).map((i) =>
                                            <option key={i} value={i} selected={i === 2}>{`Top ${i} to UB`}</option>
                                        )}
                                    </select> */}
                                </div>
                            );
                        })}
                    </div>
                )))}
                <span onClick={this.startTournament}>Start Tournament</span>
            </div>
        );
    }

    private startTournament = () => {
        if(this.state.phase !== -1) {
            return;
        }
        const charactersRemaining: number[] = [...Array(this.characters.length).keys()];
        for(let groupTierI = 0; groupTierI < this.state.phases[0].groupTiers.length; groupTierI++) {
            const groupTier = this.state.phases[0].groupTiers[groupTierI];
            for(let groupI = 0; groupI < groupTier.numGroups; groupI++) {
                const groupCharacters: string[] = [];
                const charsPerGroup = groupTier.count / groupTier.numGroups;
                for(let charI = 0; charI < charsPerGroup; charI++) {
                    groupCharacters.push(this.characters[charactersRemaining.splice(RAND_INT(0, charactersRemaining.length), 1)[0]]);
                }
                groupTier.groups.push(groupCharacters);
            }
        }
        this.setState({ phase: 0 });
        for(let phaseIdx = 1; phaseIdx < this.state.phases.length; phaseIdx++) {
            for(let groupTierIdx = 0; groupTierIdx < this.state.phases[phaseIdx].groupTiers.length; groupTierIdx++) {
                const groupTier = this.state.phases[phaseIdx].groupTiers[groupTierIdx];
                for(let i = 0; i < groupTier.numGroups; i++) {
                    groupTier.groups.push([]);
                }
            }
        }
    }
    
    private renderPhase(): React.ReactNode | undefined {
        if(this.state.phase < 0 || this.state.phase >= this.state.phases.length) {
            return;
        }
        const phase: Phase = this.state.phases[this.state.phase];
        return (
            <div className={styles.container}>
                <div>
                    <span>{`${phase.phaseName}`}</span>
                    <span onClick={this.toNextTournamentPhase}>To Next Tournament Phase</span>
                </div>
                {phase.groupTiers.map((groupTier, groupTierIdx) => {
                    const groupTierChar = String.fromCharCode(A_CHAR_CODE + groupTierIdx);
                    return (
                        <div className={styles.groupTier}>
                            <div>{`${groupTier.tierName} (${groupTierChar})`}</div>
                                {groupTier.groups.map((group, groupIdx) =>
                                    <div className={styles.group}>
                                        <span className={styles.groupName}>
                                            {`${groupTierChar}${groupIdx+1}`}
                                        </span>
                                        <div className={`group${this.state.phase}_${groupTierIdx}_${groupIdx} ${styles.groupCharacters}`} id={`group${this.state.phase}_${groupTierIdx}_${groupIdx}`}>
                                            {group.map(character => (
                                                <Character character={character} canEdit={true} showVoting={false} size={40}/>
                                            ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                    );
                })}
            </div>
        );
    }

    private toNextTournamentPhase = () => {
        console.log("toNextTournamentPhase");
        const phase = this.state.phases[this.state.phase];
        for(let groupTierIdx in phase.groupTiers) {
            const thisGroupTier = phase.groupTiers[groupTierIdx];
            let characterSeeds: string[][] = [];
            // get characters in order
            for(let groupIdx in thisGroupTier.groups) {
                const children = document.getElementById(`group${this.state.phase}_${groupTierIdx}_${groupIdx}`)?.children;
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
                    /*let charList: string[] = */characterAndTransformList.sort((a, b) => {
                        const dy = a.transformY - b.transformY, dx = a.transformX - b.transformX;
                        return (dy === 0) ? dx : dy;
                    }).map((obj, idx) => {
                        if(idx >= characterSeeds.length) {
                            characterSeeds.push([]);
                        }
                        characterSeeds[idx].push(obj.character);
                        // return obj.character;
                    });
                    // console.log(charList);
                }
            }

            let seedIdx = 0;
            for(let advancement of thisGroupTier.groupAdvancements) {
                const advanceGroupTier = this.state.phases[advancement.phase].groupTiers[advancement.groupTier];
                let groupsRemaining: number[] = [...Array(advanceGroupTier.numGroups).keys()];
                for(let pool = 0; pool < advancement.amount; pool++) {
                    for(let character of characterSeeds[seedIdx+pool]) {
                        if(groupsRemaining.length === 0) {
                            groupsRemaining = [...Array(advanceGroupTier.numGroups).keys()];
                        }
                        advanceGroupTier.groups[groupsRemaining.splice(RAND_INT(0, groupsRemaining.length), 1)[0]].push(character);
                    }
                }
                seedIdx += advancement.amount;
            }
            // let characterIdx = 0;
            // let groupIdx = 0;
            // for(let advancement of thisGroupTier.groupAdvancements) {
            //     const advanceGroupTier = this.state.phases[advancement.phase].groupTiers[advancement.groupTier];
            //     for(let seed = 0; seed < advancement.amount; seed++) {
            //         advanceGroupTier.groups[groupIdx % advanceGroupTier.numGroups].push(charList[characterIdx++]);
            //         groupIdx++;
            //     }
            // }
        }
        console.log(this.state.phases[this.state.phase+1]);
        this.setState({ phase: this.state.phase+1 });
    }

    // private toGroups = () => {
    //     if(this.state.tournamentState !== TournamentState.PRELIMS) {
    //         return;
    //     }
    //     const ubGroups: {[char: string]: number[]}[] = [];
    //     const lbGroups: {[char: string]: number[]}[] = [];
    //     for(let i = 0; i < 6; i++) {
    //         ubGroups.push({});
    //         lbGroups.push({});
    //     }
    //     let groupI = 0;
    //     for(let group of this.state.groups) {
    //         let charI = 0;
    //         for(let char in group) {
    //             if(charI < 2) {
    //                 ubGroups[(groupI+charI) % 6][char] = [];
    //             } else if(charI < 4) {
    //                 lbGroups[(groupI+charI) % 6][char] = [];
    //             } else {
    //                 break;
    //             }
    //             charI++;
    //         }
    //         groupI++;
    //     }
    //     this.setState({ tournamentState: TournamentState.GROUPS, ubGroups: ubGroups, lbGroups: lbGroups });
    // }
    
    // private renderGroups(): React.ReactNode | undefined {
    //     if(this.state.tournamentState !== TournamentState.GROUPS) {
    //         return;
    //     }
    //     const groupsState: IStateGroups = this.state;
    //     return (
    //         <div className={styles.container}>
    //             <div>UB Groups</div>
    //             {groupsState.ubGroups.map((group) =>
    //                 <div className={styles.group}>
    //                     {Object.keys(group).map(char => <Character character={char} />)}
    //                 </div>
    //             )}
    //             <div>LB Groups</div>
    //             {groupsState.lbGroups.map((group) =>
    //                 <div className={styles.group}>
    //                     {Object.keys(group).map(char => <Character character={char} />)}
    //                 </div>
    //             )}
    //             <div onClick={this.toLCQ1}>To LCQ1</div>
    //         </div>
    //     );
    // }

    // private toLCQ1 = () => {
    //     if(this.state.tournamentState !== TournamentState.GROUPS) {
    //         return;
    //     }
    //     const charsToFinalBracket: string[] = [];
    //     const groups: {[char: string]: number[]}[] = [];
    //     for(let i = 0; i < 6; i++) {
    //         groups.push({});
    //     }
    //     let groupI = 0;
    //     for(let group of this.state.ubGroups) {
    //         let charI = 0;
    //         for(let char in group) {
    //             if(charI < 2) {
    //                 charsToFinalBracket.push(char);
    //             } else {
    //                 groups[(groupI+charI) % 6][char] = [];
    //             }
    //             charI++;
    //         }
    //         groupI++;
    //     }
    //     for(let group of this.state.lbGroups) {
    //         let charI = 0;
    //         for(let char in group) {
    //             if(charI < 2) {
    //                 groups[(groupI+charI) % 6][char] = [];
    //             }
    //             charI++;
    //         }
    //         groupI++;
    //     }
    //     this.finalBracketChars = charsToFinalBracket;
    //     this.setState({ tournamentState: TournamentState.LCQ1, groups: groups });
    // }
    
    // private renderLCQ1(): React.ReactNode | undefined {
    //     if(this.state.tournamentState !== TournamentState.LCQ1) {
    //         return;
    //     }
    //     const lcq1State: IStateLCQ1 = this.state;
    //     return (
    //         <div className={styles.container}>
    //             <div>LCQ1</div>
    //             {lcq1State.groups.map((group) =>
    //                 <div className={styles.group}>
    //                     {Object.keys(group).map(char => <Character character={char} />)}
    //                 </div>
    //             )}
    //             <div onClick={this.toLCQ2}>To LCQ2</div>
    //         </div>
    //     );
    // }

    // private toLCQ2 = () => {
    //     if(this.state.tournamentState !== TournamentState.LCQ1) {
    //         return;
    //     }
    //     const finalGroup: {[char: string]: number[]} = {};
    //     for(let group of this.state.groups) {
    //         let charI = 0;
    //         for(let char in group) {
    //             if(charI < 2) {
    //                 finalGroup[char] = [];
    //             }
    //             charI++;
    //         }
    //     }
    //     this.setState({ tournamentState: TournamentState.LCQ2, group: finalGroup });
    // }
    
    // private renderLCQ2(): React.ReactNode | undefined {
    //     if(this.state.tournamentState !== TournamentState.LCQ2) {
    //         return;
    //     }
    //     const lcq2State: IStateLCQ2 = this.state;
    //     return (
    //         <div className={styles.container}>
    //             <div>LCQ2</div>
    //             <div className={styles.group}>
    //                 {Object.keys(lcq2State.group).map(char => <Character character={char} />)}
    //             </div>
    //             <div onClick={this.toFinalBracket}>To Final Bracket</div>
    //         </div>
    //     );
    // }

    // private toFinalBracket = () => {
    //     if(this.state.tournamentState !== TournamentState.LCQ2) {
    //         return;
    //     }
    //     const finalGroup: {[char: string]: number[]} = {};
    //     for(let char of this.finalBracketChars) {
    //         finalGroup[char] = [];
    //     }
    //     let charI = 0;
    //     for(let char in this.state.group) {
    //         if(charI < 4) {
    //             finalGroup[char] = [];
    //         }
    //         charI++;
    //     }
    //     this.setState({ tournamentState: TournamentState.FINAL_BRACKET, group: finalGroup });
    // }
    
    // private renderFinalBracket(): React.ReactNode | undefined {
    //     if(this.state.tournamentState !== TournamentState.FINAL_BRACKET) {
    //         return;
    //     }
    //     const finalBracketState: IStateFinalBracket = this.state;
    //     return (
    //         <div className={styles.container}>
    //             <div>Final Bracket</div>
    //             <div className={styles.group}>
    //                 {Object.keys(finalBracketState.group).map(char => <Character character={char} />)}
    //             </div>
    //         </div>
    //     );
    // }

    public render(): React.ReactNode {
        return (this.state.phase === -1) ? this.renderSetup() : this.renderPhase();
    }
}

const CHARS = ["Reze", "Makima", "Himeno", "Asa Mitaka", "Nobara Kugisaki", "Maki Zenin", "Kasumi Miwa", "Ai Hoshino", "Ruby Hoshino", "Kana Arima", "Akane Kurokawa", "MEM-cho", "Yuuki Asuna", "Tohka Yatogami", "Origami Tobiichi", "Kotori Itsuka", "Yoshino Himekawa", "Kurumi Tokisaki", "Reine Murasame", "Suzune Horikita", "Kei Karuizawa", "Kikyo Kushida", "Honami Ichinose", "Arisu Sakayanagi", "Mio Ibuki", "Airi Sakura", "Hiyori Shiina", "Sae Chabashira", "Chie Hoshinomiya", "Ichika Amasawa", "Tsubasa Nanase", "Fuuka Kiryuuin", "2B", "Rin Tohsaka", "Saber", "Saki Saki", "Nagisa Minase", "Rika Hoshizaki", "Shino Kiryuu", "Lemon Irvine", "Love Cute", "Emilia", "Rem", "Ram", "Beatrice", "Echidna", "Chizuru Hishiro", "Rena Kariu", "An Onoya", "Ichika Nakano", "Nino Nakano", "Miku Nakano", "Yotsuba Nakano", "Itsuki Nakano", "Mai Sakurajima", "Rio Futaba", "Hitori Gotou", "Ryou Yamada", "Nijika Ijichi", "Ikuyo Kita", "Kikuri Hiroi", "Seika Ijichi", "PA-san", "Rias Gremory", "Shizuka Mikazuki", "Beatrix Amerhauser", "Frieren", "Fern", "Ubel", "Hanako Koyanagi", "Narumi Momose", "Megumi Katou", "Eriri Spencer Sawamura", "Utaha Kasumigaoka", "Michiru Hyoudou", "Izumi Hashima", "Akane Kosaka", "Kuroha Shida", "Shirokusa Kachi", "Shouko Komi", "Najimi Osana", "Aqua", "Darkness", "Megumin", "Yunyun", "Wiz", "Luna", "Celty Sturluson", "Kyouko Hori", "Yuki Yoshikawa", "Remi Ayasaki", "Sakura Kouno", /*"Sayu Ogiwara", */"Tsukasa Yuzaki","Aya Arisugawa", "Chitose Kaginoji", "Manaka Mukaido", "Chisaki Hiradaira", "Miuna Shiodome", "Sayu Hisanuma", "Akari Sakishima", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Claire Kagenou", "Alexia Midgar", "Iris Midgar", "Rose Oriana", "Beatrix", "Akane Nishino", "Rui Tachibana", "Hina Tachibana", "Momo Kashiwabara", "Miu Ashihara", "Masaki Kobayashi", "Miyabi Serizawa", "Chizuru Ichinose", "Ruka Sarashina", "Mami Nanami", "Sumi Sakurasawa", "Mini Yaemori", "Hakari Hanazono", "Karane Inda", "Shizuka Yoshimoto", "Nano Eiai", "Kusuri Yakuzen", "Hahari Hanazono", "Yor Forger", "Misaki Ayuzawa", "Akari Watanabe", "Shiori Ssakurazaka", "Hitagi Senjougahara", "Kiss-Shot Acerola-Orion Heart-Under-Blade", "Kanbaru Suruga", "Shinobu Oshino", "Takagi", "Maomao", "Kaguya Shinomiya", "Ai Hayasaka", "Chika Fujiwara", "Miko Iino", "Tsubame Koyasu", "Maki Shijo", "Nagisa Kashiwagi", "Kouko Kaga", "Rebecca", "Kyouka Uzen", "Shushu Suruga", "Himari Azuma", "Yachiho Azuma", "Tenka Izumo", "Ren Yamashiro", "Varvara Pilipenko", "Kurisu Makise", "Aoi Hinami", "Minami Nanami", "Fuuka Kikuchi", "Rena", "Faye Valentine", "Aki Adagaki", "Yoshino Koiwai", "Neko Fujinomiya", "Endorsi Jahad", "Hwaryun", "Yuri Ha", "Yihwa Yeon", "Kaiser", "Lilial Lo Po Bia", "Shilial Jahad", "Garam Jahad", "Khun Maschenny Jahad", "Yasratcha", "Nen Neya", "Dowon", "Sophia Tan", "Lefav Lo Po Bia", "Aria", "Aika Natsukawa", "Fuuko Izumo", "Gina Chamber", "Juiz", "Latla Mirah", "Sagiri Yamada Asaemon", "Yuzuriha", "Tomo Aizawa", "Misuzu Gundou", "Carol Olston", "Roxy Migurdia", "Sylphiette", "Eris Boreas Greyrat", "Lilia", "Elinalise Dragonroad", "Ghislaine Dedoldia", "Linia Dedoldia", "Pursena Adoldia", "Holo", "Anzu Hoshino", "Marin Kitagawa", "Violet Evergarden", "Nozomi Inazuki", "Yu Saegusa", "Anna Yamada", "Moeko Sekine", "Yurine Hanzawa", "Kanna Andou", "Ayame Himuro", "Hotonoha Kanade", "Ena Ibarada", "Arika Yamamoto", "Suiu Fujiwara", "Rae Taylor", "Claire Francois", "Zero Two"];
