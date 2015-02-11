console.log('hello world');
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
console.log($.fn.jquery);

var AppView = Backbone.View.extend({

  el: '#container',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html("Hello World");
  }
});

 $(function() {
        new AppView(); });
//var AppView = new AppView();