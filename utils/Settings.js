import {
    AQUA,
    BLUE,
    BOLD, DARK_GRAY,
    DARK_RED,
    GOLD,
    GRAY,
    GREEN,
    HEADER,
    ITALIC,
    RED, VERS,
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
            "Crimson Crafts",
            "Party",
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
${VERS}
${GRAY}/ka help, settings`
        );

        // Party Category
        this.setCategoryDescription(
            "Party",
            `${HEADER}
${VERS}
${GRAY}/ka help, settings`
        );

        // Crimson Crafts Category
        this.setCategoryDescription(
            "Crimson Crafts",
            `${HEADER}
${VERS}
${GRAY}/ka help, settings`
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

}

export default new Settings();