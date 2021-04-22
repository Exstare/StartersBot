## Starters Bot - A Discord.js V12 bot for starters!

This is a basic Discord.js V12 bot for Discord. You can use this as a template for your own Discord bot!
This bot comes with some moderation an information commands. 
```
📢 Note: You will need to have a code editor and Node.js installed before you can do this!
VSC: https://code.visualstudio.com/
Node.js: https://nodejs.org/en/
```
---
### 📑 | Commands
#### Information
```
- `avatar` | `icon`, `av`
- `botinfo` | `bi`
- `ping` | `latency`
- `serverinfo` | `si`
- `userinfo` | `whois`, `wi`, `ui`
```
#### Moderation
```
- `ban`
- `kick`
- `clear` | `purge`
```

--- 

### 🛠 | Setup
`1.` Firstly, go to the [Discord Developer Portal](https://imgur.com/fykFG77.png)

Give it a name and create your application!
On the `dashboard`, you can change the icon for your bot, if you want too.

`2.` | On the left from your dashboard, go to `Bot`, here can you add your bot to make it a bot!

`3.` | To invite the bot to your server, go to `OAuth2` and choose `bot`.
- Scroll down and choose the desired perms. I'll go with `Administartor`.
- Copy the link, paste it in your browser and follow the steps.

`3.` | On the Bot page, you can copy the token from your bot. 

`4.` | Open your code editor (I will use Visual Studio Code) and open the file.
```
📢 Note: To open the folder, go to the left up corner.
Do to: `File` - `Open Folder` , go to the place you stored it and choose the file (StartersBot)!
```

`5.` | Open the `.env.example` file. In this file are the token from your bot and the prefix stored.
- Change the filename from `.env.example` to `.env`
- Replace `token` with the token from your bot that you copied in `step 3`.
- You can change the prefix too, if you want too. The default prefix is `!!`.
```
DISCORD_BOT_TOKEN=token
DISCORD_BOT_PREFIX=!!
```

`6.` | Open the `config.json` file in `src/data/config`. These are some settings for the bot.
- You can change the `footer` to whatever you want!
- You can change the `logo` which will be used in the code! (‼ It has to be a link with `.png`/`.jpg`/`.gif` behind it!)

`6.1. ` | In the `colors.json` and `emojis.json`, your able to change the colors and the emojis used in the bot, so it will get displayed right everywhere in the bot, to make your life easier!
```json
{ 
  "footer": "By Exstare#0001",
  "logo": "https://cdn.discordapp.com/attachments/727254991449882654/743578202143981757/StartersBot.png"
}
```
```json
{
  "main": "#56b3a1",
  "done": "#00ff00",
  "fail": "#ff0000",
  "error": "#fcf000",
  "pending": "#fcfcfc"
}
```
```json
{
  "done": "✅ | ",
  "fail": "❌ | ",
  "error": "⚠ | ",
  "pending": "⏱ | ",
  "wave": "👋 | "
}
```

`7.` | Now that everything is set up, you're ready to start your bot!
- Open your terminal in your code editor.
- Type: `npm install`, this wil install the modules
- Type `npm i discord.js nodemon dotenv moment ms `, this will install / update all required packages! (`discord.js` - `nodemon` - `dotenv` - `moment` - `ms`)
- Type: `npm run dev`, this wil run your bot, and automatically restart when you change and save a file!
```
📢 Note: In Visual Studio Code, you can show/hide your terminal with Ctrl-`
```

### 🎉 | Congratz, your bot is now up and running and ready to rumble!
#### 📢 | If you need help, feel free to contact me on Discord: Exstare#0001!
