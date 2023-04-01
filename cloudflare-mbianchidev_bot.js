addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})


/* this is the payload I get from telegram
{
  "update_id": 890209244,
  "message": {
    "message_id": 69,
    "from": {
      "id": 233957924,
      "is_bot": false,
      "first_name": "laMDA",
      "last_name": "Bob",
      "username": "theUsername",
      "language_code": "en"
    },
    "chat": {
      "id": 233957924,
      "first_name": "laMDA",
      "last_name": "Bob",
      "username": "theUsername",
      "type": "private"
    },
    "date": 1680364350,
    "text": "Ciao"
  }
}
*/

async function handleRequest(request) {
  if (request.method === "POST") {
    const telegramPayload = await request.json() 
    if ('message' in telegramPayload) { 
      const chatId = telegramPayload.message.chat.id
      const text = "🇬🇧 I don't have a professional telegram account anymore, if you wish to get in touch with me visit mb-consulting.dev/all-links \n 🇮🇹 Non ho più un telegram professionale, visitate mb-consulting.dev/all-links per mettervi in contatto con me"
      const url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`
      const data = await fetch(url).then(resp => resp.json()) 
    }
    // just because I have to
    return new Response("OK")
  }
  return new Response("Error, only POST requests are allowed")
}
