import { GET_AGGREGATE_FAVORITE_CHARACTER } from "./SavedTierlists";

export enum EImageIcon {
    MENU = "Menu",
    AGGREGATE_BEST_GIRL = "ABG",
    BRACKET = "Bracket",
    TIERLIST = "Tierlist", // unused atm
    HOME = "Home", // unused atm
    COPY_TO_CLIPBOARD = "Copy",
    INFO = "Info", // unused atm
    WARNING = "Warning",
    GOOGLE_SHEET = "GoogleSheet",
    UPDATE_NOTES = "UpdateNotes",
    COMING_SOON = "ComingSoon",
    CREATE_NEW = "CreateNew",
}

class ImageUtil {
    private imageMap: {[key: string]: string};

    constructor() {
        this.imageMap = {};
    }

    // stored in imageMap NOT prefaced by anything
    public getIconImage(icon: EImageIcon): string {
        if(icon in this.imageMap) {
            return this.imageMap[icon];
        }
        const loadImage = (icon === EImageIcon.AGGREGATE_BEST_GIRL)
            ? require(`../assets/characters/${GET_AGGREGATE_FAVORITE_CHARACTER()}.png`)
            : require(`../assets/icons/${icon}.png`);
        this.imageMap[icon] = loadImage;
        return loadImage;
    }
}

const _instance = new ImageUtil();
export { _instance as ImageUtil };
