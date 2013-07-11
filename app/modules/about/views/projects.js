/*global define*/

define(['backbone', 'text!modules/about/templates/projects.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
		'tagName'	: 'section',
		'className'	: 'section',
		'id': 'section3',
        'initialze'	: function(){
        },
        'render': function(){
            this.$el.html(_.template(tpl));
            return this;
        }
    });
});
