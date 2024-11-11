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
} from "./Constants";
import {
    @TextProperty,
    @PercentSliderProperty,
    @SliderProperty,
    @SwitchProperty,
    @ButtonProperty,
    @Vigilant,
    @CheckboxProperty,
    @SelectorProperty,
    @ColorProperty,
    Color
} from '../../Vigilance/index';

@Vigilant("KupaAddons", "KupaAddons", {
    getCategoryComparator: () => (a, b) => {
        const categories = [
            "General",
            "Container",
            "Party",
            "Economy",
            "Combat",
            "Mining",
            "Farming",
            "Event",
            "Crimson Isles",
            "Dungeon",
            "Kuudra",
            "Rift",
        ];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
})
class Settings {
    constructor() {
        this.initialize(this);

        // General Category
        this.setCategoryDescription(
            "General",
            `${HEADER}
${ITALIC}Related Commands: /ka <clear, coords, fairy, gui, help, lists, settings, waypoint>
${
                DARK_RED + BOLD
            }CAUTION: Some features are technically chat macros, so use at your own risk [UAYOR]!`
        );

        // Container Category
        this.setCategoryDescription(
            "Container",
            `${HEADER}
${ITALIC}Related Commands: /ka <binds, buttons>`
        );

        // Party Category
        this.setCategoryDescription(
            "Party",
            `${HEADER}
${ITALIC}Related Commands: /ka <wl, bl>`
        );

        // Economy Category
        this.setCategoryDescription(
            "Economy",
            `${HEADER}
${ITALIC}Related Commands: /ka <attribute, calc, nw>`
        );

        // Combat Category
        this.setCategoryDescription("Combat", HEADER);

        // Mining Category
        this.setCategoryDescription(
            "Mining",
            `${HEADER}
${ITALIC}Related Commands: /ka <alloy, chevent, dmevent>`
        );

        // Farming Category
        this.setCategoryDescription(
            "Farming",
            `${HEADER}
${ITALIC}Realted Commands: /pesttp`
        );

        // Event Category
        this.setCategoryDescription(
            "Event",
            `${HEADER}
${ITALIC}Related Commands: /ka <rabbit, warplist>`
        );

        // Crimson CraftsCategory
        this.setCategoryDescription(
            "Crimson Crafts",
            `${HEADER}
${ITALIC}Related Commands: /ka <attribute, calc>`
        );

    }

    // ████████████████████████████████████████████████████ GENERAL FEATURES ████████████████████████████████████████████████████

    // --- Basics ---
    @SwitchProperty({
        name: "KupaAddons Toggle",
        description: `Toggle ${GREEN}ON ${GRAY}to enable or ${RED}OFF ${GRAY}to disable KupaAddons.`,
        category: "General",
        subcategory: "Basics",
    })
    kaToggle = true;

    @ButtonProperty({
        name: "Discord",
        description: `${GRAY}KupaAddons Discord Server`,
        category: "General",
        subcategory: "Basics",
        placeholder: "Discord",
    })
    discordLink() {
        java.awt.Desktop.getDesktop().browse(
            new java.net.URI("https://discord.gg/xTpTBz7fH4")
        );
    }

    // ████████████████████████████████████████████████████ PARTY ████████████████████████████████████████████████████

    // --- Message ---
    @TextProperty({
        name: "Guild Join Message",
        description: `Set the message to be sent to the guild once a user joins. Use ${
            AQUA + "${name}"
        } ${GRAY}in order say player name.`,
        category: "Party",
        subcategory: "Message",
    })
    guildMessage = "";

    @TextProperty({
        name: "Party Join Message",
        description: `Set the message to be sent to the party once a user joins. Use ${
            AQUA + "${name}"
        } ${GRAY}in order say player name.`,
        category: "Party",
        subcategory: "Message",
    })
    partyMessage = "";

    @SwitchProperty({
        name: "Party Leader Only",
        description: "Only sends above message when you are party leader.",
        category: "Party",
        subcategory: "Message",
    })
    partyMessageLeader = false;

    // --- Party ---
    @SwitchProperty({
        name: "Anti Ghost Party",
        description:
            "Prevents creating ghost parties when inviting multiple players.",
        category: "Party",
        subcategory: "Party",
    })
    antiGhostParty = false;

    @SwitchProperty({
        name: "Auto Join Reparty",
        description: "Accepts reparty invites sent within 60 seconds.",
        category: "Party",
        subcategory: "Party",
    })
    joinRP = false;

    @SelectorProperty({
        name: "Auto Transfer",
        description: "Transfers party when certain conditions are met.",
        category: "Party",
        subcategory: "Party",
        options: ["OFF", "On Transfer", "On Kick"],
    })
    autoTransfer = 0;

    @TextProperty({
        name: "Server Kick Announce",
        description: `Set the message to be sent to the party if you get lobby kicked or as nothing to turn ${RED}OFF${GRAY}.`,
        category: "Party",
        subcategory: "Party",
    })
    kickAnnounce = "";

    @SwitchProperty({
        name: "Whitelist Rejoin",
        description: `Accepts party invites from players on the whitelist.
Add players with ${AQUA}/va whitelist${GRAY}.`,
        category: "Party",
        subcategory: "Party",
    })
    joinWhitelist = true;

    // --- Party Commands ---
    @SwitchProperty({
        name: "Leader Chat Commands",
        description: `Allows players in party to use leader commands.\nBanish players with ${AQUA}/va blacklist ${GRAY}and set toggle with ${AQUA}/va toggles${GRAY}.`,
        category: "Party",
        subcategory: "Party Commands",
    })
    leaderCommands = false;
    @SwitchProperty({
        name: "Party Chat Commands",
        description: `Allows players to use party commands.\nBanish players with ${AQUA}/va blacklist ${GRAY}and set toggle with ${AQUA}/va toggles${GRAY}.`,
        category: "Party",
        subcategory: "Party Commands",
    })
    partyCommands = false;

    // --- Fishing ---
    @SelectorProperty({
        name: "Announce Mythic Creature Spawn",
        description:
            "Sends coordinates of user mythic lava creature spawns to chat.",
        category: "Crimson Crafts",
        subcategory: "Fishing",
        options: ["OFF", "All Chat", "Party Chat", "Self"],
    })
    mythicLavaAnnounce = 0;

    @SwitchProperty({
        name: "Detect Mythic Lava Creature",
        description: "Alerts player of nearby Thunders or Lord Jawbuses.",
        category: "Crimson Crafts",
        subcategory: "Fishing",
    })
    mythicLavaDetect = false;

    @SwitchProperty({
        name: "Golden Fish Timer",
        description: `Sets a 4 minute timer on rod cast to track Golden Fish reset.\nMove GUI with ${AQUA}/moveTimer${GRAY}.`,
        category: "Crimson Crafts",
        subcategory: "Fishing",
    })
    goldenFishAlert = false;
}

export default new Settings();