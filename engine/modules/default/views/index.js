/* Default main view*/

define(['backbone'], function(Backbone){
    'use strict';

    return new Backbone.View.extend({
        'id': 'main',
        'tagName': 'div',
        'initialize': function() {
            this.$el.append(
                $('<div>').addClass('header'),
                $('<div>').addClass('content')
            );
        },
        'render': function(content, target, trigger){
            if(content instanceof Backbone.View)
                content = content.$el;

            if(target)
                target = this.$el.children('.' + target);

            if(trigger)
                target.empty();

            target.append(content);

            return this;
        }
    });
});
