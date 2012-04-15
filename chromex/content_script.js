$(function() {
    jQuery('body').append('<div id="fb-root"></div>');
    jQuery('body').append('<div id="extensionListener">this is a invisible div</div>');

    var encrypt_button = '<label class="uiButton uiButtonLarge"><input type="button" value="Encrypt" id="encrypt_button"></label>';
        
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
        
        if (!d.getElementById(id)) {
            js = d.createElement('script'); 
            js.id = id; 
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }
         
        id = 'fb_app'; 
        if (!d.getElementById(id)) {
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = chrome.extension.getURL("js/fb_app.js");
            ref.parentNode.appendChild(js);
        }
        
        id = 'jquery'; 
        ref = d.getElementsByTagName('script')[0];
        if (!d.getElementById(id)) {
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = chrome.extension.getURL("lib/jquery-1.7.2.min.js");
            ref.parentNode.appendChild(js);
        }
    
        var extensionListener = function(request,sender,response) {
            var extensionListener = d.getElementById('extensionListener'),
                evnt = d.createEvent('Event'); 
            evnt.initEvent('insertPubKeyinProfile',true,true); 
            extensionListener.innerHTML = request.pgpkey; 
            extensionListener.dispatchEvent(evnt);
        };
        chrome.extension.onRequest.addListener(extensionListener);
    }(document));


});


