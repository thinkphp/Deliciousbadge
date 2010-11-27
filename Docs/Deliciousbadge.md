Class: Deliciousbadge {#Deliciousbadge}
=========================================================

This plugin MooTools allows you to create a badge for your website that loads content from the social bookmarking site del.icio.us. The badge will be relatively unobtrusive to visitors, 
and when it's clicked, it will expand to display the site owner's most recently added bookmarks. These bookmarks are loaded as the user cliks the link, so this list will always be up-to-date.
I'll use JavaScript to display the badge through the del.icio.us API - the interface through which del.icio.us allows its data to be queried and manipulated - and
we'll transfer the information from del.icio.us in JSON, a lightweight file format for transmitting text data.Thought its final appearance will depend on how you choose to style it, the completed badge will look something
like the one shown below. The only changes that you'll need to make to your site in order to display are:- add a link to your bookmarks on del.icio.us - include this plugin in the head of your document.

### Implements:

Options, Events

Deliciousbadge Method: constructor {#Deliciousbadge: constructor}
----------------------------------------------------------------------------------

### Syntax:

    new Deliciousbadge(options);

### Arguments:

1. options (*object*) An object containing the AutoTagger instance's options.


#### Options:

- badgeid (*String*)        - ID of the initial link. Allows us to change the value of
                              the ID attribute that we're adding to the initial link.
- outputid (*String*)       - ID of output list. Allows us to change the value of the ID
                              attribute to the generated list of bookmarks, respectively,
                              should we want to do so. 
- loadingMessage (*String*) - this message will be added to the link text as a 
                              span Element while the bookmarks are being retrieved
                              from the del.icio.us server. 
- amount (*Integer*)        - number of links that are to be shown.
- timeoutDelay (*Integer*)  - timeout in miliseconds that our script should wait before 
                              assuming that the server cannot be reached.


### Returns:

(*Object*) This instance of Deliciousbadge
