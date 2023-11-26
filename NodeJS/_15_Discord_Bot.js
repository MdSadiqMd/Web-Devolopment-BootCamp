// Open Discord and create a Server
// Go to Settings > Advanced > On the Developer Mode
// Go to Discord Developer Portal Applications > New Application > Create Application
// Bot --> select Bot and select Administrator setting
// OAuth --> URL Generator --> Bot and Administrator
// At last of the Page you find URL paste it in new tab and authorize it 
// Again go to Bot and click on Rest Token > Copy it and enable all under privileged gateways

const { REST, Routes, Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    } else {
        message.reply({
            content: "Hi from Bot"
        });
    }
});

client.login('MTE3ODI5MTY2NDU3NDQ5Mjc1Mg.GOggqc.MouXIY1ohmM9PSN2wmKwIgyQAI7J9bKKi9gRcg')
    .catch(error => {
        console.error('Error during login:', error);
    });

// Performing Commands using Discord Bot
const commands = [
    {
        name: "/ping",
        description: "Replies with Pong!",
    },
];

const rest = new REST({ version: "v10" }).setToken("MTE3ODI5MTY2NDU3NDQ5Mjc1Mg.GOggqc.MouXIY1ohmM9PSN2wmKwIgyQAI7J9bKKi9gRcg");

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands("1178291664574492752", "1178291200701255690"), // Client ID (it is in OAuth > General) , GUILD_ID (right click on server and copy server ID)
            {
                body: commands,
            }
        );
        
        console.log("Successfully registered application commands.");
    } catch (error) {
        console.error(error);
    }
})();

client.on("interactionCreate", (interaction) => {
    console.log(`Received interaction: ${interaction.type}`);
    
    if (!interaction.isCommand()) {
        console.log(`Ignoring non-command interaction.`);
        return;
    }

    const { commandName } = interaction;

    console.log(`Received interaction for command: ${commandName}`);

    if (commandName === "ping") {
        console.log(`Executing /ping command`);
        interaction.reply("Pong!");
    }
});

