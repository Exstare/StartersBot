const BaseCommand = require('../../utils/structures/BaseCommand');
const c = require('../../data/config/colors');
const e = require('../../data/config/emojis.json');
const config = require('../../data/config/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = class Command extends BaseCommand {
    constructor() {
        super('ping', 'general', [`bi`], 'ping', 'SEND_MESSAGES');
    }

    async run(client, message, args) {

        //Send this embed temporarely
        let tempEmbed = new MessageEmbed()
            .setDescription(e.pending + `Pinging...`)
            .setColor(c.pending)
        await message.channel.send(tempEmbed).then(msg => {

            //Get the difference in the message and tempEmbed, and the client ping
            let embed = new MessageEmbed()
                .setTitle(`Ping`)
                .setColor(c.main)
                .setDescription(`⌛ | ** ${msg.createdTimestamp - message.createdTimestamp}ms**\n\n⏱ | ** ${Math.round(client.ws.ping)}ms**`)
            msg.edit(embed);
        })
    }
}