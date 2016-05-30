$(document).ready(function() {

	// magic line
    $(function() {

        var $el, leftPos, newWidth;
            $mainNav2 = $("#main_navigation_list");
        
        $mainNav2.append("<li id='magic_line'></li>");
        
        var $magicLineTwo = $("#magic_line");
        
        $magicLineTwo
            .width($(".current-page-item").width())
            .height($mainNav2.height())
            .css("left", $(".current-page-item a").position().left)
            .data("origLeft", $(".current-page-item a").position().left)
            .data("origWidth", $magicLineTwo.width())
            .data("origColor", $(".current-page-item a").attr("rel"));
                    
        $("#main_navigation_list a").hover(function() {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLineTwo.stop().animate({
                left: leftPos,
                width: newWidth,
                backgroundColor: $el.attr("rel")
            })
        }, function() {
            $magicLineTwo.stop().animate({
                left: $magicLineTwo.data("origLeft"),
                width: $magicLineTwo.data("origWidth")
            });    
        });
        
        /* for IE */
        $(".current-page-item a").mouseenter();
        
    });

});