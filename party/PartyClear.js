import {
    LOGO,
    GREEN,
} from "../utils/Constants";
import {data} from "../utils/Data";

export function partyClear() {
    ChatLib.chat(`${LOGO} ${GREEN}Party cleared!!`);
    data.permlist = [];
    data.save();
}