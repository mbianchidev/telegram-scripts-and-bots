import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from telegram.ext import CommandHandler, Updater
from dotenv import load_dotenv

load_dotenv()
# set up Spotify API credentials
client_id = os.environ.get('SPOTIPY_CLIENT_ID')
client_secret = os.environ.get('SPOTIPY_CLIENT_SECRET')
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# define the /playlists command handler
def playlists(update, context):
    # get the username from the user's message
    username = update.message.text.split()[1]
    # fetch the user's public playlists from Spotify
    playlists = sp.user_playlists(username, limit=10)
    # create a list of playlist names
    playlist_names = [p['name'] for p in playlists['items']]
    # join the playlist names into a string
    playlist_text = "\n".join(playlist_names)
    # send the playlist names to the user on Telegram
    update.message.reply_text(f"Here are {username}'s public playlists:\n\n{playlist_text}")

# set up the Telegram bot
updater = Updater(token=os.environ.get('TELEGRAM_BOT_TOKEN'), use_context=True)
dispatcher = updater.dispatcher

# add the /playlists command handler to the dispatcher
playlists_handler = CommandHandler('playlists', playlists)
dispatcher.add_handler(playlists_handler)

# start the bot
updater.start_polling()
