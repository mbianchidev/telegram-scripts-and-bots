# Purpose

This repository contains scripts and bots I use with Telegram.

# Scripts

## `cloudflare-mbianchidev_bot`

@mbianchidev_bot is a bot that allows me to manage my old contacts on an inactive telegram account t.me/mbianchidev_bot.
The telegram profile links to the bot, which is hosted on a cloudflare worker.

- Create the telegram bot by messaging @BotFather t.me/BotFather
- Give the bot a name
- Give the bot a username
- Save the API_KEY
- Login https://dash.cloudflare.com/
- Workers
- Create new worker
- Write your code (see `cloudflare-mbianchidev_bot.js`)
- Save and deploy
- Set the API_KEY environment variable
- Test it https://api.telegram.org/bot<replace with bot api token>/setWebhook?url=<replace with our worker url>
- /start your bot
- use it 100% free

## `spotify-awesome-playlists`

This script allows me to track my playlists on Spotify categorized.

- Create app on https://developer.spotify.com/
- Deploy python bot on heroku


## `More coming soon`