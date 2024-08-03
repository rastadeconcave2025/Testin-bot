const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "public";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

┏━━━━━━━𒈒𝕿𝕶𝕸-𝖇𝖔𝖙𒈒━━━━━━━┓

┃ ⿻${mode} mode

┃ ⿻User : ${s.OWNER_NAME}

┃

┣━━❏TKM-Bot info❏

┃

┃ ⿻Library : Baileys

️┃ ⿻Prefix : ${s.PREFIXE}

️┃ ⿻Date : ${date}

┃ ⿻Time : ${temps}

┃ ⿻Tools : ${cm.length}

┃ ⿻Ram : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}

┃ ⿻Host : ${os.platform()}

┃

┣━━━━━━━𒈒𝕿𝕶𝕸-𝖇𝖔𝖙𒈒━━━➠

┗━━━━━━━𒈒𝖛.²-𝕭𝖚𝖌𒈒━━━━━━━┛\n\n`;

    

let menuMsg = `

┏━━━━━━━━━━━━━━━━━━━━━━┓

┣❏𝕿𝕶𝕸-𝖇𝖔𝖙 𝖛²

┣❏©𝕮𝖔𝖉𝕰𝖀𝖈𝖍𝖎𝖍𝖆

┗━━━━━━━━━━━━━━━━━━━━━━┛



𒈒𝕿𝕶𝕸-𝕭𝖔𝖙 𝕮𝕸𝕯𝖘𒈒

`;



    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `

┃➠ ${cmd}`;

        }

        menuMsg += `

┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `

            

︎┏━━━━━━━━━━━━━━━━━━━━━━┓

️┣❏𝕿𝕶𝕸-𝖇𝖔𝖙 𝖛²

┣❏©𝕮𝖔𝖉𝕰𝖀𝖈𝖍𝖎𝖍𝖆

┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━┓

┃➠Repo: https://Github.com/Cod3Uchiha/TKM-bot

┗━━━━━━━━━━━━━━━━━━━━━━┛

`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-BOT*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu erreur " + e);

        repondre("🥵🥵 Menu erreur " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu erreur " + e);

        repondre("🥵🥵 Menu erreur " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});

