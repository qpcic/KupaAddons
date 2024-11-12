import {
    LOGO,
    DARK_PURPLE
} from "../utils/Constants";
import {data} from "../utils/Data";

const list = data.permlist;

export function partyInv(args) {
    ChatLib.chat(`${LOGO} ${DARK_PURPLE}Inviting players...`);
    if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
            ChatLib.command(`p invite ${list[i].toString()}`);
        }
    }
}