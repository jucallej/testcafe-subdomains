const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader('set-cookie',
        [
            'test=test1; Domain=.something.more.hammerhead.local; Path=/; Expires=Wed, 25 May 2030 15:22:18 GMT; SameSite=Strict'
        ]);
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('x-dns-prefetch-control', 'off');
    res.setHeader('x-frame-options', 'SAMEORIGIN');
    res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains');
    res.setHeader('x-download-options', 'noopen');
    res.setHeader('x-content-type-options', 'nosniff');
    res.setHeader('x-xss-protection', '1; mode=block');
    res.setHeader('access-control-allow-origin', 'http://ui.something.more.hammerhead.local:8080');
    res.setHeader('vary', 'Origin');
    res.setHeader('access-control-allow-credentials', 'true');
    res.setHeader('connection', 'keep-alive');
    res.setHeader('keep-alive', 'timeout=5');
    res.end('Cookie should be set');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
