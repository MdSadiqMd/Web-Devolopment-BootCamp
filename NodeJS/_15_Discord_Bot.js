// Open Discord and create a Server
// Go to Settings > Advanced > On the Developer Mode
// Go to Discord Developer Portal Applications > New Application > Create Application
// Bot --> select Bot and select Administrator setting
// OAuth --> URL Generator --> Bot and Administrator
// At last of the Page you find URL paste it in new tab and authorize it 
// Again go to Bot and click on Rest Token > Copy it and enable all under privileged gateways

const {REST,Routes,Client,GatewayIntentBits, Message} =require("discord.js");

const client=new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] // intends means what permisions we are giving (Hover to go to documentation)
});

client.on("messageCreate",(message)=>{
    if(message.author.bot){
        return;
    }
    else{
        message.reply({
            content:"Hi from Bot"
        });
    }
});

client.login('MTE3ODI5MTY2NDU3NDQ5Mjc1Mg.GbQ_La.KECfR7R_1wFh6cGPjdV4svhA9NLYnwBgz9nrCE'); // Token that we have copied

// Performing Commands using Discord Bot
const commands=[
    {
        name:"ping",
        description:"Replies with Pong!",
    },
];

const rest=new REST ({version:"10"}).setToken("MTE3ODI5MTY2NDU3NDQ5Mjc1Mg.GbQ_La.KECfR7R_1wFh6cGPjdV4svhA9NLYnwBgz9nrCE");

(async()=>{
    try {
        await rest.put(Routes.applicationCommand("1178291664574492752"),{ // get client ID from OAuth > General
            body:commands
        })
    } catch (error) {
        console.error(error);
    }
})