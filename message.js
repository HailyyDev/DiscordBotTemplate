const Timeout = new Set();
const { MessageEmbed } = require("discord.js");
const { prefix } = require("./config.json");
const ms = require("ms");
const hd = require("humanize-duration");
module.exports = async(bot, message) => {

  if(message.author.bot) return; // if the sender of the message is a bot, it is not going to respond
  if(!message.content.toLowerCase().startsWith(prefix)) return; // if the message sent does not start with the bots prefix, it wont respond
  if(!message.member) message.member = await message.guild.fetchMember(message)
  if(!message.channel.type === "dm") return; // if the message sent is in dms of the bot, it will not respond

  const args = message.content.slice(prefix.length).trim().split(/ +/g); // defining args with a bit of regex
  const cmd = args.shift().toLowerCase(); // making sure the command is all lowercase

  if(cmd.length === 0) return; // checking if the command is just the prefix, if so, the bot will not respond

  let command = bot.commands.get(cmd) // getting a command
  if(!command) command = bot.commands.get(bot.aliases.get(cmd));

  if(command)
  {
    if(command.timeout)
    {
      if(Timeout.has(`${message.author.id}${command.name}`))
      {
        message.channel.send(`Slow down! Your on a cooldown of \`${hd(command.timeout)}\`.`)
      } else
      {
        command.run(bot, message, args);
        Timeout.add(`${message.author.id}${command.name}`);
        setTimeout(() => {
          Timeout.delete(`${message.author.id}${command.name}`)
        }, command.timeout)
      }
    } else
    {
      command.run(bot, message, args);
    }
  }
}
