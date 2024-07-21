const fs = require("fs");
const chalk = require("chalk");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// Owner
global.owner = [
  ['6282285357346', 'Tio', 'satriopambudi866@gmail.com', true]
]

global.APIs = { 
  tixo: 'https://api-nightmares.my.id'
}

global.APIKeys = {
  'https://api-nightmares.my.id': 'Tio'
}

global.setting = {
  clear: false,
  addReply: true
}

global.info = {
  version: 'beta.version_1',
  nameBot: 'Tixo Md',
  nameOwn : 'Tioo',
  nomerOwn : '6282285357346',
  pairingNumber: '2348089782988',
  packname : 'sticker by ',
  author : 'N I G H T M A R E',
  namebot : '乂 NightMare - MD',
  wm : 'N I G H T M A R E  -  M D',
  stickpack : 'Whatsapp',
  stickauth : 'Bot - MD'
}

global.url = {
 sig: 'https://instagram.com/tulisan.ku.id',
 sgh:  'https://github.com/Tiooxy',
 sgc: 'https://chat.whatsapp.com/',
 thumb: ' ',
 thumbnail: 'https://telegra.ph/file/07428fea2fd4dccaab65f.jpg',
 urlError: 'https://telegra.ph/file/a6294049a1863a69154cf.jpg',
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/tiooxy',
 ptrakterr: '-',
 pdana: '082285357346'
}
// Info Wait
global.msg = {
 wait: '⏱️ *Mohon bersabar*\n\> Sedang menjalankan perintah dari *User*!',
 eror: '🤖 *Information Bot*\n\> Mohon maaf atas ketidaknyamanan dalam menggunakan *Nightmare Bot* . Ada kesalahan dalam sistem saat menjalankan perintah.',
 danied: 'Kamu tidak memiliki akses'
}


global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    };
    let results = Object.keys(emot).filter(v => new RegExp(v, 'gi').test(string));
    if (!results.length) return '';
    else return emot[results[0]];
  }
}

/**
Context info
**/

global.adReply = {
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    "newsletterJid": "120363183258593542@newsletter",
                    "serverMessageId": 103,
                    "newsletterName": info.nameBot

                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: info.nameBot,
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: url.thumbnail,
                    sourceUrl: url.sgc,

                }
            }
        }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
