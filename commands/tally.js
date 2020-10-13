module.exports = {
  name: 'tally',
  description: 'Tallies stuff',
  cooldown: 5,
  execute(message, args) {
    message.channel.send('Pong!');
  }
}