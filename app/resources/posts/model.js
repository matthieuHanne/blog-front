/*global define */
define(['app', 'backbone'],
function(App, Backbone){
    'use strict';

    return Backbone.Model.extend({
        'urlRoot': App.config.apiUrl + '/post',
    });
});
