// CÓDIGO PARA EL COMANDO VOX
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    let kk = "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⣵⣶⣬⣉⡻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⣃⣸⣿⣿⣿⣿⣿⣿⣷⣦⢸⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⢡⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣭⣙⠿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⡿⠿⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢸⣿⣿⣿⣿\n⣿⣿⣿⠋⣴⣾⣿⣿⣿⡟⠁⠄⠙⣿⣿⣿⣿⠁⠄⠈⣿⣿⣿⣿⣈⠛⢿⣿⣿\n⣿⣿⣇⢸⣿⣿⣿⣿⣿⣿⣦⣤⣾⣿⣿⣿⣿⣦⣤⣴⣿⣿⣿⣿⣿⣷⡄⢿⣿\n⣿⠟⣋⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿\n⢁⣾⣿⣿⣿⣿⣿⡉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣹⣿⣿⣿⣦⠙\n⣾⣿⣿⣿⣿⣿⣿⣿⣦⣄⣤⣶⣿⣿⣿⣿⣿⣿⣷⣦⣄⣤⣾⣿⣿⣿⣿⣿⣧\n⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏\n⣷⣦⣙⠛⠿⢿⣿⣿⡿⠿⠿⠟⢛⣛⣛⡛⠻⠿⠿⠿⣿⣿⣿⣿⠿⠟⢛⣡⣾";
    message.channel.send(kk);
}

module.exports.config = {
    name: "vox",
    description: "putos fachas",
    usage: "/vox",
    accessableby: "Members",
    aliases: ['v']
}