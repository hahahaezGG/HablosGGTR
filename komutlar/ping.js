const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(' `HablosGG TR` \n\n **Merhaba Ben Hasan Kodlama Üstünde Çalışmalar Gerçekleştiriyorum Ve Bu Konuda Bir** **__OYUN__** **Kodladım Ve Oyunum İçin Bir Bot Yapmak İstedim Bilgiler Aşşaya Yazılacaktır \n\n **http://hablosgg.holo.gratis/** Linkine Girebilirsiniz \n\n **__Güncellemeler__** \n\n `Haberler` Yeri Eklendi Yeni Eşyalar Eklendi  ');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güncelleme',
  description: 'Hotel Güncellemeleri',
  usage: 'güncelleme'
};
