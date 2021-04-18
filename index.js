// Welcome to the world of Discord Bots! In this repo, you can use this code to make your first or another Discord bot!
// This will include many commands you can copy over to your bot to up your bot game.
// Enjoy!

const Discord = require("discord.js") // gets the discord.js module
const bot = new Discord.Client(
  // you can also use intents if your bot needs them, ex: ws: { intents: 4615 }
); // makes a new client for the bot
const { token, prefix } = require("./config.json") // gets the token and prefix from the config file
const fs = require("fs"); // requires the fs module

bot.prefix = prefix;
bot.commands = new Discord.Collection(); // makes a new collection of commands
bot.aliases = new Discord.Collection(); // makes a new collection of aliases; aliases are other names for commands
bot.categories = fs.readdirSync("./Commands/"); // reads the directory/folder: "Commands" so command files can be read

["command"].forEach(handler => {
  require("./loader.js")(bot); // requires the loader file so it can load commands
});

bot.on("ready", () => { // makes a ready event for the bot so it can turn on
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}!`) // just to let us know the bot is on
  // you can set a status for the bot by typing: bot.user.setActivity("the server", { type: "WATCHING" } // types are: "WATCHING", "LISTENING", "STREAMING", "COMPETING")
}); 

bot.on("message", async (message) => {
  require('./message')(bot, message) // diverts the message event to the message file
});

bot.login(token) // this makes the bot log into the application
