$(function() {
    // Write jQuery code here to be executed when the page has loaded (and idled)
    $("input[type=password]").click(function() {
        var form = $(this).parent();
        while (form[0].tagName.toLowerCase() != "form") {
            form = form.parent();
        } 
        var domain = document.domain;
        var protocol = window.location.protocol;
        var action = form.attr("action").trim();
        if (action.substr("0,6") == "http://") {
            domain = action.split("/")[2];
            protocol = "http:";
        }
        if (action.substr("0,7") == "https://") {
            protocol = "https:";
        }
        console.log(protocol);
        console.log(domain);
        chrome.extension.sendRequest({"protocol":protocol, "domain":domain}, function(response) {
            // setTimeout("alert()", 5000);
            // setTimeout("reponse.notification.cancel()", 5000);
        });
    }) 
});