/* Post index*/
define(['app', 'backbone'], function(App, Backbone) {
    'use strict';

	var Router = {
		'initialize': function(){
			var routes = {
				'routes':{ 
					'': 'index',
					'blog': 'blog',
					'about': 'about',
				},
				
				'index': function(){console.log('index route');},
				'about': function(){console.log('about route');},
				'blog': function(){console.log('blog route');}
			};
		new (Backbone.Router.extend(routes))();
	}}; 
    return Router;
});
/*
            'default': function(){
                require(['modules/posts/views/list', 'core/posts/collection'], function(PostsViewList, PostsCollection){
                    var postsCollection = new PostsCollection();
                    postsCollection.fetch({'success': function(){
                        var listView = new PostsViewList({'collection' : postsCollection});
                        App.view.render(listView.render());
                    }});
                });
            },
            'posts/edit': function(){
                App.view.render(PostView.render, $('.content'));
                alert('tata');
            }
*/


