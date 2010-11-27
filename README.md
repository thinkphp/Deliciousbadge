Deliciousbadge
====================

This plugin MooTools allows you to create a badge for your website that loads content from the social bookmarking site del.icio.us. The badge will be relatively unobtrusive to visitors, 
and when it's clicked, it will expand to display the site owner's most recently added bookmarks. These bookmarks are loaded as the user cliks the link, so this list will always be up-to-date.

![Screenshot](http://farm6.static.flickr.com/5282/5212154342_dc9c8928a2_b.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.

        #HTML
        <script type="text/javascript" src="mootools-core.js"></script>
        <script type="text/javascript" src="Deliciousbadge.js"></script>

In your JS.

       #JS
       //when the document has finished loading
       window.addEvent('domready',function(){
                   new Deliciousbadge({badgeid: 'mydelicious',
                                       outputid: 'output1',
                                       amount: 12});
                   new Deliciousbadge({badgeid: 'yourdelicious',
                                       outputid: 'output2',
                                       amount: 12});
       });


In your HTML.

       #HTML
       <div class="yui-u first">
            <a href="http://del.icio.us/thinkphp" id="mydelicious">My Latest Bookmarks</a>
       </div>
       <div class="yui-u">
            <a href="http://del.icio.us/stoyan" id="yourdelicious">Your Latest Bookmarks</a>
      </div>

### Notes:

You can view in action:

- [http://thinkphp.github.com/Deliciousbadge/](http://thinkphp.github.com/Deliciousbadge/)


### Requirements:

- MooTools Core 1.3