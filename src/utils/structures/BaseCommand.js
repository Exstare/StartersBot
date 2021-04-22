//The BaseCommand, to make it easier to create commands

module.exports = class BaseCommand {
  constructor(name, category, aliases, usage, perms) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
    this.usage = usage;
    this.perms = perms;
  }
}