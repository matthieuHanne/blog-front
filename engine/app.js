/* App */

define(['backbone'],function(Backbone) {
    'use strict';

    var App = _.extend({
        'initialize': function(){
            require(
                ['modules/default/views/index', 'modules/posts/main'],
                function(DefaultViewsMain, Posts){
                    var postRouteur = new Posts.Router();
                    Backbone.history.start();

                    this.views = DefaultViewsMain;
                    return this;
                }.bind(this)
            );
        }
    });
    window.App = App;
    return App;

});
