addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const imageUrl = url.searchParams.get('url')
  
  const response = await fetch(imageUrl)
  const contentType = response.headers.get('content-type')
  const body = await response.arrayBuffer()
  
  return new Response(body, {
    headers: {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    }
  })
}
