const { readdirSync } = require("fs");
module.exports = (bot) => {
  // reads the dir called Commands
  console.log("-------------------------------------------------") // just to decorate the loader a bit
  readdirSync("./Commands/").map(dir => {
    // get all the sub-folders
    const commands = readdirSync(`./Commands/${dir}/`).map(cmd => {
      // get the command file
      const pull = require(`./Commands/${dir}/${cmd}`);
      // console.log that it successfully loaded the command
      console.log(`Loaded command...`);
      // add the command to bot.commands
      bot.commands.set(pull.name, pull);
      // load the aliases and add it to bot.aliases
      if(pull.aliases && Array.isArray(pull.aliases)) {
        pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
      };
    });
  });
  console.log("-------------------------------------------------")
};
