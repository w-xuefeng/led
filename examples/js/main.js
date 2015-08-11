/*!
 * @project : 1438668322457
 * @version : 1.0.0
 * @author  : lixinliang
 * @update  : 2015-08-11 3:04:21 pm
 */
seajs.use(["$","arale/switchable/1.0.2/slide","arale/autocomplete/1.3.2/autocomplete","arale/autocomplete/1.3.2/filter"],function($,Slide,Autocomplete,Filter){window.$=$,$(function(){new Slide({element:'[data-role="slide-console"]',classPrefix:null,activeTriggerClass:"is-active",autoplay:!1,effect:"scrollx"}).render();var dis="is-disable",cvs=$("[data-role=led-content]"),log=function(msg){this.append(msg);var val=this.height()-this.parent().height();this.parent().scrollTop(val>0?val:0)}.bind($(".ui-log p")),led=new LED({width:980,height:490,action:"YY UED"}).on("init",function(){log("init successful<br>")}).on("action",function(command){log(command.current+"<br>")}),ac=new Autocomplete({trigger:".btn-input",dataSource:["#count","#countdown","#rectangle","#circle","#time","#icon"],selectFirst:!0,filter:function(data,val){var ret=val.split("|");return Filter.startsWith(data,ret.pop())}}).render().on("indexChanged",function(current){if(!(this.items.length<4)&&ac.element.is(":visible")){var parent=this.items.parent().parent(),itemHeight=this.items.eq(1).offset().top-this.items.eq(0).offset().top,parentOffset=parent.scrollTop(),currentOffset=current*itemHeight;parentOffset>currentOffset?parent.scrollTop(current*itemHeight):currentOffset>parentOffset+2*itemHeight&&parent.scrollTop((current-2)*itemHeight)}});ac.input.setValue=function(val){var ret=this.get("element").val().split("|");ret.pop(),ret.push(val),this.get("element").val(ret.join("|"))};var btns=$(".ui-btn").not(".btn-init").not(".btn-destroy").not(".btn-start"),btn=$(".btn-start"),input=$(".btn-input");$(".btn-init").on("click",function(){$(this).hasClass(dis)||(cvs.css("opacity",1),led.init(),$(this).addClass(dis).siblings().removeClass(dis),btns.removeClass(dis),input.attr("readonly",!1))}),$(".btn-destroy").on("click",function(){$(this).hasClass(dis)||(cvs.css("opacity",0),led.destroy(),$(this).addClass(dis).siblings().removeClass(dis),btns.addClass(dis),btn.addClass(dis),input.attr("readonly",!0))}),$(".btn-stop").on("click",function(){$(this).hasClass(dis)||(led.stop(),$(this).addClass(dis).siblings().removeClass(dis))}),$(".btn-start").on("click",function(){$(this).hasClass(dis)||(led.start(),$(this).addClass(dis).siblings().removeClass(dis))}),$(".btn-mess").on("click",function(){$(this).hasClass(dis)||led.shuffle()}),$(".btn-reset").on("click",function(){$(this).hasClass(dis)||led.reset()}),$(".btn-clear").on("click",function(){$(this).hasClass(dis)||led.clear()}),$(".btn-input").on("keydown",function(e){setTimeout(function(){ac.element.is(":visible")?input.addClass("is-active"):input.removeClass("is-active")},25),13==e.keyCode&&""!==$(this).val()&&(input.hasClass("is-active")||(led.simulate($(this).val()),$(this).val("")))}),$(".ui-console").addClass("is-active"),btns.addClass(dis),btn.addClass(dis),input.attr("readonly",!0)})});