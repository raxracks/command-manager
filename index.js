const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let commands = {};

client.on('ready', () => fs.readdirSync('./commands').forEach(command => commands[command.split('/').reverse()[0].split('.')[0]] = command));

client.on('message', async message => {
    let command = message.content.split(' ')[0];

    if(commands[command])
        require(`./commands/${commands[command]}`).onmessage(message, client);
});

client.login('sex');