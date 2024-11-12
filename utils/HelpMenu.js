import {BOLD, DARK_GRAY, DARK_PURPLE, RED, GRAY, LOGO, RESET, WHITE} from "./Constants";

export function helpCmd() {
    ChatLib.chat(
        `\n    ${LOGO} ${DARK_GRAY}v${JSON.parse(FileLib.read("KupaAddons", "metadata.json")).version}
        
    ${DARK_PURPLE + BOLD}GENERAL:${RESET}
    ${WHITE}/ka ${GRAY}- Main config UI
    ${WHITE}/ka discord${GRAY} - Discord server link
        
    ${DARK_PURPLE + BOLD}FEATURES:${RESET}
    ${WHITE}/ka party${GRAY}- Displays available Party commands
        
    ${DARK_PURPLE + BOLD}MISC:${RESET}
    ${WHITE}/ka github${GRAY} - GitHub repo link`
    );
}

export function helpParty() {
    ChatLib.chat(
        `\n    ${LOGO} ${DARK_GRAY}v${JSON.parse(FileLib.read("KupaAddons", "metadata.json")).version}
        
    ${DARK_PURPLE + BOLD}PARTY COMMANDS:${RESET}
    
    ${WHITE}/ka padd${GRAY} - Adds a player
    ${WHITE}/ka premove${GRAY} - Removes specified player
    
    ${WHITE}/ka pshow${GRAY} - Shows currently added players
    ${WHITE}/ka pclear${GRAY} - Clears all entries
    
    ${WHITE}/ka inv${GRAY} - Invites every added player
    `
    );
}