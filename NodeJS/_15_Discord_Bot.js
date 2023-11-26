// Open Discord and create a Server
// Go to Settings > Advanced > On the Developer Mode
// Go to Discord Developer Portal Applications > New Application > Create Application
// Bot --> select Bot and select Administrator setting
// OAuth --> URL Generator --> Bot and Administrator
// At last of the Page you find URL paste it in new tab and authorize it 
// Again go to Bot and click on Rest Token > Copy it and enable all under privileged gateways

const {Client,GatewayIntentBits, Message} =require("discord.js");

const client=new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] // intends means what permisions we are giving (Hover to go to documentation)
});

client.on("messageCreate",(message)=>{
    console.log(message.content);
});

client.login('MTE3ODI5MTY2NDU3NDQ5Mjc1Mg.GTUTAK.lY9ew2fWdeIjqdglOKLJWTA4LFdxILtSYYGxzg'); // Token that we have copied