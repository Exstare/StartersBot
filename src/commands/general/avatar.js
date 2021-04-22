const BaseCommand = require('../../utils/structures/BaseCommand');
const c = require('../../data/config/colors');
const e = require('../../data/config/emojis.json');
const config = require('../../data/config/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = class Command extends BaseCommand {
    constructor() {
        super('avatar', 'general', [`icon`, `av`], 'avatar [ id | @user ]', 'SEND_MESSAGES');
    }

    async run(client, message, args) {

        //Get the member
        let person = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) || message.member);

        //Create the embed and send it
        let embed = new MessageEmbed()
            .setTitle(`Avatar | ${person.user.username}`)
            .setColor(c.main)
            .setImage(person.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setTimestamp()
            .setFooter(config.footer, config.logo)
        return message.channel.send(embed);

    }
}