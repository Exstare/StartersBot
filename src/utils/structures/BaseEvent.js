//The BaseEvent, to make it easier to create events

module.exports = class BaseEvent {
  constructor(name) {
    this.name = name;
  }
}