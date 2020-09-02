module.exports.run = (client, message, args) => {
    return message.reply("Pong! API response time "+Math.round(client.ws.ping));
}

module.exports.help = {
    name: "ping"
};