const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "👨‍🚀",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{

let about = ` *👋 Hello ${pushname}*

*⚒️ SHADOW-MD Support Channels⚒️*

*Whatsapp Channel Link:* Follow the 𝐒𝐇𝐀𝐃𝐎𝐖 𝐌𝐃 channel on WhatsApp: https://whatsapp.com/channel/0029Vajn0gb8F2pFh7PDqO0c

> ❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣`

    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
