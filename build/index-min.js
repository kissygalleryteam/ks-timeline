/*!build time : 2015-04-11 1:08:33 PM*/
KISSY.add("kg/ks-timeline/3.0.0/base",function(a){function b(){}return b.prototype={get:function(b){var c=this.ATTRS;return void 0===c[b]?void 0:a.isObject(c[b])?a.isFunction(c[b].value)?c[b].value():c[b].value:c[b]},set:function(b,c){var d=this.ATTRS;return void 0===d[b]?(d[b]={},d[b].value=c):a.isObject(d[b])?void 0===d[b].setter?d[b].value=c:d[b].setter():d[b].value=c}},b}),KISSY.add("kg/ks-timeline/3.0.0/background",function(a,b,c){function d(b){this.config=b,this.ATTRS=a.clone(f),this._init()}var e=a.all,f={html:{value:'<div class="timenav-bg">                <div class="middle-line K_MiddleLine"><i></i></div>              </div>'},bgBox:{value:null},middleLine:{value:null},indicator:{value:null}},g={_init:function(){{var a=this;a.config}a.render(),a.adjustStyle(),a.monitorEvent()},render:function(){var a=this,b=a.config;a.set("bgBox",e(a.get("html"))),a.get("bgBox").appendTo(b.panel),a.set("middleLine",e(".K_MiddleLine",a.get("bgBox"))),a.fire("uiReady")},adjustStyle:function(a){{var b=this;b.config}b.get("middleLine").css("left",(b.config.panel.width()-b.get("middleLine").width())/2-1),b.fire("styleReload")},monitorEvent:function(){{var a=this;a.config}e(window).on("resize",function(){a.adjustStyle()})}};return a.augment(d,b,a.EventTarget,g),d},{attach:!1,requires:["./base","template"]}),KISSY.add("kg/ks-timeline/3.0.0/toolbar",function(a,b){function c(b){this.config=b,this.ATTRS=a.clone(e),this._init()}var d=a.all,e={html:{value:'<div class="timenav-toolbar">                <a hidefocus href="#" class="hide-timenav K_HideTimenav">hide</a>                <a hidefocus href="#" class="largen K_LargeRate">large</a>                <a hidefocus href="#" class="mini K_MiniRate">mini</a>                <a hidefocus href="#" class="left-scroll H_LeftScroll">left</a>                <a hidefocus href="#" class="right-scroll H_RightScroll">right</a>                <a hidefocus href="#" class="goto-last H_GotoLast">goto-last</a>              </div>'},cBox:{value:null},hideTimenav:{value:null},largeRate:{value:null},miniRate:{value:null},leftScroll:{value:null},rightScroll:{value:null}},f={_init:function(){{var a=this;a.config}a.render(),a.monitorEvent()},render:function(){var a=this,b=a.config;a.set("cBox",d(a.get("html"))),a.get("cBox").appendTo(b.panel),a.set("hideTimenav",d(".K_HideTimenav",a.get("cBox"))),a.set("largeRate",d(".K_LargeRate",a.get("cBox"))),a.set("miniRate",d(".K_MiniRate",a.get("cBox"))),a.set("leftScroll",d(".H_LeftScroll",a.get("cBox"))),a.set("rightScroll",d(".H_RightScroll",a.get("cBox"))),a.set("gotoLast",d(".H_GotoLast",a.get("cBox"))),a.fire("uiReady")},adjustStyle:function(a){{var b=this;b.config}b.fire("styleReload")},monitorEvent:function(){{var a=this;a.config}a.get("hideTimenav").on("click",function(b){b.halt(),a.fire("toggle")}),a.get("largeRate").on("click",function(b){b.halt(),a.fire("large")}),a.get("miniRate").on("click",function(b){b.halt(),a.fire("mini")}),a.get("leftScroll").on("click",function(b){b.halt(),a.fire("leftScroll")}),a.get("rightScroll").on("click",function(b){b.halt(),a.fire("rightScroll")}),a.get("gotoLast").on("click",function(b){b.halt(),a.fire("gotoLast")})}};return a.augment(c,b,a.EventTarget,f),c},{attach:!1,requires:["./base"]}),KISSY.add("kg/ks-timeline/3.0.0/main-content",function(a,b,c,d){function e(b){this.config=b,this.ATTRS=a.clone(g),this._init()}var f=a.all,g={html:{value:'<div class="timenav K_Timenav" style="left:0;">                <div class="time-points K_MarkerBox">                </div>                <div class="time-interval">                  <div class="time-interval-major K_IntervalBox"></div>                </div>                <div class="time-ruler K_TimeRuler"></div>              </div>'},tpl_marker:{value:'<div class="marker K_Marker" id="marker_{{id}}" style="left: {{left}}px;" data-req=\'{{data}}\'>                <div class="flag" style="top:{{top}}px">                  <div class="flag-content">                    <div class="thumbnail"></div>                    <h3>{{title}}</h3>                  </div>                </div>                <div class="dot"></div>                <div class="line">                  <div class="event-line"></div>                </div>              </div>'},tpl_interal:{value:'<div class="a-interval" style="left: {{left}}px;">{{time}}</div>'},cBox:{value:null},markerBox:{value:null},intervalBox:{value:null},timeRuler:{value:null},timenav:{value:null}},h={ATTRS:g,_init:function(){{var a=this;a.config}a.dragBufferAnim=null,a.isRating=!1,a.cdY=1,a.markerEles=[],a.activeMarkerIdx=null,a.render(),a.adjustStyle(),a.monitorEvent()},leftScroll:function(a){var b=this;b.stopAnim(),b.dragBufferAnim=new d(b.get("timenav")[0],{left:"+="+4*f(document.body).width()/5},{duration:1,easing:"easeOutStrong"}).run(),b.dragBufferAnim.on("step",function(){return b.isOverflow()?!1:void 0})},rightScroll:function(a){var b=this;b.stopAnim(),b.dragBufferAnim=new d(b.get("timenav")[0],{left:"-="+4*f(document.body).width()/5},{duration:1,easing:"easeOutStrong"}).run(),b.dragBufferAnim.on("step",function(){return b.isOverflow()?!1:void 0})},rigidResetOffset:function(a){var b=this;b.stopAnim(),void 0!=a.left&&b.get("timenav").css("left",a.left+"px"),void 0!=a.top&&b.get("timenav").css("top",a.top+"px")},dragBuffer:function(a){var b=this;b.stopAnim(),b.dragBufferAnim=new d(b.get("timenav")[0],{left:a.addLeft},{duration:a.duration/1e3,easing:"easeOutStrong"}).run(),b.dragBufferAnim.on("step",function(){return b.isOverflow()?!1:void 0})},isOverflow:function(){var a=this,b=a.config.trackConfig,c=0;if(b.minLeft>parseInt(a.get("timenav").css("left"),10))a.stopAnim(),c=b.minLeft;else{if(!(b.maxLeft<parseInt(a.get("timenav").css("left"),10)))return;a.stopAnim(),c=b.maxLeft}return a.dragBufferAnim=a.get("timenav").animate({left:c+"px"},{duration:.4,easing:"easeOutStrong"}),!0},stopAnim:function(){this.dragBufferAnim&&this.dragBufferAnim.stop&&this.dragBufferAnim.stop()},resetTimenavPos:function(a,b){var c=this;c.stopAnim(),b&&b===!1||(c.dragBufferAnim=c.get("timenav").animate(a,{duration:1,easing:"easeOutStrong"}))},render:function(b){var c=this,d=c.config;c.set("cBox",f(c.get("html"))),c.set("timenav",c.get("cBox")),c.set("markerBox",f(".K_MarkerBox",c.get("timenav"))),c.set("intervalBox",f(".K_IntervalBox",c.get("timenav"))),c.set("timeRuler",f(".K_TimeRuler",c.get("timenav"))),c.get("timenav").appendTo(d.panel),c.resetTimenavPos({left:parseInt(c.get("timenav").css("left"),10)+d.panel.width()/3}),b&&a.isArray(b)&&c.renderMarkers(b),c.fire("uiReady"),a.UA&&6==a.UA.ie&&(c.get("timenav").delegate("mouseenter",".K_Marker",function(a){f(this).addClass("hover")}),c.get("timenav").delegate("mouseleave",".K_Marker",function(a){f(this).removeClass("hover")}))},renderMarkers:function(b){for(var d=this,e=(d.config,b.length),g=0;e>g;++g){var h=f(c(d.get("tpl_marker")).render({id:b[g].time,title:b[g].title,data:KISSY.JSON.stringify(a.merge({count:g},b[g])),left:b[g].__left,top:(b[g].top||parseInt(55*Math.random(),10))+10}));h.appendTo(d.get("markerBox")),d.markerEles.push(h)}},renderInterval:function(a){var b=this,c=this.config.trackConfig,d=c.widthRate,e=1,f=1;d>=2e3?(e=1,f=1):2e3>d&&d>=1e3?(e=1,f=2):1e3>d&&d>=500?(e=1,f=3):500>d&&d>=250?(e=1,f=4):250>d&&d>=125?(e=1,f=6):125>d&&(e=2,f=12),a&&0!=a?b._styleInterval(e,f):b._renderInterval(e,f)},_renderInterval:function(a,b){var d=this,e=this.config.trackConfig;d.get("intervalBox").html("");for(var g=-1;g<e.endYear-e.beginYear+1;++g){var h=f(c(d.get("tpl_interal")).render({left:5*parseInt(g*e.widthRate/5,10)-2,time:e.beginYear+g-1+".12"}));h.appendTo(d.get("intervalBox")),Math.abs(g)%a!=0&&h.hide();for(var i=1;11>=i;++i){var j=f(c(d.get("tpl_interal")).render({left:5*parseInt((g*e.widthRate+e.widthRate/12*i)/5,10)-2,time:e.beginYear+g+"."+i}));j.appendTo(d.get("intervalBox")),i%b!=0&&j.hide()}}},_styleInterval:function(a,b){for(var c=this,d=this.config.trackConfig,e=f(".a-interval",c.get("intervalBox")),g=-1;g<d.endYear-d.beginYear+1;++g){var h=12*(g+1);e.item(h).animate({left:5*parseInt(g*d.widthRate/5,10)-2},.5),Math.abs(g)%a!=0?e.item(h).hide():e.item(h).show();for(var i=1;11>=i;++i)e.item(h+i).animate({left:5*parseInt((g*d.widthRate+d.widthRate/12*i)/5,10)-2},.5),i%b!=0?e.item(h+i).hide():e.item(h+i).show()}},gotoMarker:function(a,b,c){var d=this,e=d.config;d.get("timenav").all(".marker").removeClass("hover"),b.addClass("hover"),d.stopAnim();var f=a+parseInt(d.get("timenav").css("left"),10)-e.panel.width()/2+3;d.dragBufferAnim=d.get("timenav").animate({left:"-="+f},.5,"easeOutStrong")},adjustStyle:function(){var a=this,b=a.config.trackConfig;a.get("timenav").width(b.navWidth),a.get("intervalBox").width(b.navWidth),a.get("timeRuler").width(9999999).css("left",0-Math.abs(2*b.spacer))},rate:function(a){var b=this,c=b.config;if(1!=b.isRating){c.trackConfig.isScaling=!0,b.stopAnim();var d=f(".marker",b.get("timenav"));d.each(function(b){f(b).animate({left:parseInt(f(b).css("left"),10)*Math.abs(a)},.5)});var e=parseInt(b.get("timenav").css("left"),10),g=(b.get("timenav").width(),c.panel.width()),h=g/2-(0-e+g/2)*a;b.get("timenav").animate({left:h,width:"*="+a},.5,"easeNone",function(){b.adjustStyle(),b.isRating=!1,c.trackConfig.isScaling=!1}),b.renderInterval(!0)}},monitorEvent:function(){{var a=this;a.config}f(window).on("resize",function(){a.adjustStyle()}),a.get("timenav").on("click",function(b){b.halt();var c=f(b.target);if(c.hasClass("marker"))c=c;else{if(null==c.parent(".marker"))return!1;c=c.parent(".marker")}a.clickThisMarder(c)})},clickThisMarder:function(b){var c=this,d=a.JSON.parse(b.attr("data-req"));return c.gotoMarker(parseInt(b.css("left"),10),b),c.activeMarkerIdx==d.count?!1:(c.activeMarkerIdx=d.count,c.fire("marker",{data:d,target:b}),void c.setHash())},setHash:function(){return!1},prev:function(){var a=(this.activeMarkerIdx-1+this.markerEles.length)%this.markerEles.length||0;this.clickThisMarder(this.markerEles[a]),this.activeMarkerIdx=a},next:function(){var a=(this.activeMarkerIdx+1+this.markerEles.length)%this.markerEles.length||0;this.clickThisMarder(this.markerEles[a]),this.activeMarkerIdx=a},switchTo:function(a){return 0>a||a>=this.markerEles.length?!1:void this.clickThisMarder(this.markerEles[a])}};return a.augment(e,b,a.EventTarget,h),e},{attach:!1,requires:["./base","template","anim"]}),KISSY.add("kg/ks-timeline/3.0.0/dd",function(a,b){function c(a,b){return this.panel=a&&"string"==typeof a?d((/^\s*[#|.]/.test(a)?"":"#")+a):a,void 0==this.panel?(alert("[DD] panel is undefined"),!1):(this.__attr=b,void this._init())}var d=a.all,e=a.DOM,f={_init:function(){var a=this;a.dragEle=d(a.get("dragEle"),a.panel),a.set("dragInfoX",[]),a.set("dragInfoY",[]),a.set("dragInfoTime",[]),a.set("ddMask",null),a.panel.on("mousedown",function(b){b.halt(),b.button&&2==b.button||(a.set("ix",b.pageX),a.set("iy",b.pageY),a.set("tx",parseInt(a.dragEle.css("left"),10)),a.set("ty",parseInt(a.dragEle.css("top"),10)),a.set("dragInfoX",[]),a.set("dragInfoY",[]),a.set("dragInfoTime",[]),a._bindWindowEvent())})},_bindWindowEvent:function(){var a=this;d(document).on("mouseup",a._handleWindowMouseup,a),d(document).on("mousemove",a._handleWindowMousemove,a)},_cancelWindowEvent:function(){var a=this;d(document).detach("mouseup",a._handleWindowMouseup,a),d(document).detach("mousemove",a._handleWindowMousemove,a)},_handleWindowMousemove:function(a){a.preventDefault();var b=this;null==b.get("ddMask")&&(b.set("ddMask",e.create('<div class="timeline-dd-mask"></div>')),document.body&&document.body.appendChild(b.get("ddMask"))),b.get("dragInfoX").push(a.pageX),b.get("dragInfoY").push(a.pageY),b.get("dragInfoTime").push((new Date).getTime()),b.fire("moving",{ox:a.pageX-b.get("ix")+b.get("tx"),oy:a.pageY-b.get("iy")+b.get("ty")})},_handleWindowMouseup:function(a){var b=this;b._cancelWindowEvent(),b.get("dragInfoX").push(a.pageX),b.get("dragInfoY").push(a.pageY),b.get("dragInfoTime").push((new Date).getTime()),b.fire("mouseup",{buffer:b._calculateBuffer()}),e.remove(b.get("ddMask")),b.set("ddMask",null)},_calculateBuffer:function(){var a=this;if(a.get("dragInfoX").length<3)return void 0;for(var b,c={a:1e4,v:100,isLeft:!0},d=a.get("dragInfoX"),e=d.length,f=a.get("dragInfoTime"),g=1,h=d[e-1],i=f[e-1];e>g&&i-f[e-++g]<50;)if(2==g&&h-f[e-g]>500)return void 0;return e>=g?(t1=f[e-g+1],b=d[e-1]-d[e-g],c.v=b/(i-t1)*1e3,c.isLeft=b>0?!0:!1):(c.v=100,c.isLeft=d[e-1]>d[0]?!0:!1),c.absDistance=c.v*c.v/2/c.a,c.addLeft=c.isLeft?"+="+c.absDistance:"-="+c.absDistance,c.duration=Math.abs(parseInt(c.v/c.a*1e3,10)),c},set:function(a,b){return this.__attr[a]=b},get:function(a){return this.__attr[a]}};return a.augment(c,b,a.EventTarget,f),c},{attach:!1,requires:["./base"]}),KISSY.add("kg/ks-timeline/3.0.0/config",function(a){var b={myData:null,beginYear:null,endYear:null,maxInterval:null,widthRate:null,navWidth:null,spacer:null,realWidth:null,minLeft:null,maxLeft:null,rate:10,isScaling:!1,reg_songtime:/(\d{4})[^0-9]*(\d{1,2})?[^0-9]*(\d{1,2})?/,scale:200,minRate:3,maxRate:3,setData:function(a){this.myData=a;for(var b=0;b<this.myData.length;++b){var c=this.myData[b].time.match(this.reg_songtime);this.myData[b].time=""+c[1],c[2]&&(this.myData[b].time+=""+(parseInt(c[2],10)>9?parseInt(c[2],10):"0"+parseInt(c[2],10))),c[3]&&(this.myData[b].time+=""+(parseInt(c[3],10)>9?parseInt(c[3],10):"0"+parseInt(c[3],10)))}for(var d=0;d<this.myData.length;++d)for(var e=d+1;e<this.myData.length;++e)if(parseInt(this.myData[e].time,10)<parseInt(this.myData[d].time,10)){var f=this.myData[d];this.myData[d]=this.myData[e],this.myData[e]=f}return this},config:function(a){a.minRate&&(this.minRate=a.minRate),a.maxRate&&(this.maxRate=a.maxRate),a.scale&&(this.scale=a.scale)},largeRate:function(a){return this.rate=2*this.rate,this.initAll(a),this},miniRate:function(a){return this.rate=this.rate/2,this.initAll(a),this},initAll:function(a){return this.beginYear=parseInt(this.myData[0].time&&this.myData[0].time.match(this.reg_songtime)[1]),this.endYear=parseInt(this.myData[this.myData.length-1].time&&this.myData[this.myData.length-1].time.match(this.reg_songtime)[1])+1,this.maxInterval=this.endYear-this.beginYear,this.widthRate=this.rate/(1/1.2/this.scale),this.navWidth=parseInt(this.widthRate*this.maxInterval,10),this.spacer=parseInt(3*a.width()/3,10),this.realWidth=this.navWidth+2*this.spacer,this.minLeft=parseInt(0-this.navWidth+this.spacer/3,10),this.maxLeft=parseInt(this.spacer/3),this}};return b}),KISSY.add("kg/ks-timeline/3.0.0/control",function(a,b,c,d,e,f,g){function h(b){this.config=b,this.ATTRS=a.clone(k),this._init()}var i=a.all,j=/(\d{4})(\d{1,2})?(\d{1,2})?/,k={},l={_init:function(){var b=this,h=b.config;h.trackConfig=a.clone(g),h.trackConfig.setData(h.data),h.trackConfig.config({minRate:h.minRate,maxRate:h.maxRate,scale:h.scale}),h.trackConfig.initAll(h.panel),b.set("bg",new c(h)),b.set("toolbar",new d(h)),b.set("mainContent",new e(h)),b.set("dd",new f(h.panel,{dragEle:".K_Timenav"})),b.monitorEvent(),b.get("mainContent").renderMarkers(b.transAjaxData(h.data)),b.get("mainContent").renderInterval();var i=h.trackConfig;b.set("maxRate",Math.pow(2,i.maxRate-1)*i.rate),b.set("minRate",Math.pow(.5,i.minRate-1)*i.rate),b.get("dd").on("moving",function(a){b.get("mainContent").rigidResetOffset({left:a.ox})}),b.get("dd").on("mouseup",function(a){a.buffer&&b.get("mainContent").dragBuffer({duration:a.buffer.duration,addLeft:a.buffer.addLeft})})},transAjaxData:function(b,c){for(var d=this,e=[],f=0;f<b.length;++f)b[f].hidden&&1==b[f].hidden||e.push(a.merge(b[f],{__left:d.timeToPosLeft(b[f].time)}));return e},timeToPosLeft:function(a){var b=this,c=b.config,d=0,e=a.match(j),f=c.trackConfig.beginYear,g=0,h=0;return e[1]&&(f=e[1]),e[2]&&(g=e[2]),e[3]&&(h=e[3]),d=(f-c.trackConfig.beginYear+g/12+h/12/30)*c.trackConfig.widthRate},_timeToPosTop:function(a){},monitorEvent:function(){var a=this,b=a.config,c=b.trackConfig;i(document).on("resize",function(a){c.initAll(b.panel)});var d=!1,e=1;a.get("toolbar").on("toggle",function(a){if(1==d)return!1;if(0==e){var b=0;e=1}else if(1==e){var b=i(document.body).width();e=0}d=!0,i("#KT_Navigation").animate({left:b},1,"swing",function(){d=!1})}),a.get("toolbar").on("large",function(b){c.rate>a.get("maxRate")||c.isScaling===!0||(c.largeRate(this.config.panel),a.get("mainContent").rate(2))}),a.get("toolbar").on("mini",function(d){c.rate<a.get("minRate")||c.isScaling===!0||(c.miniRate(b.panel),a.get("mainContent").rate(.5))}),a.get("toolbar").on("leftScroll",function(b){a.get("mainContent").leftScroll()}),a.get("toolbar").on("rightScroll",function(b){a.get("mainContent").rightScroll()}),a.get("toolbar").on("gotoLast",function(c){a.get("mainContent").switchTo(b.data.length-1)}),a.get("mainContent").on("marker",function(b){a.fire("change",{data:b.data,target:b.target})}),a.get("mainContent")},prev:function(){this.get("mainContent").prev()},next:function(){this.get("mainContent").next()},switchTo:function(a){this.get("mainContent").switchTo(a)},resetWidth:function(a){this.get("mainContent").adjustStyle(),this.get("bg").adjustStyle()}};return a.augment(h,b,a.EventTarget,l),h},{attach:!1,requires:["./base","./background","./toolbar","./main-content","./dd","./config"]}),KISSY.add("kg/ks-timeline/3.0.0/index",function(a,b){function c(a){return new b(a)}a.all;return c},{requires:["./control"]});