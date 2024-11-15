export const BLACK = "§0";
export const DARK_BLUE = "§1";
export const DARK_GREEN = "§2";
export const DARK_AQUA = "§3";
export const DARK_RED = "§4";
export const DARK_PURPLE = "§5";
export const GOLD = "§6";
export const GRAY = "§7";
export const DARK_GRAY = "§8";
export const BLUE = "§9";
export const GREEN = "§a";
export const AQUA = "§b";
export const RED = "§c";
export const LIGHT_PURPLE = "§d";
export const YELLOW = "§e";
export const WHITE = "§f";

// FORMATTING

export const OBFUSCATED = "§k";
export const BOLD = "§l";
export const STRIKETHROUGH = "§m";
export const UNDERLINE = "§n";
export const ITALIC = "§o";
export const RESET = "§r";

export const HLOGO = `${LIGHT_PURPLE}${BOLD}KupaAddons`;
export const LOGO = `${WHITE}[${LIGHT_PURPLE}KupaAddons${WHITE}]`;
export const VERS = `${YELLOW + ITALIC}${JSON.parse(FileLib.read("KupaAddons", "metadata.json")).version} ${GRAY + ITALIC}by Qpcic`;
export const HEADER = `${WHITE}-=[ ${HLOGO} ${WHITE}]=-`;

export const DISCORD = "https://discord.gg/xTpTBz7fH4";
export const GITHUB = "https://github.com/qpcic/KupaAddons";