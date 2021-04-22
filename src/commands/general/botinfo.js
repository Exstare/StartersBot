const BaseCommand = require('../../utils/structures/BaseCommand');
const c = require('../../data/config/colors');
const e = require('../../data/config/emojis.json');
const config = require('../../data/config/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = class Command extends BaseCommand {
    constructor() {
        super('botinfo', 'general', [`bi`], 'botinfo', 'SEND_MESSAGES');
    }

    async run(client, message, args) {

        //Get the nickname of the bot
        let nickname = message.guild.member(client.users.cache.get(client.user.id)).nickname;

        //Get the uptime in days/hours/minutes/seconds
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        //Create the embed and send it
        let embed = new MessageEmbed()
            .setTitle(`Botinfo`)
            .setDescription(`This bot has been created by [Exstare](https://github.com/Exstare/StartersBot).`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .addFields(
                { name: `Name:`, value: client.user.username, inline: true },
                { name: `Nickname:`, value: nickname ? nickname : `_None_` , inline: true },
                { name: `ID:`, value: client.user.id, inline: true },
                { name: `Created At:`, value: client.user.createdAt.toLocaleString().split(' ')[1], inline: true },
                { name: `Users:`, value: client.users.cache.size.toLocaleString(), inline: true },
                { name: `Uptime:`, value: `${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true }
            )
            .setColor(c.main)
            .setTimestamp()
            .setFooter(config.footer, config.logo)
        return message.channel.send(embed);

    }
}