import {tgLink} from "./config.ts";
import {vkLink} from "./config.ts";
import {rutubeLink} from "./config.ts";

export const redirectHandler = (link: string) => {
    window.open(link, "_blank");
};

export const tgRedirect = () => {
    redirectHandler(tgLink);
}

export const vkRedirect = () => {
    redirectHandler(vkLink);
}

export const rutubeRedirect = () => {
    redirectHandler(rutubeLink);
}