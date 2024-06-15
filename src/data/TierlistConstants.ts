export enum TierName {
    Z,
    Sp, S, Sm,
    Ap, A, Am,
    Bp, B, Bm,
    Cp, C, Cm,
    D, F,
    UR, DW
}

export const ALL_TIERS: TierName[] = [
    TierName.Z,
    TierName.Sp, TierName.S, TierName.Sm,
    TierName.Ap, TierName.A, TierName.Am,
    TierName.Bp, TierName.B, TierName.Bm,
    TierName.Cp, TierName.C, TierName.Cm,
    TierName.D, TierName.F,
    TierName.UR, TierName.DW
];

export const VIEW_ONLY_TIERS: TierName[] = [
    TierName.Z,
    TierName.Sp, TierName.S, TierName.Sm,
    TierName.Ap, TierName.A, TierName.Am,
    TierName.Bp, TierName.B, TierName.Bm,
    TierName.Cp, TierName.C, TierName.Cm,
    TierName.D, TierName.F
];

const TIERNAME_TO_STRING_DICT: {[key in TierName]: string } = {
    [TierName.Z]: "Z",
    [TierName.Sp]: "S+", [TierName.S]: "S", [TierName.Sm]: "S-",
    [TierName.Ap]: "A+", [TierName.A]: "A", [TierName.Am]: "A-",
    [TierName.Bp]: "B+", [TierName.B]: "B", [TierName.Bm]: "B-",
    [TierName.Cp]: "C+", [TierName.C]: "C", [TierName.Cm]: "C-",
    [TierName.D]: "D", [TierName.F]: "F",
    [TierName.UR]: "??", [TierName.DW]: "X"
}

export function TIERNAME_TO_STRING(tierName: TierName): string {
    if(tierName in TIERNAME_TO_STRING_DICT) {
        return TIERNAME_TO_STRING_DICT[tierName];
    }
    return "Unranked";
}

const NUMBER_TO_TIERNAME_DICT: {[key: number]: TierName} = {
    0: TierName.Z,
    1: TierName.Sp,
    2: TierName.S,
    3: TierName.Sm,
    4: TierName.Ap,
    5: TierName.A,
    6: TierName.Am,
    7: TierName.Bp,
    8: TierName.B,
    9: TierName.Bm,
    10: TierName.Cp,
    11: TierName.C,
    12: TierName.Cm,
    13: TierName.D,
    14: TierName.F,
    15: TierName.UR,
    16: TierName.DW
}

export function NUMBER_TO_TIERNAME(key: number): TierName {
    if(key in NUMBER_TO_TIERNAME_DICT) {
        return NUMBER_TO_TIERNAME_DICT[key];
    }
    return TierName.UR;
}

const EMPTY_TIERLIST: {[tierName in TierName]: string[]} = {
    [TierName.Z]: [],
    [TierName.Sp]: [],
    [TierName.S]: [],   
    [TierName.Sm]: [],
    [TierName.Ap]: [],
    [TierName.A]: [],
    [TierName.Am]: [],
    [TierName.Bp]: [],
    [TierName.B]: [],
    [TierName.Bm]: [],
    [TierName.Cp]: [],
    [TierName.C]: [],
    [TierName.Cm]: [],
    [TierName.D]: [],
    [TierName.F]: [],
    [TierName.UR]: [],
    [TierName.DW]: []
}

export function CREATE_EMPTY_TIERLIST<T = string[]>(): {[tierName in TierName]: T} {
    return JSON.parse(JSON.stringify(EMPTY_TIERLIST));
}

export interface ITierlist {
    "username": string;
    "tierlistSchema": string;
    "tierlist": {[key: string]: string[]};
}
