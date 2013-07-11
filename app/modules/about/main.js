/* About module*/
define(['app', 'backbone', 'waypoints'], function(App, Backbone, Waypoints) {
	'use strict';

	var About = _.extend({
		'initialize': function(){
			// Set up views
			require(['modules/about/views/index', 'modules/about/views/menu','modules/about/views/mySelf'],function(AboutViewIndex,AboutViewMenu,AboutViewMySelf){
				App.view.render((new AboutViewIndex()).render(), '#container');
				App.view.render((new AboutViewMySelf()).render(),'#container');
				/*Menu at last, because he load his elements from */
				App.view.render((new AboutViewMenu()).render(), '#sidebar');
				//postsCollection.fetch({'success': function(){
				// Set up waipoints
				var section = $('section');
				section.waypoint(function (direction) {

					var datasection = $(this).attr('data-section');

					if (direction === 'down') {
						$('.navigation li[data-section="' + datasection + '"]').addClass('active').siblings().removeClass('active');
					}
					else {
						var newsection = (parseInt(datasection) - 1);
						$('.navigation li[data-section="' + newsection + '"]').addClass('active').siblings().removeClass('active');
					}

				});


				//}});
			});
		}.bind(this)
	});
	return About;
});
