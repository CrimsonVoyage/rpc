const {Author, botID} = require('./bot.json')

//bot client rpc configurations

const RPC = require('discord-rpc')
const clientRpc = new RPC.Client({
    transport: "ipc"
})

clientRpc.on('ready', ()=> {
    clientRpc.setActivity({
        details: "Drip.js/library",
        state: "Managing Drip.js",
        largeImageKey: "alphineo",
        smallImageKey: "big",
        startTimestamp: new Date(),
        buttons: [ 
            { 
                label: "Join server", url: "https://discord.gg/vdNkvMqZhn" 
            },
            {
                label: "Use library", url: "https://trusting-thompson-94efdf.netlify.app/"
            }
        ]
    })

    console.log("RPC is active")
    console.log(Author)
})



//client.on('login')
clientRpc.login({
    clientId: botID
})