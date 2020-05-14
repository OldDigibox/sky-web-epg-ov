function toPage(frompage, topage) {
    $(".menulisting#" + frompage).css("display", "none");
    $(".menulisting#" + topage).css("display", "flex");
    $('adult').toggleClass('bground2')
}