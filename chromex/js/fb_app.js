console.log('now loading keys.js');

console.log(Env);

var insertPubKeyinProfile = function(){
    console.log(arguments);
    console.log('Env.fb_dtsg = ' + Env.fb_dtsg);
    console.log(jQuery('#extensionListener'));
/*
    var editProfileUrl = 'https://www.facebook.com/editprofile.php?sk=contact',
        data = {
            fb_dtsg: Env.fb_dtsg,
            website: 'www.saad.com'
        };

    jQuery(editProfileUrl,data,jQuery.noop);
*/
};
document.getElementById('extensionListener').addEventListener('insertPubKeyinProfile',insertPubKeyinProfile);

/*
console.log('now in FB.init');
FB.init({
    appId      : '109167509141145', // App ID
    channelUrl : 'https://saadmir.com/keys/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : false  // parse XFBML
});

FB.Event.subscribe('auth.statusChange', function(response) {
    console.log(response);
    if (response.authResponse) {
        console.log(' user is authd ');
        FB.api('/me', function(me){
            console.log(me.name);
            console.log(me);
        })
    } else {
        console.log(' user is not authd ');
        authme1();
        // user has not auth'd your app, or is not logged into Facebook
    }
});

var authme1 = function() {
FB.login(function(response) {
   if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        console.log(response);
        FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
        })
    } else {
        console.log('User cancelled login or did not fully authorize.');
    }
},{scope:'user_website,friends_website,read_friendlists'});
};


var authme = function() {
    FB.ui({
        method: 'apprequests',
        name: 'Facebook Dialogs',
        link: 'https://developers.facebook.com/docs/reference/dialogs/',
        picture: 'http://fbrell.com/f8.jpg',
        caption: 'Reference Documentation',
        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    },
    function(response) {
        if (response && response.post_id) {
            alert('you are in');
        } else {
            alert('what happened ?');
        }
    });
};
*/


