import {
    RED,
    LOGO,
    WHITE,
    GREEN,
    LIGHT_PURPLE
} from "../utils/Constants";
import {data} from "../utils/Data";

let list = data.permlist;
function printRemoved(player, result) {
    if (result === true) {
        ChatLib.chat(`${LOGO} ${GREEN}Player ${LIGHT_PURPLE}${player + GREEN} removed successfully!`);
    }
    else
    {
        ChatLib.chat(`${LOGO} ${RED}Player ${WHITE}${player + RED} was not found in party!`);
    }
}

export function partyRemove(args) {
    const newPlayer = args.toString().toLowerCase();

    if (list.includes(newPlayer)) {
        let indexForRemoval = list.indexOf(newPlayer);

        // Remove the item directly without reassigning `list`
        list.splice(indexForRemoval, 1);

        printRemoved(newPlayer, true);

        // Update `data.permlist` after modifying `list`
        data.permlist = list;
        data.save();
    } else {
        printRemoved(newPlayer, false);
    }
}
