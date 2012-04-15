Friendly distribution and management of PGP public keys via Facebook

# Overview

The PGfb project started at InfoCamp Berkeley '11 to create a client side solution for encrypted communication on Facebook; at the WSJ Data Transparency hackathon (April 2012) it was continued as a project for PGP key distribution via Facebook profiles and other social networks.

PGfb consists of a Facebook application and a Chrome Extension. It uses the Javascript OpenPGP implementation by [Herbert Hanewinkel](http://www.hanewin.net/encrypt/) and stores public keys as part of users' Facebook profile, based on the *Social Keys* concept described in [Location Privacy via Private Proximity Testing](http://crypto.stanford.edu/~dabo/pubs/papers/locpriv.pdf) and [SocialKeys: Transparent Cryptography via Key Distribution over Social Networks](http://www.iab.org/wp-content/IAB-uploads/2011/03/arvind_narayanan.pdf).

# Current Goals

* Implement PGP encryption and decryption, and get it working in the Chrome Extension.

* Create a [Chrome extension](chromex) that uses the [Facebook Javascript SDK](http://developers.facebook.com/docs/reference/javascript/) to add and find public keys. 

* Save private key on the local machine (localStorage? direct to a file?). Send backup to the user as email, or just Copy+Paste.

* ...

# Screenshots

<img src="https://github.com/npdoty/socialkeys/raw/master/screenshots/facebook-view.png">

Extension automatically highlights public key links visible on Facebook profiles.


<img src="https://github.com/npdoty/socialkeys/raw/master/screenshots/extension-snap.png">

The extension's own UI helps with submitting your public key to a keyserver.