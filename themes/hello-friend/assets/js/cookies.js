function cookie(name) { 
    let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name+'='))
    return c ? c.split('=')[1] : false; 
}

document.addEventListener("DOMContentLoaded", function() {
    var banner = document.querySelector('.cookie-consent');
    var acceptButton = document.querySelector('.cta-accept');

    if (cookie('cookie-accepted') === "true") {
        banner.classList.remove('slide-in-animation');
        banner.classList.add('hide-out');
    }

    acceptButton.addEventListener('click', function() {
        banner.classList.remove('slide-in-animation');
        banner.classList.add('hide-out');
        document.cookie = `cookie-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    });
});
