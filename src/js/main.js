let hideAllBlock = () => {
    document.getElementsByClassName("class1")[0].style.display = 'none';
    document.getElementsByClassName("class2")[0].style.display = 'none';
    document.getElementsByClassName("class3")[0].style.display = 'none';
    document.getElementsByClassName("class4")[0].style.display = 'none';
    document.getElementsByClassName("class5")[0].style.display = 'none';
    document.getElementsByClassName("class6")[0].style.display = 'none';
    document.getElementsByClassName("class7")[0].style.display = 'none';
    document.getElementsByClassName("class8")[0].style.display = 'none';
    document.getElementsByClassName("class9")[0].style.display = 'none';
    document.getElementsByClassName("class10")[0].style.display = 'none';
    document.getElementsByClassName("class11")[0].style.display = 'none';
    document.getElementsByClassName("class12")[0].style.display = 'none';
}

let selectedClass = e => {
    hideAllBlock();
    document.getElementsByClassName(e.value)[0].style.display = 'block';
}


//change photo
const previewPhotos = document.querySelectorAll('.current-collection__previewPhoto');
const collections = document.querySelectorAll('.collection');

let changePhoto = (e) => {
    let targetIdd = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('id');

    const currentPhoto = document.getElementsByClassName('current-collection__currentPhoto')[targetIdd];
    const currentSrc = currentPhoto.getAttribute('src');

    let targetId = e.target.getAttribute('id');
    let regexp = /[\d]/;
    let newSrc = currentSrc.replace(regexp, targetId)

    currentPhoto.setAttribute('src', `${newSrc}`)
}

for (let photo of previewPhotos) {
    photo.addEventListener('click', changePhoto);
}

for (let i = 0; i < collections.length; i++) {
    collections[i].setAttribute('id', i)

    let currentCollection = collections[i].getElementsByClassName('current-collection__previewPhoto');
    for (u = 0; u < currentCollection.length; u++) {
        currentCollection[u].setAttribute('id', u + 1);
    }
}


//go top

jQuery(document).ready(function($) {
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});