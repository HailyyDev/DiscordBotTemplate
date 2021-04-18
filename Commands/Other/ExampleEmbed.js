// this is a template of an embed/command you can use to make your own

const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "embed",
  timeout: "",
  aliases: [""],
  run: async(bot, message, args) => {
    let exembed = new MessageEmbed()
    .setTitle("This is a title")
    .setDescription("This is a description")
    .addField("This is a field", `\u200B`)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg") // insert an image link into the quotation marks (smaller image)
    .setImage("https://upload.wikimedia.org/wikipedia/commons/b/bc/Information_example_page_300px.jpg") // insert an image link into the quotation marks // (larger image)
    .setFooter("This is a footer")
    .setColor("RANDOM") // sets a colour: codes: ["RED", "GREEN", "BLUE", "YELLOW", etc.]
    .setTimestamp() // puts a timestamp on the bottom of the embed saying for ex: Today at 12:00

    message.channel.send(exembed);
  }
}
