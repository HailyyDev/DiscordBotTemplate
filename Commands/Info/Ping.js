const { MessageEmbed } = require("discord.js"); // requiring MessageEmbed from discord.js so we can use embeds
module.exports = {
  name: "ping", // name of the command
  timeout: 2000, // timeout of the command, 1000ms = 1s
  aliases: ["latency"], // setting an alias for the command, basically means we can use 'latency' instead of 'ping'
  run: async(bot, message, args) => {
    let pingEmbed = new MessageEmbed() // creating a new embed
    .setTitle("Ping Statistics") // a title for the embed
    .setDescription(`Pong! \`${bot.ws.ping}ms\`.`) // main text part of the embed
    .setColor("RANDOM") // sets a colour of the embed to [RANDOM]
    .addField("Hopefully I don't have high ping!", `\u200B`) // adds a field to the embed, if you dont add the code at the end it will say undefined
    .setTimestamp() // sets a timestamp at the bottom of the embed
    .setFooter("Template by Hailyy", bot.user.displayAvatarURL({ dynamic : true })) // sets text at the bottom of the embed
    .setThumbnail('https://media.discordapp.net/attachments/832080250628341811/832081671003701258/ping.png?width=400&height=400') // puts a picture on the embed corner

    message.channel.send(pingEmbed); // sends the message in the command usage channel
  }
}
