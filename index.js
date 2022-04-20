window.onload = () => {
    new Glider (document.querySelector(".corousel-lista"), {
        slidesToShow: 3,
        dots: '#dots',
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        }
    })
}