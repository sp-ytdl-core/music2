const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");


module.exports = {
  name: "resume", 
  description: "Resume the Cureent Playing Song",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);

      const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Please join voice channel for that")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("✅ | Resumed the Paused Song")
  return message.channel.send(embed)
 }
    embed.setDescription("There is nothing paused that i can resume")
    message.channel.send(embed)
    
  }
}