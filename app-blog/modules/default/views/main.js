/* Default main view*/

define(['backbone'], function(Backbone){
    'use strict';

    return Backbone.View.extend({
        'id': 'main',
        'tagName': 'div',
        'initialize': function(el) {
            this.setElement(el);
            this.$el.append(
                $('<div>').addClass('header'),
                $('<div>').addClass('content')
            );
        },
        'render': function(el, target){
            if(el instanceof Backbone.View)
                el = el.$el;

            target = target ? this.$el.find(target) : this.$el;
            target.append(el);

            return this;
        }
    });
});
