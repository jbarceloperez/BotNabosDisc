// CÓDIGO PARA EL COMANDO peineta
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (client, message, args) => {
    let peineta = "⠀⠀⠀⠀⠀lﾆヽ\n　    　 |= | \n　    　 |_ |\n　　/⌒|~ |⌒i-、\n　 /|　|　|　| ｜\n　｜(　(　(　(　｜\n　｜　　　　　 ｜\n　 ＼　　　　　/\n　　 ＼　　　 |";
    message.channel.send(peineta);
}

module.exports.config = {
    name: "peineta",
    description: "toma pa ti tonto",
    usage: "/peineta",
    accessableby: "Members",
    aliases: ['p']
}