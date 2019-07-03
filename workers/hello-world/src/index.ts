import { listen } from 'shared/listen';

listen(async function (request: Request) {
  return new Response('Hello World!', { status: 200 });
});
