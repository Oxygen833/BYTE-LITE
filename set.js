 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFMaktpNDZTcEQxWjJ0NWs4anNVNmxwL05TS3dLUmtNWWMxenR6bG5Haz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1oxYitLbElaL2JGS2pmbGEvQWZpN2FoSDFPU1lZcWdpSHFVL0FrLzFoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSjVySnJtaGtwUFNaalU4cFFIdjNJN1FZMjhxcmc2MklhaTJ0cnVsajBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodWZMeG1QbDVkclJrSUZaVmlqQTZPb1R2ZStxNVRSbWxtQW1rZmtwL2xnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBbzQzcGw2Vm9lUXVobDRlUEI1K2U5dll3YVhLWlRyWE14S0R5bDlVbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM0R1Bzd09MV0orOXNqTitpKzdzYXUzeVI3bEN6WWYzNTgwNjYrZlp5MG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05SbEp5K0lqbmt0YVdzd1JIeDdLQXVOUmZ5cmRXRnNSRVFJWlNxWDlHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1RjSnpITTJ3RW5UeS80VXJXbk1ETlN4QXRWSk1RdVpsUXJmOVR2YUwxdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXbm5PVVpTb2doakJJWmZ6SnF6RlJZYnpqOW1IQTFkQ3AxWEZsbG9IMEh6NWMwY2QwUWI3ekJHYmg4YXNXWGNuaTJMTkp5S2VsdU9tUGdtMDRYYUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InZNNjBjT29id3RUdlp5RUFNdzF0MHI5QmpjdVR5SHc0QndJeUFOLzZTMU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRlR28wMWN4UWh5R3hjWExiZmxRVWciLCJwaG9uZUlkIjoiMjM2YTJhOTAtNWYzYS00YjU5LTkyYjUtOGE1MTM3NDY2YjZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9TN2xEUVlBaEtIbXVRYWwvb1Uvb0Q3RkFrVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUT1lhTkxEWFhYMXUvaWJXSzJxSUpyUU56TW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlNNRE41Tk0iLCJtZSI6eyJpZCI6IjI1NDc2ODMxNzczMjozM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnJkcDhNRUVKN2o1N2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTXdvb1BxendCMzRPNWlDaG9LYmtUbnZhb0RYSWc2a1FyTFN1d0J3T0lnND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTRoOGVZLzE2Nk13SnFMekltZ3MzVGVCVjlyZktkYk1sS2R5MmRHbDBXVEU4bjNOTkhOL0VjckFDTWJOUktRZWRZa1d3ZjVKeHYybXo3NjdKSGNXQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVmUysybmd2TDY1aVY5MmlsQTFNNit5LzREbGNKenBoV3NZTWl6T0N3ZkszWW5oQXNMeDJMaks3cUhwSENZbFpEcDBWRGtmWHdMMGVqTkVmeEI3TEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY4MzE3NzMyOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRNS0tENnM4QWQrRHVZZ29hQ201RTU3MnFBMXlJT3BFS3kwcnNBY0RpSU8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2NTYzNjR9 || 'Byte;;;',

////////////////////////////////



    PREFIXE: process.env.PREFIX || "!",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "OXYGEN",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254768317732",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
