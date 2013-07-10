/*global define*/

define(['backbone', 'text!modules/about/templates/menu.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
        'initialze': function(){
        },
        'events': {
			'click .btn-navbar' : 'toggleSidebar'
        },
        'render': function(){
            this.$el.html(_.template(tpl));
            return this;
        },
        'toggleSidebar': function(){
            $('html').toggleClass('expanded');
        }
    });
});
