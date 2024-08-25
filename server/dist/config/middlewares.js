module.exports = [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                    'style-src': ["'self'", "'unsafe-inline'"],
                    'img-src': ["'self'", 'data:', 'blob:'],
                    'connect-src': ["'self'", 'ws:', 'wss:'],
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            origin: ['http://localhost:1337', 'http://localhost:3000', 'https://cdn.tailwindcss.com'],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
            keepHeaderOnError: true,
        },
    },
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
