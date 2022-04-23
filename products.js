var i = 40
var productId = document.getElementById('productId')

productId.innerHTML +=
'<div class="portfolio__content grid swiper-slide"><img src="' +
'perfil.png' +
'" alt="" class="portfolio__img" /><div class="portfolio__data"><h3 class="portfolio__title">Funda para celular</h3><p class="portfolio__description">$180</p><a href="https://api.whatsapp.com/send?phone=5213322266770&text=Hola, vengo de RAH Code, quisiera una funda personalizada' +
'" class="button button--flex button--small portfolio__button">Enviar mensaje<i class="uil uil-whatsapp button__icon"></i></a></div>'

while (i > 0) {
  productId.innerHTML +=
    '<div class="portfolio__content grid swiper-slide"><img src="' +
    'product' +
    i +
    '.jpg' +
    '" alt="" class="portfolio__img" /><div class="portfolio__data"><h3 class="portfolio__title">Funda para celular</h3><p class="portfolio__description">$180</p><a href="https://api.whatsapp.com/send?phone=5213322266770&text=Hola, vi esto en RAH Code https://good-idea.rahcode.com/' +
    'product' +
    i +
    '.jpg' +
    '" class="button button--flex button--small portfolio__button">Enviar mensaje<i class="uil uil-whatsapp button__icon"></i></a></div>'
  i--
}
