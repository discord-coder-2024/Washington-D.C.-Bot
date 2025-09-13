const { Client, GatewayIntentBits, SlashCommandBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, // Needed to read message content
  ],
});

const commands = [
  new SlashCommandBuilder()
    .setName("test")
    .setDescription("This is a test command."),
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check the bot's response ping!"),
];

client.on('ready', (c) => {
  console.log('{c.user.username} is online, and monitering Washington!');
});

client.login("process.env.token");