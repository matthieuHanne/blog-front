/*global define*/

define(['backbone', 'text!modules/about/templates/index.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
        'className': 'index-section',
        'initialze': function(){
        },
        'render': function(){
            this.$el.html(_.template(tpl));
            return this;
        }
    });
});
