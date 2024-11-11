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
    LOGO,
} from "./utils/Constants";

const KA = "[KupaAddons]";

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
        case "setting":  // Handle 'setting' command
        case undefined:  // Handle undefined (fallback case)
            openSettings();
            break;

        default:
            // Normalize all arguments to lowercase
            args = args.map((w) => w.toLowerCase());

            const PARTY_COMMANDS = new Set(["perm"]);
            const INSTANCES = new Set(["f", "m", "t"]);
            const STATUS_ARGS = new Set(["ping", "tps", "fps", "cps", "yaw", "pitch", "dir", "direction", "day"]);
            const STAT_ARGS = new Set(["pet", "stats", "soulflow", "sf", "playtime", "pt", "legion"]);

            // Check and handle valid commands
            if (PARTY_COMMANDS.has(command) || INSTANCES.has(command[0])) {
                // Handle party or instance commands
                // For example: call specific functions for these commands (not defined here)
            } else if (STATUS_ARGS.has(command)) {
                getStatus(command);  // Call the function to get status based on the command
            } else if (STAT_ARGS.has(command)) {
                getStat(command);  // Call the function to get stats based on the command
            } else {
                // Inform user of unknown command
                ChatLib.chat(`${LOGO + RED}Unknown command: "${command}" was not found!`);
                ChatLib.chat(`${LOGO + RED}Use '/ka help' for a full list of commands.`);
            }
            break;
    }
}).setName("ka")  // Set the command name to '/ka'
    .setAliases("kupaaddons", "kupa");  // Define aliases for the '/ka' command
