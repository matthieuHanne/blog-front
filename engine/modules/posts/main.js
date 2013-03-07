/* Post main*/
define(['app', 'backbone'], function(App, Backbone) {
    'use strict';

    var Posts = _.extend({
        '': null,
        'initialize': function(){
            require(
                ['modules/posts/views/main', 'modules/posts/views/post'],
                function(PostsViersMain, PostsViewsPosts){
                }.bind(this)
            );
        },
        'Router': Backbone.Router.extend({
            'routes': {
                '': 'posts'
            },
            'posts': function(){
                console.log('toto');
            }
        })

    });
    return Posts;
});

