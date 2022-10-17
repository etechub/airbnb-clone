// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//       items:1,
//       loop:true,
//       nav:true,
//       dots:true,
//       autoplay:true,
//       autoplayTimeout: 3000,
//       autoplaySpeed: 1000,
//       smartSpeed: 1500,
//       autoplayHoverPause:true
//     });
//   });
var button = document.querySelector('.fa-bars')
var list = document.querySelector('.menu')
var icon = document.querySelector('.fa-heart')

var count = 0

button.addEventListener('click', function() {
    if (count == 0 ) {
        list.style.display = 'flex'
        count = 1
        return;
    }
    list.style.display = 'none'
    count = 0
    return
})
icon.addEventListener('click', function() {
    if (count == 0 ) {
        icon.style.color = 'red'
        count = 1
        return;
    }
    icon.style.color = 'rgba(0, 0, 0, 0.7)'
    count = 0
    return
})