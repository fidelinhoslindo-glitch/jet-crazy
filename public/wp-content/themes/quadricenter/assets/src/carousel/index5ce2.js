( function( $ ) {
  class SlickCarousel {
    constructor() {
      this.initiateCarousel();
    }

    initiateCarousel() {
      $( '.slide-destaque' ).slick( {
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        touchMove: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        arrows: false        
      } );
    }
  }

  new SlickCarousel();

} )( jQuery );


( function( $ ) {
  class SlickCarousel {
    constructor() {
      this.initiateCarousel();
    }

    initiateCarousel() {
      $( '.slide-destaque-mob' ).slick( {
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        touchMove: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true        
      } );
    }
  }

  new SlickCarousel();

} )( jQuery );




( function( $ ) {
  class SlickCarousel {
    constructor() {
      this.initiateCarousel();
    }

    initiateCarousel() {
      $( '.carrossel-todos' ).slick( {
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        touchMove: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
           {
            breakpoint: 1366,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
           {
            breakpoint: 1090,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      } );
    }
  }

  new SlickCarousel();

} )( jQuery );


( function( $ ) {
  class SlickCarousel {
    constructor() {
      this.initiateCarousel();
    }

    initiateCarousel() {
      $( '.lista-todos' ).slick( {
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        touchMove: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 4000,
            settings: "unslick",
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      } );
    }
  }

  new SlickCarousel();

} )( jQuery );


( function( $ ) {
  class SlickCarousel {
    constructor() {
      this.initiateCarousel();
    }

    initiateCarousel() {
      $( '.lista-todos-sn' ).slick( {
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        touchMove: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 4000,
            settings: "unslick",
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      } );
    }
  }

  new SlickCarousel();

} )( jQuery );


( function( $ ) {
  class SlickCarousel {
    constructor() {
      this.initiateCarousel();
    }

    initiateCarousel() {
      $( '.concessionarias-c' ).slick( {
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        touchMove: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,        
      } );
    }
  }

  new SlickCarousel();

} )( jQuery );