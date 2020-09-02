const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");
const ms = require("ms")


module.exports = {
  name: "uptime",
  description: "Get the detailed information of bot",
  execute(client, message, args) {
    console.log(client.queue.size)
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .addField("I am online from last", ms(client.uptime), true)
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};
