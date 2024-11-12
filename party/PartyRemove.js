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
const isArray = Array.isArray(list);

function printRemoved(player, result) {
    if (result === true) {
        ChatLib.chat(`${LOGO} ${GREEN}Player ${LIGHT_PURPLE}${player + GREEN} removed successfully!`);
    }
    else
    {
        ChatLib.chat(`${LOGO} ${RED}Player ${WHITE}${player + RED} was not found in party!`);
    }
}

export function partyAdd (args) {
    const newPlayer = args.toString().toLowerCase();

    if (list.includes(newPlayer)) {
        let indexForRemoval = list.indexOf(newPlayer);
        printRemoved(newPlayer, true)
        list.splice(indexForRemoval, 1);
        data.permlist = list;
        data.save();
    }
    else
    {
        printRemoved(newPlayer, false)
    }
}