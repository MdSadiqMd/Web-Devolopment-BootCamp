// Open Discord and create a Server
// Go to Settings > Advanced > On the Developer Mode
// Go to Discord Developer Portal Applications > New Application > Create Application
// Bot --> select Bot and select Administrator setting
// OAuth --> URL Generator --> Bot and Administrator
// At last of the Page you find URL paste it in new tab and authorize it 
// Again go to Bot and click on Rest Token > Copy it

const {Client,GatewayIntentBits, Message} =require("discord.js");

const client=new Client({
    intents:[GatewayIntentBits.Guilds] // intends means what permisions we are giving (Hover to go to documentation)
});

client.on("messageCreate",(message)=>{
    console.log(message.content);
})