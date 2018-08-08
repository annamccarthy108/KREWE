


$(document).ready(function(){
    

    scrollFunction ()

     // toggleButton()

     //     hidebutton()

     //     myFunction()


});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// $( 'a' ).hover(
//     function() { $( #card2 ).fadeTo( 'fast', '1'); },
//     function() { $( #card3 ).fadeTo( 'fast', '.4'); }
// );

// function hidebutton(){

// 	$('#cart_btn').on('click', function(){ 
// 		$("#card1").click(function(){
//         $("#card2").toggleButton();
        
//     });
// 	}
  

// }

// function toggleButton(){

//     $("#card2").click(function(){
//         $("#card2").toggle();
//     });

// }  

// private isSelected:string;

// //in the component define a function
// setColor(value){
//   this.isSelected=value;
// } 

// function myFunction() {
//     var x = document.getElementById("#card2");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }

// }

// function myFunction() {
    // var x = document.getElementById("card3");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }

// }

// $("#hide").click(function(){
//     $("cart_btn").hide();
// });

// $("#show").click(function(){
//     $("cart_btn").show();
// });