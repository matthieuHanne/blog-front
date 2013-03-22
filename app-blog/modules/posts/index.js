/* Post index*/
define(['app', 'backbone'], function(App, Backbone) {
    'use strict';

    var Posts = _.extend({
        '': null,
        'initialize': function(){
            require(
                ['modules/posts/views/list', 'core/posts/collection'],
                function(PostsViewList, PostsCollection){
                }.bind(this)
            );
        },
        'Router': Backbone.Router.extend({
            'routes': {
                'blog': 'default',
                'posts/edit': 'posts/edit'
            },

            'default': function(){
                require([
                        'modules/posts/views/list',
                        'core/posts/collection'
                ], function(PostsViewList, PostsCollection){
                    var postsCollection = new PostsCollection();
                    var listView = new PostsViewList({'collection' : postsCollection});
                    App.view.render(listView.render());
                    //postsCollection.fetch({'success': function(){
                    //    var listView = new PostsViewList({'collection' : postsCollection});
                    //    App.view.render(listView.render());
                    //}
                });
            },

            'posts/edit': function(){
                App.view.render(PostView.render)
                alert('tata');
            }
        })

    });
    return Posts;
})
