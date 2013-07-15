/*global define*/

define(['backbone', 'text!modules/about/templates/mySelf.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
		'tagName'	: 'section',
		'className'	: 'section',
		'id': 'section2',
        'initialze'	: function(){
        },
        'events': {
			'click .service' : 'showTopic'
        },
        'render': function(){
            this.$el.html(_.template(tpl));
            return this;
        },
        'showTopic' : function(){
			console.log('im the topic');
			this.$el.html('<p>je marche</p>');
        } 
    });
});
