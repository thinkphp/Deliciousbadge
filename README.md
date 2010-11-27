Deliciousbadge
====================

This plugin MooTools allows you to create a badge for your website that loads content from the social bookmarking site del.icio.us. The badge will be relatively unobtrusive to visitors, 
and when it's clicked, it will expand to display the site owner's most recently added bookmarks. These bookmarks are loaded as the user cliks the link, so this list will always be up-to-date.
I'll use JavaScript to display the badge through the del.icio.us API - the interface through which del.icio.us allows its data to be queried and manipulated - and
we'll transfer the information from del.icio.us in JSON, a lightweight file format for transmitting text data.Thought its final appearance will depend on how you choose to style it, the completed badge will look something
like the one shown below. The only changes that you'll need to make to your site in order to display are:
- add a link to your bookmarks on del.icio.us
- include this plugin in the head of your document.

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

You can see the badge in action:

- [http://thinkphp.github.com/Deliciousbadge/](http://thinkphp.github.com/Deliciousbadge/)


### Requirements:

- MooTools Core 1.3