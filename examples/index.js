
fixture `The web page in a different subdomain than the api`
    .page `http://ui.something.more.hammerhead.local:8080`;
import { RequestLogger, ClientFunction } from 'testcafe';

// eslint-disable-next-line no-undefined
export const logger = RequestLogger(undefined, {
    logRequestHeaders:     true,
    logResponseHeaders:    true,
    logRequestBody:        true,
    stringifyRequestBody:  true,
    logResponseBody:       true,
    stringifyResponseBody: true,
});

test('does not set the cookie from a different subdomain', async () => {
    const getCookies = ClientFunction(() => document.cookie);

    console.log('Response headers cookies being set:', logger.requests[1].response.headers['set-cookie']);
    console.log('Actual cookies:', await getCookies());
}).requestHooks(logger);
