import React from 'react';
import Muuri from 'muuri';

import { ALL_TIERS, DEV_STRING_PRE, VIEW_ONLY_TIERS } from '../../../data';
import { TierlistCreator, TierlistViewer } from '../../Tierlist';

interface IProps {
    canEdit: boolean;
}
interface IState {}

export class TierlistPage extends React.Component<IProps, IState> {
    private muuris: {[key: string]: Muuri} = {};
    private username: string;

    public constructor(props: IProps) {
        super(props);
        let url: string = document.URL;
        if(url[url.length-1] === "/") {
            this.username = url.slice(url.lastIndexOf("/", url.length-2)+1, url.length-1);
        } else {
            this.username = url.slice(url.lastIndexOf("/")+1);
        }
        // console.log(`|${url}| => |${this.username}|`);
    }

    public override componentDidMount(): void {
        const editType: string = (this.props.canEdit) ? "Create" : "View";
        document.title = `${DEV_STRING_PRE}${editType} Best Girl Tierlist`;
        console.log(`TierlistPage(${editType}) MOUNT`);
        for(let n in ALL_TIERS) {
            if(this.props.canEdit || VIEW_ONLY_TIERS.includes(ALL_TIERS[n])) {
                const muuriName = `.tier${n}`;
                if(!this.muuris[muuriName]) {
                    this.muuris[muuriName] = new Muuri(muuriName, {
                        dragEnabled: this.props.canEdit,
                        dragContainer: document.body,
                        dragSort: () => Object.values(this.muuris)
                    });
                }

            }
        }
    }

    public render(): React.ReactNode {
        return (
            (this.props.canEdit)
                ? <TierlistCreator muuris={this.muuris} username={this.username} />
                : <TierlistViewer muuris={this.muuris} setup={{type: "username", username: this.username}} />
        );
    }
}
