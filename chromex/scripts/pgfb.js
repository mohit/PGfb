$(function() {
    $('#encrypt-button').click(function () {
        $('#cipher-text').val(encrypt($('#plain-text').val(), $('#public-key').val()));
    });
  
    $('#decrypt-button').click(function () {
        $('#decrypted-plain-text').val(decrypt($('#cipher-text').val(), $('#private-key').val(), $('#password').val()));
    });
});

var min = 1;
var max = 2;
var current = min;

function updateIcon() {
  chrome.browserAction.setIcon({path:"icon" + current + ".;"});
  current++;
  if (current > max)
     current = min;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();

function encrypt(plainText, pubKey)
{
    var pu = new getPublicKey(pubKey);
    if(pu.vers == -1) return;
    if(pu.keyid.length != 16)
    {
        alert('Invalid Key Id');
        return;
    } 

    var keyType = -1;
    if(pu.type == 'ELGAMAL') keyType = 1;
    if(pu.type == 'RSA')     keyType = 0;
    if(keyType == -1)
    {
        alert('Unsupported Key Type');
        return;
    } 

    var startTime=new Date();

    var pubkey = pu.pkey.replace(/\n/g,'');
    cipherText = doEncrypt(pu.keyid, keyType, pubkey, plainText);
    var endTime=new Date();
    var secondsToEncrypt = (endTime.getTime()-startTime.getTime())/1000.0;
    return cipherText;
}

var dk = [];
var pk = [];
var qk = [];
var uk = [];
var seskey = '';


/* Doesn't work with keys generated on Mac OS X, not sure why. */
function decrypt(cipherText, privateKey, password)
{
    var startTime=new Date();
    var result = doDecrypt(pk, qk, dk, uk, privateKey);
    var plainText = doDecrypt(pk, qk, dk, uk, cipherText);
    var endTime=new Date();
    var secondsToDecrypt = (endTime.getTime()-startTime.getTime())/1000.0; 
    return plainText;
}