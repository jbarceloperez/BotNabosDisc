// CÓDIGO PARA EL COMANDO HELP
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    message.channel.send("LISTA DE COMANDOS:\n> /dinero\t\tObten 10000000€ instantaneamente.\n> /peineta\t\tSaca una peineta >:c\n> /chad\t\t\tAbsolute chad\n> /jazz\t\t\tBee movie fue un error.\n> /dado\t\t\tTira un dado del 1 al 6.\n > /jf\t\t\t\t\ttus muertos.\n    > /vox\t\t\t\tUna mierda\n > /moneda\t\tTira una moneda para que salga cara o cruz.\n    > /help\t\t\t\tMuestra este menú\n    > /ping\t\t\t\tpong!");
}

module.exports.config = {
    name: "help",
    description: "Shows a list of all possible commands.",
    usage: "/help",
    accessableby: "Members",
    aliases: ['h']
}