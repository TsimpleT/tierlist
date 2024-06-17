import React from 'react';
import Muuri from 'muuri';

import { DEV_STRING_PRE, VIEW_ONLY_TIERS } from '../../../data';
import { TierlistViewer } from '../../Tierlist';

export class AggregateTierlistPage extends React.Component {
    private muuris: {[key: string]: Muuri} = {};

    public override componentDidMount(): void {
        console.log(`AggregateTierlistPage MOUNT`);
        document.title = `${DEV_STRING_PRE}Best Girl Tierlist`;
        for(let n in VIEW_ONLY_TIERS) {
            const muuriName = `.tier${n}`;
            if(!this.muuris[muuriName]) {
                this.muuris[muuriName] = new Muuri(muuriName, {
                    dragEnabled: false,
                    dragContainer: document.body,
                    dragSort: () => Object.values(this.muuris)
                });
            }
        }
    }

    public render(): React.ReactNode {
        return <TierlistViewer muuris={this.muuris} setup={{ type: "aggregate" }} />
    }
}
