const BaseEvent = require('../../utils/structures/BaseEvent');
const { waveEmbed } = require('../../data/api/embeds');

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    //Check if the author from the message is a bot
    if (message.author.bot) return;

    //Check if the bot got tagged, if so, return the waveEmbed with the prefix
    if (message.content === `<@!${client.user.id}>`) return waveEmbed(message, `Hey there, my prefix here is \`${client.prefix}\``);

    //If the message starts with the prefix, go ahead
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        
        //Check if the person who sent the message has the perms in the >>  super('', '', [], '', 'PERMISSIONS');
        if (!message.member.permissions.has(command.perms.toUpperCase())) return failEmbed(message, `You need the ${command.perms.toUpperCase()} permission to do this!`);

        //If the command exist, run the command
        command.run(client, message, cmdArgs);
      }
    }
  }
}