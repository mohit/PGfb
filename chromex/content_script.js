$(function() {
    jQuery('body').append('<div id="fb-root"></div>');
    jQuery('body').append('<div id="extensionListener">this is a invisible div</div>');

    var encrypt_button = '<label class="uiButton uiButtonLarge"><input type="button" value="Encrypt" id="encrypt_button"></label>';
    
    console.log('test content script');
        
    $('a[href*="action=composerDialog"]').click(function(event) {
        console.log('clicked New Message');
        setTimeout( function() {
            console.log('timer fired')
            $('.pop_content .dialog_buttons').prepend(encrypt_button);
        }, 1000);
        return true;
    });

    (function(d){
        var js, 
        id = 'facebook-jssdk', 
        ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    (function(d){
        var js, 
        id = 'pgpkeys', 
        ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = chrome.extension.getURL("js/fb_app.js");
        ref.parentNode.appendChild(js);
    }(document));
});


