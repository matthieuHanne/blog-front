/*global define*/

define(['backbone', 'text!modules/about/templates/mySelf.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
        'className': 'mySelf-section',
        'initialze': function(){
        },
        'render': function(){
            this.$el.html(_.template(tpl));
            return this;
        }
    });
});
