/* About module*/
define(['app', 'backbone'], function(App, Backbone) {
	'use strict';

	var About = _.extend({
		'initialize': function(){
			// Set up views
			require(['modules/about/views/index', 'modules/about/views/menu','modules/about/views/mySelf'],function(AboutViewIndex,AboutViewMenu,AboutViewMySelf){
					App.view.render((new AboutViewIndex()).render());
					App.view.render((new AboutViewMenu()).render());
					App.view.render((new AboutViewMySelf()).render());
					//postsCollection.fetch({'success': function(){
					//}});
				});
		}.bind(this)
		});
return About;
});
