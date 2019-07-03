interface ListenHandler {
  (request: Request): Promise<Response> | Response;
}

export function listen(handler: ListenHandler) {
  addEventListener('fetch', (event: Event) => {
    const fetchEvent = event as FetchEvent;
    fetchEvent.respondWith(handler(fetchEvent.request));
  });
}
