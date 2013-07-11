/* About module*/
define(['app', 'backbone', 'waypoints'], function(App, Backbone, Waypoints) {
	'use strict';

	var About = _.extend({
		'initialize': function(){
			// Set up views
			require(['modules/about/views/index', 'modules/about/views/menu','modules/about/views/mySelf','modules/about/views/projects'],
			function(AboutViewIndex,AboutViewMenu,AboutViewMySelf,AboutViewProjects){
				App.view.render((new AboutViewIndex()).render(), '#container');
				App.view.render((new AboutViewMySelf()).render(),'#container');
				App.view.render((new AboutViewProjects()).render(),'#container');
				/*Menu at last, because he load his elements from */
				App.view.render((new AboutViewMenu()).render(), '#sidebar');
				//postsCollection.fetch({'success': function(){
				// Set up waipointsi
				//
				var section = $('section');
				section.waypoint(function (direction) {

					var sectionId = parseInt($(this).attr('id').substr($(this).attr('id').length-1));

					if (direction === 'down') {
						$('.navigation li[section="' + sectionId + '"]').addClass('active').siblings().removeClass('active');
					}
					else {
						$('.navigation li[section="' + (sectionId-1) + '"]').addClass('active').siblings().removeClass('active');
					}

				});


				//}});
			});
		}.bind(this)
	});
	return About;
});
