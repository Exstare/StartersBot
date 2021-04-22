const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    //If the bot is online, log this to the console
    console.log(client.user.tag + ' has logged in.');
  }
}