import { Client, IntentsBitField, ChannelType, TextChannel } from "discord.js";
import 'dotenv/config';

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages]
});

client.on("ready", () => {
  console.log("Bot is ready!");

  //send a message in a specific channel in a specific guild
  const guildId = process.env.GUILD_ID || "";
  const channelId = process.env.CHANNEL_ID || "";
  const guild = client.guilds.cache.get(guildId);

  // Check if guild is undefined.
  if (!guild) {
    console.log("Guild is undefined.");
    return;
  }

  const channel = guild.channels.cache.get(channelId);

  if (channel && channel.type === ChannelType.GuildText) {
    const message = process.env.MESSAGE || "";
    channel.send(message);
  }
});
console.log(process.env.TOKEN)
client.login(process.env.TOKEN || "");