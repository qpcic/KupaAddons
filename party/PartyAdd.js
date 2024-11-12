import {
    RED,
    LOGO,
    WHITE,
    GREEN,
    LIGHT_PURPLE
} from "../utils/Constants";
import {data} from "../utils/Data";

const list = data.permlist;
function printAdded(player, result) {
    if (result === true) {
        ChatLib.chat(`${LOGO} ${GREEN}Player ${LIGHT_PURPLE}${player + GREEN} added successfully!`);
    }
    else
    {
        ChatLib.chat(`${LOGO} ${RED}Player ${WHITE}${player + RED} is already present in party!`);
    }
}

export function partyAdd (args) {
const newPlayer = args.toString().toLowerCase();

    if (list.length >= 4) {
        ChatLib.chat(`${LOGO} ${RED}Party is full! (${list.length} players)`);
        return;
    }
    else if (list.includes(newPlayer)) {
        printAdded(newPlayer, false);
    }
    else
    {
        printAdded(newPlayer, true);
        list.push(newPlayer);
        data.permlist = list;
        data.save();
    }
}