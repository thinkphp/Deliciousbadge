Class: Deliciousbadge {#Deliciousbadge}
=========================================================

This plugin will analyse the text of a form field, run it through the Yahoo Term Extraction Web Service and provides a list of signifiant words or phrases as tags.

### Implements:

Options, Events

Deliciousbadge Method: constructor {#Deliciousbadge: constructor}
----------------------------------------------------------------------------------

### Syntax:

    new Deliciousbadge(options);

### Arguments:

1. options (*object*) An object containing the AutoTagger instance's options.


#### Options:

- badgeid (*String*)        - ID of link input
- outputid (*String*)       - ID of output list
- loadingMessage (*String*) - message to add to the link whilst loading
- amount (*Integer*)        - amount of links from del.icio.us
- timeoutDelay (*Integer*)  - timeout in miliseconds


### Returns:

(*Object*) This instance of Deliciousbadge
