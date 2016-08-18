$(document).ready(function() {

    $("#owl").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        pagination:false,
        paginationSpeed : 400,
        singleItem:true,
        autoHeight : true,
        navigationText :["<i class='fa fa-chevron-left'></i>&nbsp;","&nbsp;<i class='fa fa-chevron-right'>     </i>"]
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});