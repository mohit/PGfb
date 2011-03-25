Send encrypted messages using PGP on Facebook

# Overview

The PGfb project started at InfoCamp Berkeley '11 to create a client side solution for encrypted communication on Facebook. 

PGfb consists of a Facebook application and a Chrome Extension. It uses the Javascript OpenPGP implementation by [Herbert Hanewinkel](http://www.hanewin.net/encrypt/) and stores public keys as part of users' Facebook profile, based on the *Social Keys* concept described in [Location Privacy via Private Proximity Testing](http://crypto.stanford.edu/~dabo/pubs/papers/locpriv.pdf).

# Current Goals

* Implement PGP encryption and decryption, and get it working in the Chrome Extension.

* Create a [Chrome extension](chromex) that uses the [Facebook Javascript SDK](http://developers.facebook.com/docs/reference/javascript/) to add and find public keys. 

* Save private key on the local machine. Send backup to the user as email, or just Copy+Paste.

* Annotate the *Send Message* dialog boxes in Facebook to add encrypt buttons. 

* The Chrome extension should have an authenticated mode, that decrypts encrypted messages on the Facebook view.

* ...
 
# License

Released under the [BSD License](http://creativecommons.org/licenses/BSD/)