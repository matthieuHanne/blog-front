/* About module*/
define(['app', 'backbone'], function(App, Backbone) {
	'use strict';

	var About = _.extend({
		'initialize': function(){
			// Set up views
			require(['modules/about/views/index', 'modules/about/views/menu','modules/about/views/mySelf','modules/about/views/projects'],
			function(AboutViewIndex,AboutViewMenu,AboutViewMySelf,AboutViewProjects){
				App.view.render((new AboutViewIndex()).render(), '#container');
				App.view.render((new AboutViewMySelf()).render(),'#container');
				//get projects from API
				App.view.render((new AboutViewProjects()).render(),'#container');
				/*Menu at last, because he load his elements from */
				App.view.render((new AboutViewMenu()).render().initScroll(), '#sidebar');
				//postsCollection.fetch({'success': function(){
				// Set up waipointsi
				//
				//}});
			});
		}.bind(this)
	});
	return About;
});
