const BaseCommand = require('../../utils/structures/BaseCommand');
const { failEmbed, errorEmbed, doneEmbed } = require('../../data/api/embeds');

module.exports = class Command extends BaseCommand {
    constructor() {
        super('clear', 'moderation', [`purge`], 'clear <amount>', 'KICK_MEMBERS');
    }

    async run(client, message, args) {
        
        //Check if there is an amount
        if (!args[0]) return failEmbed(message, `No amount given!`);

        //Check if the argument is an number or not
        if (isNaN(args[0])) return failEmbed(message, `That's not a valid amount!`);

        //Check if the amount is equal or lower then 0
        if (parseInt(args[0]) <= 0) return failEmbed(message, `I can't delete ${args[0]} messages!`);

        //Define the amount
        let deleteAmount;
        if (parseInt(args[0]) > 99) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true).then(deleted => {

            doneEmbed(message, `I deleted ${deleted.size} messages!`);

        }).catch(error => errorEmbed(message, `Oh no, something went wrong!\n\`\`\`${error}\`\`\``));

    }
}