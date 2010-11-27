/*
---
description: This plugin MooTools allows you to create a badge for your website that loads content from the social bookmarking site del.icio.us. The badge will be relatively unobtrusive to visitors, and when it's clicked, it will expand to display the site owner's most recently added bookmarks. These bookmarks are loaded as the user cliks the link, so this list will always be up-to-date.

authors:
  - Adrian Statescu (http://thinkphp.ro)

license:
  - MIT-style license

requires:
  core/1.3: '*'

provides:
  - Deliciousbadge
...
*/

var Deliciousbadge=new Class({Implements:[Options,Events],options:{badgeid:"delicious",outputid:"deliciouslist",loadingMessage:" (Loading...)",amount:10,timeoutDelay:1000},initialize:function(options){this.setOptions(options);this.o=document.id(this.options.badgeid);if(this.o&&this.o.href){this.o.addEvent("click",this._callData.bind(this))}},retrieveData:function(o){$clear(this.to);this._displayData(o)},_failure:function(){$clear(this.to);window.location=this.o.get("href")},_callData:function(event){if(!$(this.options.outputid)){event.stop();this.to=window.setTimeout(function(){this._failure()}.bind(this),this.options.timeoutDelay);var user=event.target.href.replace(/.*\//g,"");msg=new Element("span").set("text",this.options.loadingMessage).inject(this.o);var seeder=new Element("script");var srcurl="http://del.icio.us/feeds/json/"+user+"?count="+this.options.amount+"&callback=callbackdelbadge";seeder.setProperties({type:"text/javascript",src:srcurl});seeder.inject(document.head);window.callbackdelbadge=function(dataset){this.retrieveData(dataset)}.bind(this)}},_displayData:function(o){var output=new Element("ul");output.set("id",this.options.outputid);for(var i=0;o[i];i++){li=new Element("li");entryLink=new Element("a").set("html",o[i].d);entryLink.setProperty("href",o[i].u);entryLink.inject(li);li.inject(output)}output.inject(this.o,"after");this.o.removeChild(this.o.lastChild);output.getElements("a")[0].focus()}.protect()});