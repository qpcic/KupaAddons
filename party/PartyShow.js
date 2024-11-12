import {
    BOLD,
    DARK_PURPLE,
    RED,
    LOGO,
    WHITE,
    LIGHT_PURPLE
} from "../utils/Constants";
import {data} from "../utils/Data";
const list = data.permlist;
export function partyShow (args) {
    ChatLib.chat(`${LOGO} ${LIGHT_PURPLE}Party members:`);
    for (let i = 0; i < list.length; i++) {
    ChatLib.chat(`${DARK_PURPLE + BOLD} ${i+1}. ${WHITE + list[i]}`);
    }
    ChatLib.chat(`${WHITE}Total members: ${LIGHT_PURPLE + list.length}`);
    if (list.length >= 4) {
        ChatLib.chat(`${RED}(Party is full!)`);
    }
}