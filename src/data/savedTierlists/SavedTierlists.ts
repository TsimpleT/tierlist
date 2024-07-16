import { CREATE_EMPTY_TIERLIST, ITierlist, NUMBER_TO_TIERNAME, TIERNAME_TO_STRING, TierName, VIEW_ONLY_TIERS } from "../TierlistConstants";
import { tsimplet } from "./tsimplet";
import { zhiuwu } from "./zhiuwu";
import { jamerr102030 } from "./jamerr102030";
import { meechy } from "./meechy";

export const AGGREGATE_TIERLIST_MIN_VOTES = 2;

interface IUserTierEntry {
    tiername: TierName;
    username: string;
}

class UserTierEntries {
    public entries: IUserTierEntry[];
    constructor(entry: IUserTierEntry) {
        this.entries = [entry];
    }

    public addEntry(entry: IUserTierEntry): void {
        this.entries.push(entry);
        this.entries.sort((a, b) => a.tiername - b.tiername); // TODO optimize insert at right spot instead
    }

    public isApplicable(): boolean {
        return this.entries.length >= AGGREGATE_TIERLIST_MIN_VOTES;
    }

    public getTierAvg(): number {
        let tierTotal: number = 0;
        for(let entry of this.entries) {
            tierTotal += entry.tiername;
        }
        return Math.round(1000 * tierTotal / this.entries.length) / 1000; // rounded to 3 places
    }

    public getDescriptorString(): string {
        const tierAvg: number = this.getTierAvg();
        const delta: number = tierAvg - Math.round(tierAvg);
        const ratingStr: string = (
            (delta > 0)
                ? `[+${delta.toFixed(3)}]: Ratings averaged ${delta.toFixed(3)} tiers worse than this tier.`
                : (delta < 0)
                    ? `[${delta.toFixed(3)}]: Ratings averaged ${-delta.toFixed(3)} tiers better than this tier.`
                    : "(0.000): Ratings averaged exactly into this tier."
        );
        return `\n${ratingStr}\n` + this.entries.map((entry) => `${entry.username}: ${TIERNAME_TO_STRING(entry.tiername)}`).join("\n")
    }
}

let savedItierlistDict: {[key: string]: ITierlist} = {};
let userTierEntriesDict: {[key: string]: UserTierEntries} = {};
let favoriteCharacterDict: {[key: string]: string} = {};

function addTierlist(itierlist: ITierlist): void {
    const usernameLower: string = itierlist.username.toLowerCase();

    savedItierlistDict[usernameLower] = itierlist;

    // add to aggregate tierlist
    for(let tiername of VIEW_ONLY_TIERS) {
        for(let char of itierlist.tierlist[tiername]) {
            const entry: IUserTierEntry = { tiername: tiername, username: itierlist.username };
            if(char in userTierEntriesDict) {
                userTierEntriesDict[char].addEntry(entry);
            } else {
                userTierEntriesDict[char] = new UserTierEntries(entry);
            }
        }
    }

    // save favorite character
    for(let tiername of VIEW_ONLY_TIERS) {
        if(itierlist.tierlist[tiername].length > 0) {
            favoriteCharacterDict[usernameLower] = itierlist.tierlist[tiername][0];
            return;
        }
    }
}

addTierlist(tsimplet);
addTierlist(zhiuwu);
addTierlist(meechy);
addTierlist(jamerr102030);

let aggregateDecimalTierlist: {[key: number]: string[]} = {};
for(let char in userTierEntriesDict) {
    if(!userTierEntriesDict[char].isApplicable()) {
        continue;
    }

    const tierAvg: number = userTierEntriesDict[char].getTierAvg();
    // console.log(`${char}: ${tierAvg} ${NUMBER_TO_TIERNAME(Math.round(tierAvg))}`);
    if(!(tierAvg in aggregateDecimalTierlist)) {
        aggregateDecimalTierlist[tierAvg] = [];
    }
    aggregateDecimalTierlist[tierAvg].push(char);
    // aggregateTierlist[NUMBER_TO_TIERNAME(Math.round(tierAvg))].push(char);
}

let aggregateTierlist: {[key in TierName]: string[]} = CREATE_EMPTY_TIERLIST();
let tierDecimalList: number[] = Object.keys(aggregateDecimalTierlist).map(a => +a).sort((a, b) => (+a) - (+b));
for(let tierDecimal of tierDecimalList) {
    aggregateTierlist[NUMBER_TO_TIERNAME(Math.round(tierDecimal))].push(...aggregateDecimalTierlist[tierDecimal]);
}

// save aggregate favorite character
let AGGREGATE_FAVORITE_CHARACTER: string = "";
for(let tiername of VIEW_ONLY_TIERS) {
    if(aggregateTierlist[tiername].length > 0) {
        AGGREGATE_FAVORITE_CHARACTER = aggregateTierlist[tiername][0];
        break;
    }
}

export function GET_AGGREGATE_TIERLIST(): {[key in TierName]: string[]} {
    return aggregateTierlist;
}

export function GET_AGGREGATE_FAVORITE_CHARACTER(): string {
    return AGGREGATE_FAVORITE_CHARACTER;
}

export function GET_CHARACTER_USER_RATING_DESCRIPTOR_STRING(char: string): string {
    if(char in userTierEntriesDict) {
        return userTierEntriesDict[char].getDescriptorString();
    }
    return "";
}

export function GET_SAVED_USERNAMES(): string[] {
    return Object.keys(savedItierlistDict);
}

export const NO_SAVED_ITIERLIST: ITierlist = {
    username: "", tierlistSchema: "0.1.0", lastUpdated: "", tierlist: {}
};
export function GET_SAVED_ITIERLIST(username: string): ITierlist {
    return (username.toLowerCase() in savedItierlistDict)
        ? savedItierlistDict[username.toLowerCase()]
        : NO_SAVED_ITIERLIST;
}

export const NO_FAVORITE_CHARACTER = "";
export function GET_FAVORITE_CHARACTER(username: string): string {
    return (username.toLowerCase() in favoriteCharacterDict)
        ? favoriteCharacterDict[username.toLowerCase()]
        : NO_FAVORITE_CHARACTER;
}
