import {tgLink} from "./config.ts";
import {vkLink} from "./config.ts";
import {rutubeLink} from "./config.ts";

export const openInNewTab = (link: string) => {
    window.open(link, "_blank");
};

export const tgRedirect = () => {
    openInNewTab(tgLink);
}

export const vkRedirect = () => {
    openInNewTab(vkLink);
}

export const rutubeRedirect = () => {
    openInNewTab(rutubeLink);
}

export const isLetterOrSpace = (symbol: string) => {
    return /^[A-Za-zА-Яа-я ]$/.test(symbol);
}

export const isNumber = (symbol: string) => {
    return /^[0-9]$/.test(symbol);
}