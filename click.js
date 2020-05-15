function toPage(frompage, topage) {
    $(".menulisting#" + frompage).css("display", "none");
    $(".menulisting#" + topage).css("display", "flex");

    $('main').removeClass();

    switch (topage) {
        case 'main':
            $('main').addClass('bground1');
            break;
        case 'more':
            $('main').addClass('bground1');
            break;
        case 'guide':
            $('main').addClass('bground2');
            break;
        case 'custom':
            $('main').addClass('bground1');
            break;
        case 'adult':
            $('main').addClass('bground2');
            break;
        case 'entertainment':
            $('main').addClass('bground2');
            break;
        case 'boxoffice':
            $('main').addClass('boxoffice');
            break;
        case 'services':
            $('main').addClass('services');
            break;
        case 'interactive':
            $('main').addClass('interactive');
            break;
    }


}