const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(' ` Yönetim Kadrosu ` \n\n **Kurucu** __hahahahaha__ = Hasan \n\n **Admin** __Yok__ \n\n **Mod** __BlaxkCat__ ');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yönetim',
  description: 'Yönetim Kadrosu',
  usage: 'yönetim'
};