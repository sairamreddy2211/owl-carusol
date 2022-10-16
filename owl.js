var owl = $('.owl-carousel');
$(document).ready(function () {
    $('.custome-carousel').owlCarousel({
        autoWidth: true,
        loop: true
    });
});


var allItems = document.getElementsByClassName('item');


$('.item').click(function (e) {
    [...allItems].map(el => {
        if (el.isSameNode(e.target)) {
            el.classList.toggle("activeItem");
        } else {
            el.classList.remove("activeItem");
        }
    })
})