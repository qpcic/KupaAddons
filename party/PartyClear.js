import {
    LOGO,
    GREEN,
} from "../utils/Constants";
import {data} from "../utils/Data";
let list = data.permlist;

export function partyClear() {
    ChatLib.chat(`${LOGO} ${GREEN}Party cleared!`);
    while (list.length > 0) {
        list.pop();
    }
    data.permlist = list;
    data.save();
}