const BaseCommand = require('../../utils/structures/BaseCommand');
const c = require('../../data/config/colors');
const e = require('../../data/config/emojis.json');
const config = require('../../data/config/config.json');
const { MessageEmbed } = require('discord.js');

//Get the formatDate function from the api file
const { formatDate } = require('../../data/api/api');

module.exports = class Command extends BaseCommand {
    constructor() {
        super('userinfo', 'general', [`whois`, `wi`, `ui`], 'userinfo', 'SEND_MESSAGES');
    }

    async run(client, message, args) {

        //Define the options for the status of the user. This is how it wil get displayed in the embed
        let options = {
            online: `Online`,
            idle: `Idle`,
            dnd: `Dnd`,
            offline: `Offline`
        }

        //Get the user
        let person = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) || message.member);

        //Get the roles and the amount
        let roleAmount = person.roles.cache.size - 1;
        let roles = person.roles.cache.map(r => r).join(" ").replace("@everyone", "")

        //Get the nickname of the user
        let nickName = person.nickname;

        //Asign a value to these if they don't exist
        if (roleAmount == 0) roles = `_None_`;
        if (nickName == null || undefined) nickName = `_None_`;

        //Create the embed and send it
        let embed = new MessageEmbed()
            .setTitle(`Userinfo | ${person.user.tag}`)
            .setColor(c.main)
            .setThumbnail(person.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .addField(`Id:`, person.id, true)
            .addField(`Nickname:`, nickName, true)
            .addField(`Status`, options[person.presence.status], true)
            .addField(`Created At:`, formatDate(person.user.createdAt), true)
            .addField(`Joined At:`, formatDate(person.joinedAt), true)
            .addField(`Roles [${roleAmount}]:`, roles, true)
            .setTimestamp()
            .setFooter(config.footer, config.logo)
        return message.channel.send(embed);

    }
}