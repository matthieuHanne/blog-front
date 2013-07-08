/*global define*/

define(['backbone', 'text!modules/about/templates/menu.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
        'className': 'menu-section',
        'initialze': function(){
        },
        'render': function(){
            this.$el.html(_.template(tpl));
            return this;
        }
    });
});
