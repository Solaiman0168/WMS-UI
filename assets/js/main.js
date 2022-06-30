
//navbar active js
$( '.navbar .navbar-nav a' ).on( 'click', function () {
    $( '.navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
});

// Search Button
$(document).ready (function () {
    $("#search-icon").click(function(){
        $(".search-box").toggle();
    });
});

//Mobile search button
// $(document).ready (function () {
//     $("#mbl-search-icon").click(function(){
//         $(".mbl-search-box").toggle();
//     });
// });


// Page Scroll top button start
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Scroll top button start




//Jquery image mouseover animation
jQuery(function( $ ){

    var $body=$("body"),
        $heroA=$("#tbo-img-sec-a img");
    TweenMax.set( $heroA, { transformStyle: 'preserve-3d'  });

    $body.mousemove(function(e) {
        var sxPos =  e.pageX / $body.width()  * 100 - 50;
        var syPos =  e.pageY / $body.height() * 100 - 50;
        console.log("x:" + sxPos + ", y:" + syPos);
        TweenMax.to( $heroA, 1, { rotationY: 0.05 * sxPos, rotationX: 0.20 * syPos, rotationZ: '-0.1', transformPerspective:500, transformOrigin:'center center' });

    });

});


