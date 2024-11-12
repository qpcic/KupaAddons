import PogObject from "../../PogData";

// PERM DATA
export let data = new PogObject(
    "KupaAddons",
    {
        // dynamic read version
        version: `${JSON.parse(FileLib.read("KupaAddons", "metadata.json")).version}`,
        // list
        permlist:[],
        attributelist: [
            "breeze",
            "dominance",
            "fortitude",
            "lifeline",
            "magic_find",
            "mana_pool",
            "mana_regeneration",
            "mending",
            "speed",
            "veteran",
            "blazing_fortune",
            "fishing_experience",
        ],
    },
    "data/kupa.json"
);

// perm saving when game close
register("gameUnload", () => {
    data.save();
})