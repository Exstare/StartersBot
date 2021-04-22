//The pre-created embeds to make the code cleaner

const c = require('../../data/config/colors.json');
const e = require('../../data/config/emojis.json');
const config = require('../../data/config/config.json');
const { MessageEmbed } = require('discord.js');

//wave
module.exports.waveEmbed = function waveEmbed(message, desc) {
    let embed = new MessageEmbed()
        .setDescription(e.wave + desc)
        .setColor(c.main)
    message.channel.send(embed);
}

//done
module.exports.doneEmbed = function doneEmbed(message, desc) {
    let embed = new MessageEmbed()
        .setDescription(e.done + desc)
        .setColor(c.done)
    message.channel.send(embed);
}

//fail
module.exports.failEmbed = function failEmbed(message, desc) {
    let embed = new MessageEmbed()
        .setDescription(e.fail + desc)
        .setColor(c.fail)
    message.channel.send(embed);
}

//error
module.exports.errorEmbed = function errorEmbed(message, desc) {
    let embed = new MessageEmbed()
        .setDescription(e.error + desc)
        .setColor(c.error)
    message.channel.send(embed);
}

//pending
module.exports.pendingEmbed = function pendingEmbed(message, desc) {
    let embed = new MessageEmbed()
        .setDescription(e.pending + desc)
        .setColor(c.pending)
    message.channel.send(embed);
}