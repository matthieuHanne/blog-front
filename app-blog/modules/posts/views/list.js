/*global define*/

define(['backbone', 'modules/posts/templates/list.tpl'], function(Backbone, tpl){
    'use strict';

    return Backbone.View.extend({
        'className': 'posts-list',
        'initialze': function(){
            this.collection.on('change', this.render, this);
        },
        'render': function(){
            this.$el.html(_.template(tpl, {'collection': this.collection}));
            return this;
        }
    });
});
