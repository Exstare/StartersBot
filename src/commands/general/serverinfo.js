const BaseCommand = require('../../utils/structures/BaseCommand');
const c = require('../../data/config/colors');
const e = require('../../data/config/emojis.json');
const config = require('../../data/config/config.json');
const { MessageEmbed } = require('discord.js');
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydney: 'Sydney',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports = class Command extends BaseCommand {
    constructor() {
        super('serverinfo', 'general', [`si`], 'serverinfo', 'SEND_MESSAGES');
    }

    async run(client, message, args) {

        //Get the roles
        let roles = message.guild.roles.cache.sort((a, b) => b.posistion - a.posistion).map(role => role.toString());

        //A shortcut for the members in the cache
        let members = message.guild.members.cache;

        //A shortcut for the members in the cache
        let channels = message.guild.channels.cache;

        //Create the embed and send it.
        let embed = new MessageEmbed()
            .setTitle(`Serverinfo`)
            .setColor(c.main)
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: 'Name::', value: message.guild.name, inline: true },
                { name: 'Id:', value: message.guild.id, inline: true },
                { name: 'Owner:', value: `<@${message.guild.ownerID}>`, inline: true },
                { name: 'Regio:', value: regions[message.guild.region], inline: true },
                { name: 'Text:', value: channels.filter(channel => channel.type === `text`).size, inline: true },
                { name: 'Voice:', value: channels.filter(channel => channel.type === `voice`).size, inline: true },
                { name: 'Members:', value: message.guild.members.cache.size, inline: true },
                { name: 'Roles:', value: roles.length, inline: true },
                { name: 'Emojis:', value: message.guild.emojis.cache.size, inline: true },
                { name: 'Roles List:', value: roles.join(' '), inline: true },
                { name: 'Emojis List:', value: message.guild.emojis.cache.map(e => e.toString()).join(' '), inline: true }
            )
            .setTimestamp()
            .setFooter(config.footer, config.logo)
        return message.channel.send(embed);

    }
}