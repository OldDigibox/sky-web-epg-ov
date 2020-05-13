function toPage(frompage, topage) {
    $(".menulisting#" + frompage).css("display", "none");
    $(".menulisting#" + topage).css("display", "flex");
    $('main').toggleClass('bground2')
    $('custom').toggleClass('bground2')
}