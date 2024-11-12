export function playerName(player) {
    let name = player.replace(/[^a-zA-Z0-9[\]_ ]/g, "");
    let nameIndex = name.indexOf("]");

    while (nameIndex !== -1) {
        name = name.substring(nameIndex + 2);
        nameIndex = name.indexOf("]");
    }
    return name.split(" ")[0];
}