import {
    BOLD,
    DARK_GRAY,
    DARK_PURPLE,
    RED,
    GRAY,
    LOGO,
    RESET,
    WHITE,
    GITHUB,
    GREEN,
    LIGHT_PURPLE
} from "../utils/Constants";
import Settings from "../utils/Settings";
import {data} from "../utils/Data";

const list = data.permlist;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function invitePlayers(list) {
    for (let i = 0; i < list.length; i++) {
        ChatLib.command(`p invite ${list[i]}`);
        await sleep(250); // Pauses for 250ms in each iteration
    }
}

export function partyInv (args) {
    ChatLib.chat(`${LOGO} ${LIGHT_PURPLE}Inviting players...`);
    invitePlayers(list);
}