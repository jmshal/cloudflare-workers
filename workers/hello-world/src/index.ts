addEventListener('fetch', (event: Event) => {
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(hello(fetchEvent.request));
});

async function hello(request: Request) {
  return new Response('Hello World!', { status: 200 });
}
