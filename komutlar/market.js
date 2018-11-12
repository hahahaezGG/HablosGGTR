const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(' `Market | Fiyat` \n\n **__Domainli Hotel__** **15 TL** \n\n **__Standart Discord Bot__** **5 TL** \n\n **__Normal Discord Bot__** **10 TL** \n\n **__Gelişmiş Discord Bot__** **15 TL** ');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'market',
  description: 'Market Kısmı .',
  usage: 'market'
};
