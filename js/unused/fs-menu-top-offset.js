var ofset_elem = $('.header__menu');
var hmdrg_menu = $('.hmbrg-menu');

function top_offset() {
    var top_offset = ofset_elem.offset().top;
    hmdrg_menu.css('top',top_offset);
}

top_offset();

$(window).on('resize', function () {
    top_offset();
});