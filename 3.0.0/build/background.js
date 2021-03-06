/*
combined files : 

kg/ks-timeline/3.0.0/base
kg/ks-timeline/3.0.0/background

*/
/**
 * User: g.gaokai@gmail.com
 * Date: 12-09-16
 * describe: timeline base 
 */

KISSY.add('kg/ks-timeline/3.0.0/base',function(S){
  function Base(){

  }
  Base.prototype = {
    get: function(key){
      var ATTRS = this.ATTRS;
      if( undefined === ATTRS[key] ){
        return undefined;
      }
      if( S.isObject( ATTRS[key] ) ){
        if( S.isFunction(ATTRS[key].value)){
          return ATTRS[key].value();
        }
        else{
          return ATTRS[key].value;
        }
      }
      else{
        return ATTRS[key];
      }
    }
    ,set: function(key, value){
      var ATTRS = this.ATTRS;
      if( undefined === ATTRS[key] ){
        ATTRS[key] = {};
        return (ATTRS[key].value = value);
      }
      if( S.isObject( ATTRS[key] ) ){
        if( undefined === ATTRS[key].setter ){
          return ATTRS[key].value = value;
        }
        else{
          return ATTRS[key].setter();
        }
      }
      else{
        return (ATTRS[key].value = value);
      }
    }
  }

  return Base;
});
/**
 * User: g.gaokai@gmail.com
 * Date: 12-09-16
 * describe: timeline background 
 */

KISSY.add('kg/ks-timeline/3.0.0/background',function(S, Base, TT){
  var $ = S.all;
  var ATTRS = {
    html: {
      /*
      value: '<div class="timenav-bg">\
                <div class="top-highlight"></div>\
                <div class="bottom-highlight"></div>\
                <div class="middle-line K_MiddleLine"></div>\
                <div class="timenav-indicator K_Indicator"><i></i></div>\
              </div>'
              */
      value: '<div class="timenav-bg">\
                <div class="middle-line K_MiddleLine"><i></i></div>\
              </div>'
    }
    ,bgBox: {
      value: null
    }
    ,middleLine: {
      value: null
    }
    ,indicator: {
      value: null
    }
  };

  function BG(config){
    this.config = config;

    this.ATTRS = S.clone(ATTRS);
    
    this._init();

  }


  var o = {
    
    _init: function(){
      var self = this, config = self.config;

      self.render();

      self.adjustStyle();

      self.monitorEvent();

    }

    ,render: function(){
      var self = this, config = self.config;
      self.set('bgBox', $( self.get('html') ));
      self.get('bgBox').appendTo(config.panel);

      self.set('middleLine', $('.K_MiddleLine', self.get('bgBox')));


      self.fire('uiReady');
    }

    ,adjustStyle: function(info){
      var self = this, config = self.config;

      //中间线
      self.get('middleLine').css('left', ( self.config.panel.width() - self.get('middleLine').width() )/2 - 1);

      self.fire('styleReload');
    }

    ,monitorEvent: function(){
      var self = this, config = self.config;
      $(window).on('resize', function(){
        self.adjustStyle();
      });
    }

  };

  S.augment(BG, Base, S.EventTarget, o);

  return BG;

},{
  attach: false,
  requires: ['./base', 'template']
});
