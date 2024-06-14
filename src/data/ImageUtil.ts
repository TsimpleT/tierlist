export enum EImageIcon {
    COPY_TO_CLIPBOARD = "Copy",
    INFO = "Info",
    GOOGLE_SHEET = "GoogleSheet",
    UPDATE_NOTES = "UpdateNotes",
    COMING_SOON = "ComingSoon",
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
        const loadImage = require(`../assets/icons/${icon}.png`);
        this.imageMap[icon] = loadImage;
        return loadImage;
    }
}

const _instance = new ImageUtil();
export { _instance as ImageUtil };
