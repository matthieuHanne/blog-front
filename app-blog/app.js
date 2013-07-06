/* App */

define(['backbone'],function(Backbone) {
    'use strict';

    var App = _.extend({
        'config': require.appConfig,
        'initialize': function(){
            require(
                ['modules/default/router'],
                function(DefaultRouter){
					DefaultRouter.initialize();
                    Backbone.history.start({ pushState: true });
                    return this;
                	/*
                    this.view = new DefaultViewsMain($('#main'));
                    var postRouteur = new Posts.Router();
                    */
                }.bind(this)
            );
        }
    });
    window.App = App;
    return App;

});
