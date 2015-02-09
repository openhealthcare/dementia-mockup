/*
 * jQuery Extended Selectors plugin. (c) Keith Clark freely distributable under the terms of the MIT license.
 * Adds missing -of-type pseudo-class selectors to jQuery 
 * github.com/keithclark/JQuery-Extended-Selectors  -  twitter.com/keithclarkcouk  -  keithclark.co.uk
 */
(function(g){function e(a,b){for(var c=a,d=0;a=a[b];)c.tagName==a.tagName&&d++;return d}function h(a,b,c){a=e(a,c);if(b=="odd"||b=="even")c=2,a-=b!="odd";else{var d=b.indexOf("n");d>-1?(c=parseInt(b,10)||parseInt(b.substring(0,d)+"1",10),a-=(parseInt(b.substring(d+1),10)||0)-1):(c=a+1,a-=parseInt(b,10)-1)}return(c<0?a<=0:a>=0)&&a%c==0}var f={"first-of-type":function(a){return e(a,"previousSibling")==0},"last-of-type":function(a){return e(a,"nextSibling")==0},"only-of-type":function(a){return f["first-of-type"](a)&&
f["last-of-type"](a)},"nth-of-type":function(a,b,c){return h(a,c[3],"previousSibling")},"nth-last-of-type":function(a,b,c){return h(a,c[3],"nextSibling")}};g.extend(g.expr[":"],f)})(jQuery);

jQuery(document).ready(function($){

    // Virtual labels
    $('.inside-label').focus(function(){
    	
    	if ($(this).val() == $(this).attr('data-placeholder'))
    	{
    		$(this).val('');
    		$(this).css('color', $(this).attr('data-activecolor'));
    	}
    	
    });
    
    $('.inside-label').blur(function(){
    	
    	if ($(this).val() == '')
    	{
    		$(this).val($(this).attr('data-placeholder'));
    		$(this).css('color', $(this).attr('data-inactivecolor'));
    	}
    	
    });
    
    function clearLabels(form)
    {
        var selector = "";
        
        if (form != '')
        {
            selector = form + " .inside-label";
        }
        else
        {
            selector = ".inside-label";
        }
        
    	$(selector).each(function(){
    		if ($(this).val() == $(this).attr('data-placeholder'))
    		{
    			$(this).val('');
    			$(this).css('color', $(this).attr('data-activecolor'));
    		}
    	});
    }
    // Virtual labels


    // BX Slider
    $('.bxslider').bxSlider({adaptiveHeight:true, auto:true, pause:8000});
    // BX Slider

    /* autoHeight function */

    // You could wrap in an
        // immediately-Invoked Function Expression (IIFE) if you wanted to...
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array();
        
        function setConformingHeight(el, newHeight) {
            // set the height to something new, but remember the original height in case things change
            el.data("originalHeight", (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight")));
            el.height(newHeight);
        }
        
        function getOriginalHeight(el) {
            // if the height has changed, send the originalHeight
            return (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight"));
        }
        
        function columnConform() {
            // for landing page headers
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('.h-autoHeight').each(function() {
                // "caching"
                var $el = $(this);
                //$el.css({"background":"red"})
                // Need to look at the parent's position, as all paragraphs have the same relative top position
                var topPosition = $el.parent().position().top;
                
                if (currentRowStart != topPosition) {
                    // we just came to a new row.  Set all the heights on the completed row
                    for(var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
        
                } else {
        
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);       
                }
                // do the last row
                for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
            });
            rowDivs = new Array();
            // Repeat for home page images
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('.i-autoHeight').each(function() {
                // "caching"
                var $el = $(this);
                // Need to look at the parent's position, as all paragraphs have the same relative top position
                var topPosition = $el.parent().position().top;
                
                if (currentRowStart != topPosition) {
        
                    // we just came to a new row.  Set all the heights on the completed row
                    for(var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
        
                } else {
        
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);       
                }
                // do the last row
                for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
            });
            rowDivs = new Array();
            // Repeat for landing page paragraphs
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('.p-autoHeight').each(function() {
                // "caching"
                var $el = $(this);
                // Need to look at the parent's position, as all paragraphs have the same relative top position
                var topPosition = $el.parent().position().top;
                
                if (currentRowStart != topPosition) {
        
                    // we just came to a new row.  Set all the heights on the completed row
                    for(var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
        
                } else {
        
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);       
                }
                // do the last row
                for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
            });
            rowDivs = new Array();
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('.autoHeight').each(function() {
                // "caching"
                var $el = $(this);
                
                var topPosition = $el.position().top;
                
                if (currentRowStart != topPosition) {
                    // we just came to a new row.  Set all the heights on the completed row
                    for(var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
        
                } else {
        
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);       
                }
                // do the last row
                for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        
            });
        
        }

        $(window).resize(function() {
            columnConform();
        });
        
        // Dom Ready
        // You might also want to wait until window.onload if images are the things that
        // are unequalizing the blocks
        $(function() {
            columnConform();
        });


    
});

// Taken from HealthPress
function markExternalLinks() {
	var links = $('a[target="_blank"]');
	for(var i = 0; i < links.length; i++) {
		$(links[i]).addClass("external-link");
	}
	return true;	
}

function gaTrackDownloadableFiles() {
		
	var links = $('a');

	for(var i = 0; i < links.length; i++) {
		if (links[i].href.indexOf('.pdf') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'PDF', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.csv') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'CSV', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.doc') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'DOC', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.ppt') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'PPT', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.rtf') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'RTF', '"+links[i].href+"']);");
		} else if (links[i].href.indexOf('.xls') != "-1") {
			$(links[i]).attr("onclick","javascript: _gaq.push(['_trackEvent', 'Downloads', 'XLS', '"+links[i].href+"']);");
		}
	}

	return true;	

}

function showDownloadableFileIcons() {

	var links = $('a');

	for(var i = 0; i < links.length; i++) {
		if (links[i].href.indexOf('.pdf') != "-1") {
			$(links[i]).addClass("pdf-link");
		} else if (links[i].href.indexOf('.csv') != "-1") {
			$(links[i]).addClass("csv-link");
		} else if (links[i].href.indexOf('.doc') != "-1") {
			$(links[i]).addClass("doc-link");
		} else if (links[i].href.indexOf('.ppt') != "-1") {
			$(links[i]).addClass("ppt-link");
		} else if (links[i].href.indexOf('.rtf') != "-1") {
			$(links[i]).addClass("rtf-link");
		} else if (links[i].href.indexOf('.xls') != "-1") {
			$(links[i]).addClass("xls-link");
		}
	}

	return true;	
}
