/**
 * Process images in a post to:
 * a) Enable PhotoSwipe to launch upon clicking each image
 * b) Add alt text as a caption below the image
 */

var pswpElement = document.querySelectorAll('.pswp')[0];
var photoSwipeItems = [];

/* globals jQuery */
(function ($) {    
	var images = $.find("img");
	images.forEach(function(image, index) {
		// Process all img tags and add them to the PhotoSwipe collection.
		var dimRegex = /([0-9]+)x([0-9]+)/g;
		var imageDim = dimRegex.exec(image.src);
		photoSwipeItems.push({ src: image.src, w: imageDim[1], h: imageDim[2], title: image.alt });
		$(image).wrap("<div style='cursor: pointer;' onClick='new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, photoSwipeItems, {index: " + index + "}).init()'></div>"); // TODO: move to css
		
		// Add alt caption below the <img> tag
		var altText = image.getAttribute('alt');
		$(image).after('<div style="text-align: center; margin: -10px; font-size: 0.8em; font-style: italic;">' + altText + '</div>'); // TODO: move to css
    	});
})(jQuery);
