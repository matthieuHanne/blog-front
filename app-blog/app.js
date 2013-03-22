/* App */

define(['backbone'],function(Backbone) {
    'use strict';

    var App = _.extend({
        'config': require.appConfig,
        'initialize': function(){
            require(
                ['modules/default/views/main', 'modules/posts/index'],
                function(DefaultViewsMain, Posts){
                    this.view = new DefaultViewsMain($('#main'));
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
