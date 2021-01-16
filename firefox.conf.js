const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
    runner: 'local',
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox',
        },
    ],
    baseUrl: 'https://stage.localcoding.us',
    services: ['geckodriver'],
    ...base,
    ...hooks
}