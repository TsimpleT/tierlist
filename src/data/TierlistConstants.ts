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

const CLASSNAME_TO_TIERNAME_DICT: {[key: string]: TierName} = {
    "tier0": TierName.Z,
    "tier1": TierName.Sp,
    "tier2": TierName.S,
    "tier3": TierName.Sm,
    "tier4": TierName.Ap,
    "tier5": TierName.A,
    "tier6": TierName.Am,
    "tier7": TierName.Bp,
    "tier8": TierName.B,
    "tier9": TierName.Bm,
    "tier10": TierName.Cp,
    "tier11": TierName.C,
    "tier12": TierName.Cm,
    "tier13": TierName.D,
    "tier14": TierName.F,
    "tier15": TierName.UR,
    "tier16": TierName.DW
}

export function CLASSNAME_TO_TIERNAME(className?: string): TierName {
    if(!className) {
        return TierName.UR;
    }
    if(className in CLASSNAME_TO_TIERNAME_DICT) {
        return CLASSNAME_TO_TIERNAME_DICT[className];
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
