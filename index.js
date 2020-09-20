require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(NzU3MDExMjE2ODY1Njg5NzQx.X2aLog.Id0FiZ5TnOYDcRIWPTTUtX4MxpA);

bot.on('ready', () => {
  console.info(`Your savior is heerrree!}!`);
});

bot.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Hello');
    msg.channel.send('Hello');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Haha you forgot to tag the person!');
    }
 bot.on('message', msg => {
  if (msg.content === '!k help') {
    msg.reply('Your savior is heerrree!');
    msg.channel.send('Your savior is heerrree!');
  }
 bot.on('message', msg => {
  if (msg.content === 'karakau help') {
    msg.reply('Your savior is heerrree!');
    msg.channel.send('Your savior is heerrree!');
  }
  }
});
