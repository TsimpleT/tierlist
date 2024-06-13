import React from 'react';
import Muuri from 'muuri';

import { TierName, ALL_TIERS, CREATE_EMPTY_TIERLIST } from '../data';
import { Tierlist } from './Tierlist/Tierlist';

// https://github.com/Xetera/waifu-tierlist/blob/master/components/Tierlist/Tier/Tier.tsx
// https://youtu.be/RI9kA09Egas?list=PLN3n1USn4xlnsj993By8YSvsEl1VWhV8R
// https://github.com/haltu/muuri
// https://codepen.io/niklasramo/pen/wJKMQz
// https://react.dev/reference/react/StrictMode
// https://react.dev/learn/keeping-components-pure
// https://github.com/doodlehead/Tierlist/blob/master/src/components/TierList/TierList.tsx

interface IProps {}
interface IState {
    tierlist: { [name in TierName]: string[] };
}

export class App extends React.Component<IProps, IState> {
    private muuris: {[key: string]: Muuri} = {};

    public constructor(props: IProps) {
        super(props);
        this.state = {
            tierlist: CREATE_EMPTY_TIERLIST()
        }
    }

    public override componentDidMount(): void {
        console.log("APP MOUNT");
        for(let tierName in ALL_TIERS) {
            const muuriName = `.tier${tierName}`;
            if(!this.muuris[muuriName]) {
                this.muuris[muuriName] = new Muuri(muuriName, {
                    dragEnabled: true,
                    dragContainer: document.body,
                    dragSort: () => Object.values(this.muuris)
                });
            }
        }
        // if(!this.muuris[".grid-1"]) {
        //     this.muuris[".grid-1"] = new Muuri('.grid-1', {
        //         dragEnabled: true,
        //         dragContainer: document.body,
        //         dragSort: () => Object.values(this.muuris)
        //     });
        // }
        // if(!this.muuris[".grid-2"]) {
        //     this.muuris[".grid-2"] = new Muuri('.grid-2', {
        //         dragEnabled: true,
        //         dragContainer: document.body,
        //         dragSort: () => Object.values(this.muuris)
        //     });
        // }
    }

    private test = (tierlist: { [name in TierName]: string[] }): void => {
        this.setState({
            tierlist: JSON.parse(JSON.stringify(tierlist))
        })
    }

    public render(): React.ReactNode {
        return <Tierlist muuris={this.muuris} test={this.test}/>;
        // return (
        //     <div>
        //         <Tier
        //             tierName={TierName.Z}
        //             characters={SERIES_CHARACTERS[ESeries.OSHI_NO_KO]}
        //             muuris={this.muuris}
        //         />
        //         <div className={`grid-1 ${styles.grid}`}>
        //             <div className={styles.item}>
        //                 {/* <div className={styles["item-content"]}>1</div> */}
        //                 <Character character="Rui Tachibana"/>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>2</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>3</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>4</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>5</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>6</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>7</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>8</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>9</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>10</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>11</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>12</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>13</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>14</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>15</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>16</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>17</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>18</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>19</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>20</div>
        //             </div>
        //         </div>

        //         <div className={`grid-2 ${styles.grid} ${styles["grid-2"]}`}>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>1</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>2</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>3</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>4</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>5</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>6</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>7</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>8</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>9</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>10</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>11</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>12</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>13</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>14</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>15</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>16</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>17</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>18</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>19</div>
        //             </div>
        //             <div className={styles.item}>
        //                 <div className={styles["item-content"]}>20</div>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}
