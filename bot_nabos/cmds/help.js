// CÓDIGO PARA EL COMANDO HELP
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    message.channel.send("LISTA DE COMANDOS:\n    > /dado \t\t\t\t Tira un dado del 1 al 6.\n> /jf \t\t\t\t tus muertos.\n    > /moneda \t\t\t\t Tira una moneda para que salga cara o cruz.\n    > /help \t\t\t\t Muestra este menú\n    > /ping \t\t\t\t pong!");
}

module.exports.config = {
    name: "help",
    description: "Shows a list of all possible commands.",
    usage: "/help",
    accessableby: "Members",
    aliases: ['h']
}