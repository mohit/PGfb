$(function() {
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
});