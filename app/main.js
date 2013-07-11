/* require initialisation*/
require.config({
    'baseUrl': require.appConfig.host,
    'paths': {
        'backbone': 'lib/backbone-0.9.9.min',
        'app': 'app/app',
        'modules': 'app/modules',
        'underscore': 'lib/lodash',
        'waypoints': 'lib/waypoints',
        'resources': 'app/resources',
    },
    'shim': {
        'backbone': {
            'deps': [
                'lib/lodash-1.0.0.min',
                'lib/jquery-1.8.3.min',
            ],
            'exports': 'Backbone'
        },
        'app': {
            'deps': [
            ]
        }

    }
});

define(['app'],
    function(App) {
    App.initialize();
});
