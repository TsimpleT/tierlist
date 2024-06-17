export const DEV_STRING_PRE: string = (process.env.NODE_ENV === "development") ? "[DEV] " : "";

let verStr: string|undefined = process.env.REACT_APP_VERSION;
export const VERSION_STRING: string =
    (!verStr)
        ? ""
        : (verStr.length > 2 && verStr[0] === "0")
            ? `beta v${verStr.substring(2)}`
            : `v${verStr}`;

export const OLD_SHEET_LINK = "https://docs.google.com/spreadsheets/d/1QlH4sO5_ExwYWnqgb9Jl35T-xXLLR3xhPEEUyjwVWh4/edit?gid=1864619649#gid=1864619649";
