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

var Deliciousbadge = new Class({
    /* Implements */
    Implements: [Options, Events],
    /* set options configuration public */
    options: {
         /* link ID */
         badgeid: 'delicious',
         /* output list ID */
         outputid: 'deliciouslist',
         /* message to add to the link whilst loading ... */
         loadingMessage: ' (Loading...)',
         /* amount of links from del.icio.us */
         amount: 10,
         /* timeout in miliseconds */
         timeoutDelay: 1000
    },
    /*
     * constructor of class
     * @public
     */
    initialize: function(options) {
         /* call merge current options with extra options */
         this.setOptions(options);
         /* get element that was clicked */
         this.o = document.id(this.options.badgeid);
         /* checks for element and element's href */
         if(this.o && this.o.href) {
              //attach this.o event handler for click link
              this.o.addEvent('click',this._callData.bind(this));
         }
    },

    /* 
     * Once the JSON call executes successfully, it sends the object containing our bookmarks to this
     * method, which will call 'displayData', forwarding the object.
     * 
     * @public
     */     
    retrieveData: function(o){
        //stops timeout and sends the JSON dataset o
        $clear(this.to); 
        this._displayData(o);
    },    
    /* 
     * Follows the link if there was a 404
     * @private
     */
    _failure: function() {      
        $clear(this.to);
        window.location = this.o.get('href');
    },

    /*
     * Assembles the JSON call and initiates the timeout.
     * This function will generate the script tag to retrieve JSON object. 
     * It also contains the logic for giving users who click the link some visual
     * feedback that indicates that something is indeed happening. 
     * 
     * @private
     */
    _callData: function(event) {
        if(!$(this.options.outputid)) {
                  /* we don't want to follow the link, so stop propagation */
                  event.stop();
                 /* We need to begin the timeout that will cancel our attempts at establishing a connection 
                  * after a certain amount of time has passed. We store this timeout in a options, so that 
                  * we can stop the countdown once the data has been successfully retrieved.
                  */
                  this.to = window.setTimeout(function(){this._failure()}.bind(this), this.options.timeoutDelay);
                 /* We'll need to know the username of the del.icio.us account from which we're retrieving bookmarks */
                  var user = event.target.href.replace(/.*\//g,'');
                 /* create a span element, add the "loading.." message as a text node to this span and 
                  * insert the span into out document as a new child to the original link.
                  */ 
                  msg = new Element('span').set('text', this.options.loadingMessage).inject(this.o); 
                  /* it's time to initiate contact with the del.icio.us server so that we can retrieve our bookmarks data.
                   * we create a new script element, assemble the correct URL for calling the del.icio.us JSON API, set the
                   * the value of our new script element's src attribute to equal that URL, and add element as a new child node
                   * to the head element of the document. 
                   */
                  var seeder = new Element('script');     
                  var srcurl = 'http://del.icio.us/feeds/json/'+ user +'?count='+ this.options.amount+'&callback=callbackdelbadge';
                  seeder.setProperties({'type':'text/javascript','src': srcurl}); 
                  seeder.inject(document.head);
                     window.callbackdelbadge = function(dataset) {                      
                           this.retrieveData(dataset);
                     }.bind(this);
         }//end if                       
    },
    /*
     * Assembles the list of links from the JSON dataset.
     * we want to display the bookmarks as a list, we need to create a new unordered list element
     * and assign it an ID (defined in options) to allow for styling.  
     * @param o (Array of Object) the data from del.icio.us service 
     *
     * @private
     */
    _displayData: function(o) {
          var output = new Element('ul');
              output.set('id', this.options.outputid);
            /* loop through each of the entries in the data array 
             * for each entry we create a list item and a link for storing a bookmark 
             * now, each array item is an object with the properties 
             *      'd' (containing the description of the bookmark)
             *      'u' (containing the URL). We grab both of these properties for each object.      
             */
            for(var i=0;o[i];i++) {
                  li = new Element('li');
                  entryLink = new Element('a').set('html', o[i].d);
                  entryLink.setProperty('href', o[i].u);
                  //add the link to the list
                  entryLink.inject(li);  
                  //add the list item to the ul
                  li.inject(output);       
            }//endfor
            /* add the list to the DOM right after to the original link */
            output.inject(this.o,'after');
            /* remove the loading message */
            this.o.removeChild(this.o.lastChild);
            /* moves the focus from the original link to the first bookmark. */
            output.getElements('a')[0].focus();
    }.protect()
});