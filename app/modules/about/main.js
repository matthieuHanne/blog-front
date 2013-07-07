/* About module*/
define(['app', 'backbone'], function(App, Backbone) {
	'use strict';

	var About = _.extend({
		'initialize': function(){
			require([
				'modules/about/views/index'
				,'modules/about/views/mySelf'
				],
				function(AboutViewIndex, AboutViewMySeld){
					// Set up views
					require(['modules/about/views/index'/*, 'core/posts/collection'*/], function(AboutViewIndex/*, PostsCollection*/){
							var indexView = new AboutViewIndex(/*{'collection' : postsCollection}*/);
							App.view.render(indexView.render());
						//var postsCollection = new PostsCollection();
						//postsCollection.fetch({'success': function(){
						//}});
					});
				}.bind(this)
				);
		}
	});
	return About;
})
