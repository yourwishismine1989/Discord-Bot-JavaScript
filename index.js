const Discord = require("discord.js");
const { token } = require('./config.json');
const allIntents = Discord.Intents;
const { Client, Events } = require('discord.js');
const client = new Client({ intents: 3276799 });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async (interaction) => {
    console.log(interaction.content);
    if (interaction.content.toLowerCase() === 'hello') {
        await interaction.reply({ content: `Hello, ${interaction.author.username}. Have a wonderful day!`, ephemeral: false });
    }
});

client.login(token);
