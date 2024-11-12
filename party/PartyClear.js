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

export function partyClear() {
    list.clear();
    ChatLib.chat(`${LOGO} ${GREEN}Party cleared!`);
    data.permlist = list;
    data.save();
}