import Settings from "./utils/Settings";
import {
    AQUA,
    BLUE,
    BOLD,
    DARK_RED,
    GOLD,
    GRAY,
    GREEN,
    HEADER,
    ITALIC,
    RED,
    LOGO, WHITE, DARK_PURPLE, RESET, DARK_GRAY, GITHUB,
} from "./utils/Constants";
import {DISCORD} from "./utils/Constants";
import {helpCmd, helpParty} from "./utils/HelpMenu";
import {partyAdd} from "./party/PartyAdd";
import {partyShow} from "./party/PartyShow";
import {partyInv} from "./party/PartyInvite";
import {partyClear} from "./party/PartyClear";
import {partyRemove} from "./party/PartyRemove";

function openSettings() {
    try {
        Settings.openGUI();
    } catch (e) {
        ChatLib.chat(`${LOGO} ${RED} Error! /ct reload`);
    }
}

// /ka ...args
register("command", (...args) => {
    // Check if args is undefined or has no arguments (i.e. length 0)
    if (!args || args.length === 0) {
        openSettings(); // If no args are provided, open settings
        return;
    }

    // Convert the first argument to lowercase and handle plural "s" (e.g., "settings" -> "setting")
    const command = args[0].toLowerCase();
    const soleCommand = command.replace(/s$/, ""); // Remove plural 's' for singular commands

    // Switch logic based on the command
    switch (soleCommand) {
        case "discord":
            ChatLib.chat(`${LOGO} ${GRAY}Discord:${WHITE} ${DISCORD}`)
            break;
        case "setting":  // Handle 'setting' command
        case undefined:  // Handle undefined (fallback case)
            openSettings();
            break;
        case "help":
            helpCmd();
            break;
        case "party":
        case "p":
            helpParty();
            break;
        case "padd":
            if (args.length < 2) {
                ChatLib.chat(`${LOGO} ${RED}Command failed: wrong syntax!`);
                break;
            }
            else
            {
                partyAdd(args[1]);
                break;
            }
        case "premove":
            if (args.length < 2) {
                ChatLib.chat(`${LOGO} ${RED}Command failed: wrong syntax!`);
                break;
            }
            else
            {
                partyRemove(args[1]);
                break;
            }
        case "pshow":
        case "pview":
        case "plist":
            partyShow();
            break;
        case "inv":
        case "pinv":
            partyInv();
            break;
        case "pclear":
            partyClear();
            break;
        case "github":
            ChatLib.chat(`${LOGO} ${GRAY}GitHub:${WHITE} ${GITHUB}`);
            break;
        default:
            // Normalize all arguments to lowercase
            args = args.map((w) => w.toLowerCase());

                // Inform user of unknown command
                ChatLib.chat(`${LOGO + RED} Unknown command: "${command}" was not found!`);
                ChatLib.chat(`${LOGO + RED} Use '/ka help' for a full list of commands.`);

            break;
    }
}).setName("ka")  // Set the command name to '/ka'
    .setAliases("kupaaddons", "kupa");  // Define aliases for the '/ka' command
