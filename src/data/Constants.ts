export const DEV_STRING_PRE: string = (process.env.NODE_ENV === "development") ? "*" : "";

let verStr: string|undefined = process.env.REACT_APP_VERSION;
export const VERSION_STRING: string =
    (!verStr)
        ? ""
        : (verStr.length > 2 && verStr[0] === "0")
            ? `beta v${verStr.substring(2)}`
            : `v${verStr}`;

export const OLD_SHEET_LINK = "https://docs.google.com/spreadsheets/d/1QlH4sO5_ExwYWnqgb9Jl35T-xXLLR3xhPEEUyjwVWh4/edit?gid=1864619649#gid=1864619649";

// excluding 1 and itself
export function GET_RELEVANT_FACTORS(n: number): number[] {
    return [...Array(Math.floor(n/2)).keys()].filter(i => n%i === 0).splice(1);
}

// exclusive at end/y
export function RAND_INT(x: number, y: number): number {
    return Math.floor(Math.random() * (y - x)) + x;
}

export const A_CHAR_CODE = "A".charCodeAt(0);
