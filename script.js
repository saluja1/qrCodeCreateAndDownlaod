$('.generate-qr-code').on('click', function(){

	$('#qrcode').empty();

	$('#qrcode').css({
		'width' : $('.qr-size').val(),
		'height' : $('.qr-size').val()
	})

	$('#qrcode').qrcode({width: $('.qr-size').val(),height: $('.qr-size').val(),text: $('.qr-url').val()});
	var canvas = $('#qrcode canvas');
	var dataUrl = canvas[0].toDataURL();
	document.getElementById("downloadBtn").href=dataUrl;
	$(".downloadBtn").css({display: "block"});
});