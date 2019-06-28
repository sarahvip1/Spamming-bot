const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594018769970659328")
setInterval(function() {
channel.send(`free credits free free`);
}, 30)
})

client.login(process.env.BOT_TOKEN);