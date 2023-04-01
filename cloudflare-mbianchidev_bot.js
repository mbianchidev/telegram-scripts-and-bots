addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === "POST") {
    const telegramPayload = await request.json() 
    if ('message' in telegramPayload) { 
      const chatId = telegramPayload.message.chat.id
      const text = "🇬🇧 I don't have a professional telegram account anymore, if you wish to get in touch with me visit mb-consulting.dev/all-links \n 🇮🇹 Non ho più un telegram professionale, visitate mb-consulting.dev/all-links per mettervi in contatto con me"
      const url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`
      const data = await fetch(url).then(resp => resp.json()) 
      if (data.ok) {
        return new Response("OK")
      }
    }
    // just because I have to
    return new Response("Error during post")
  }
  return new Response("Error, only POST requests are allowed")
}