const { version } = require('../package.json');

module.exports = {
    openapi: '3.0.2',
    info: {
        title: 'ingaia-fixed-price-api',
        version,
        description: 'api that returns the fixed price of the square meter'
    },
};
