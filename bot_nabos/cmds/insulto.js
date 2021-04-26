// CÓDIGO PARA EL COMANDO insulto
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    message.channel.send("panoli");
}

module.exports.config = {
    name: "insulto",
    description: "Shows a list of all possible commands.",
    usage: "/insulto",
    accessableby: "Members",
    aliases: ['i']
}