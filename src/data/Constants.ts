export enum TierlistSchema {
    V0 = "0.1.0"
}

export const DEV_STRING_PRE: string = (process.env.NODE_ENV === "development") ? "[DEV] " : "";

let verStr: string|undefined = process.env.REACT_APP_VERSION;
export const VERSION_STRING: string =
    (!verStr)
        ? ""
        : (verStr.length > 2 && verStr[0] === "0")
            ? `beta v${verStr.substring(2)}`
            : `v${verStr}`;
