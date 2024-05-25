const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94712823731";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_07_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFEditpOW5KUWtGbDAreHRQMmxSVEw4ejdmdi8xd1lNaFo3MGU5RUptSEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTI4MjM3MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQxODEzMENDQTY2NTUxMEU2RDNENzFGQzJBNDQ4ODIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjY1MzI2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzEyODIzNzMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjQ0MzRFRkQzMjgzRkYyNDkwREEwMUFCNTdBNDc3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2NTMyNjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOXp5eVhBUV9RbC01TFlUcEpEUXU0UVwiLFxuICBcInBob25lSWRcIjogXCI2ZTViMWQ2NC1jM2U1LTQ3NjAtYTUwYS05ZDZkMmFiNGZiNWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTQ1LFxuICAgICAgMjMxLFxuICAgICAgNTAsXG4gICAgICA2NSxcbiAgICAgIDQ5LFxuICAgICAgMjI1LFxuICAgICAgMTIwLFxuICAgICAgMjQwLFxuICAgICAgMjExLFxuICAgICAgODMsXG4gICAgICA4OCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MSxcbiAgICAgIDIxMCxcbiAgICAgIDE4OSxcbiAgICAgIDE0MCxcbiAgICAgIDUsXG4gICAgICAxOSxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAyMzYsXG4gICAgICAxMjEsXG4gICAgICAxODUsXG4gICAgICA3NSxcbiAgICAgIDEyNCxcbiAgICAgIDEzMyxcbiAgICAgIDUxLFxuICAgICAgMTQ3LFxuICAgICAgMTg0LFxuICAgICAgMjUxLFxuICAgICAgMTc0LFxuICAgICAgMTEsXG4gICAgICAxMzMsXG4gICAgICA5OCxcbiAgICAgIDc4LFxuICAgICAgMjU1LFxuICAgICAgNzYsXG4gICAgICA5LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbWlpSlVGRU1xWnlMSUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFOSER6L25TbGdPb0s4V2F4eHIxOU4rMjJHajQ4anhXNTJjc0sxWWlkRU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHE0bXZ2MWs2SE5xVFVJSkk5TytYQjI0UlJVUEVXc3ZIWTNGcWR4TVBVcEM2eURRdUROMEpXaXptUUJ6OHZhR1R5UG9LUERhUGhEa0Z4ZXNuKzhnQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZS95Z09IeHB2WFRSdjlvaU0zN0Q5M0VwZmFLM2JhUXptOXlFenZTeXdFNWJ5M2lqWHI5WWVlUEVXWXM4SE11RGNQQ0ZRcExCSHZLMnhjUkJWMSt5aVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMjgyMzczMToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMyMTgxODM4NDEzODg5OjI0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk5vIE5hbWVcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzEyODIzNzMxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjY1MzI2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU92ZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3ZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwia3BPQ0JBcnYyOVlzRWlBZkJsSGNYa2U0ZzI0b0VnRnFuUVE1dnAyMkhvST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg2MzUyOTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYyOTg5MTMzNjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
