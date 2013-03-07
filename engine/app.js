/* App */

define(['backbone'],function(Backbone) {
    'use strict';

    var App = _.extend({
        'initialize': function(){
            define(
                ['modules/default/views/index', 'modules/posts/main'],
                function(DefaultViewsMain, Posts){
                    this.views = DefaultViewsMain;
                    var postRouteur = new Posts.Router();
                    Backbone.history.start();

                    return this;
                }.bind(this)
            );
        }
    });
    window.App = App;
    return App;

});
