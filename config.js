const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348030623871";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348030623871,2348030623871";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_51_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSazIzQ2tuYmFnZWFObzB5OGpISW1EMjFhYS8xb1A0aW1maXJXMG9NWVBjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzA2MjM4NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMzM0RTUyOTBGOTE5NkFBMkFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDM1MzQ4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzA2MjM4NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBN0QzNjRDOEI2QjIxNkRBNkM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDM1MzQ4OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJydjN1Q1hQS1FXLXhnRE52d2owQnFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5YWI1ODhlLWFiYTItNGZkZS05NTVlLTUxMGVkOWQ5MGM0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDUxLFxuICAgICAgMTU3LFxuICAgICAgMjI2LFxuICAgICAgMjIwLFxuICAgICAgMTAwLFxuICAgICAgMTMzLFxuICAgICAgMTQsXG4gICAgICA2OCxcbiAgICAgIDM3LFxuICAgICAgMjIyLFxuICAgICAgMTM5LFxuICAgICAgMTczLFxuICAgICAgMTUzLFxuICAgICAgMTg2LFxuICAgICAgMTAyLFxuICAgICAgMzAsXG4gICAgICAxMDIsXG4gICAgICAzMyxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDE4NSxcbiAgICAgIDIzLFxuICAgICAgMTMwLFxuICAgICAgOTksXG4gICAgICAyNDIsXG4gICAgICA3MyxcbiAgICAgIDg1LFxuICAgICAgMjE3LFxuICAgICAgNzYsXG4gICAgICA2MyxcbiAgICAgIDUwLFxuICAgICAgMTQyLFxuICAgICAgMjgsXG4gICAgICAyMzgsXG4gICAgICAxMDAsXG4gICAgICAyNDksXG4gICAgICAxNjIsXG4gICAgICAyMjksXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRVDhEWVhLQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzMDYyMzg3MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDExMTU5MTUyOTI5MDA6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ44oCZw5hcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNm5xTndCRU1iRWdMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBqdUVxV0tGN1NXc25ibUJ5L0c3d0xuZXJlY0xnOXptMklQUmZ4OEdWamM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNkJiTkhqUC9VRGd1RldhK293MWpNRFNhQ05qL01RNm03bjNzcWRHSVlDUjZDS2hXeGdQNGliU0ZBcHRZcVRSUDVPSmNEOGNoNDBiVXU5amxnWEZmZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1hIVlJBVlEwMXk3ZFVsUUxDemhCek9McU1uSys4R3dOdHIxd1VaOUtCVXFmU0NIWW9laE40emVmNlVTNFRiakc3N3dFMndibkxMQVFIUU5ieGZXQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMDYyMzg3MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQzNTM0ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMeFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx4Wi5qc29uIjogIntcImtleURhdGFcIjpcIjBtZEVQcnlPRSswdzVZZ05VWHBJbUtXOHpkR25scEdTZ1p3WUJQRDBrMk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDYyMDMzOTE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQzNTM0ODIzODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
