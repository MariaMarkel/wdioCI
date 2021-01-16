const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
    runner: 'local',
    maxInstances: 5,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless']
            },
        },
    ],
    baseUrl: 'https://stage.localcoding.us',
    services: ['geckodriver'],
    ...base,
    ...hooks
}