import {
    LOGO,
    LIGHT_PURPLE
} from "../utils/Constants";
import {data} from "../utils/Data";

const list = data.permlist;
export function partyInv (args) {
    ChatLib.chat(`${LOGO} ${LIGHT_PURPLE}Inviting players...`);
    for (let i = 0; i < list.length; i++) {
        ChatLib.command(`p invite ${list[i]}`);
    }
}