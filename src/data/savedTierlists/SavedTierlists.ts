import { ITierlist } from "../TierlistConstants";
import { tsimplet } from "./tsimplet";
import { zhiuwu } from "./zhiuwu";

let savedTierlists: {[key: string]: ITierlist} = {};
savedTierlists[tsimplet.username.toLowerCase()] = tsimplet;
savedTierlists[zhiuwu.username.toLowerCase()] = zhiuwu;

export function GET_SAVED_USERNAMES(): string[] {
    return Object.keys(savedTierlists);
}

export function GET_SAVED_ITIERLIST(username: string): ITierlist {
    return (username.toLowerCase() in savedTierlists)
        ? savedTierlists[username.toLowerCase()]
        : { username: "", tierlistSchema: "", tierlist: {} };
}
