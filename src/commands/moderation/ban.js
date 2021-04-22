const BaseCommand = require('../../utils/structures/BaseCommand');
const { failEmbed, errorEmbed, doneEmbed } = require('../../data/api/embeds');

module.exports = class Command extends BaseCommand {
    constructor() {
        super('ban', 'moderation', [], 'ban', 'BAN_MEMBERS');
    }

    async run(client, message, args) {
        
        //Check if there is an argument (the user to ban)
        if (!args[0]) return failEmbed(message, `No user given!`);

        //Get the person to ban
        let person = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));

        //Check if the given user is valid
        if (!person) return failEmbed(message, `No valid user given!`);

        //Check if the given user isn't the same as the person writing the command
        if (person.user === message.author) return failEmbed(message, `You can't do this to yourself!`);

        //Check if the user has a higher role then the person writing the command
        if (message.guild.me.roles.highest.position < person.roles.highest.position) return failEmbed(message, `This person has a higher role then you have!`);

        //Ban the user
        await person.ban({ reason: reason }).catch(error => errorEmbed(message, `Oh no, something went wrong!\n\`\`\`${error}\`\`\``));

        //Send the confirmation
        doneEmbed(message, `${person} has been banned!`);

    }
}