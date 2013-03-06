/* Post main*/

define(
    ['app', 'backbone', 'modules/posts/views/main', 'modules/posts/views/post'],
    function(App, Backbone, PostsViersMain, PostsViewsPost) {
        'use strict';

        var Post = _.extend({
            '': null,
            'initialize': function(){
                App.Router.route('/posts', 'postsList');
            }
        });
    }
);
