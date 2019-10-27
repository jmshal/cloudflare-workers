import { listen } from 'shared/listen';

listen(async function (request: Request) {
  return Response.redirect('https://github.com/jmshal', 307);
});
