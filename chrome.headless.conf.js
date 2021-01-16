const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
    runner: 'local',
    maxInstances: 5,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu']
            }
        },
    ],
    baseUrl: 'https://stage.localcoding.us',
    services: ['chromedriver'],
    ...base,
    ...hooks
}