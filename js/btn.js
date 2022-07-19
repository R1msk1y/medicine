$(function(){
$("[data-list]").on("click", function(event){
event.preventDefault();

let sectionId = $(this).data(`list`);
let elementPosition = $(sectionId).offset().top;

$("html, body").animate({
scrollTop: elementPosition
},700);

});





});