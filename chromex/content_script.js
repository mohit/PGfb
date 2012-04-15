$(function() {
    jQuery('body').append('<div id="fb-root"></div>');
    jQuery('body').append('<div id="extensionListener">this is a invisible div</div>');
    
    // look for keyserver links
    var keyServerLinks = $('a[href^="http://keyserver"]');
    var iconUrl = chrome.extension.getURL("img/glyphicons_203_lock.png");
    var icon = document.createElement('img');
    icon.src = iconUrl;
    $(icon).attr('height', '10px');
    $(icon).css('padding-right', '5px');
    keyServerLinks.before(icon);
    keyServerLinks.each(function(index) {
      $(this).text(keyIdFromKeyserverUrl($(this).attr('href')));
    });
    
    function keyIdFromKeyserverUrl(url) {
      return '0x' + url.split('0x')[1];
    }

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


