/**
 * The ready event is vital, it means that only AFTER this will your bot start reacting to information
 * received from Discord
 */
const Discord = require("discord.js")

module.exports = client => { 
    console.log(`${client.user.username} is online`)
    console.log("BOT DEL SERVER DE PEPE FUNCIONANDO");
    client.user.setActivity(" como lloras por lo feo que eres.", {type:"LISTENING"});
}