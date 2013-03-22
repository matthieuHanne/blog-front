/*global define */
define(['app', 'backbone', './model'],
function(App, Backbone, Model){
    'use strict';

    return Backbone.Collection.extend({
        'model': Model,
        'urlRoot': App.config.apiUrl + '/posts',
    });
});
