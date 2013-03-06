/* App */

define(['backbone'],function(Backbone) {
    'use strict';

    var App = _.extend({
        'initialize': function(){
            require(
                ['modules/default/views/main', 'modules/posts/main'],
                function(DefaultViewsMain, Posts){
                    this.Routeur = Backbone.Router.extend({
                        'routes': {
                            '': 'posts'
                        },
                        'posts': function(){
                            console.log('toto');
                        }
                    });
                    this.Routeur = new this.Routeur();
                    Backbone.history.start();

                    this.view = DefaultViewsMain;
                    return this;
                }.bind(this)
            );
        }
    });
    window.App = App;
    return App;

});
