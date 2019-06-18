/// Popup Open - Close

(function () {
    var scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);
    $('body').append('<style>body.overlay-modal {margin-right: ' + scrollbarWidth + 'px; overflow: hidden;}</style>');
    }());

    $(document).on('click', '[data-modal]', function () {
        var el = $(this),
        name = el.data('modal');
        open_modal(name);
        return false;
    });

    $(document).on('click', '.js-modal-close', function () {
        close_modal();
        return false;
    });

    $(document).on('click', '.overlay', function() {
        close_modal();
        return false;
    });

    function open_modal(name) {
        close_modal();
        $('.overlay').addClass('overlay--active');
        $('body').addClass('overlay-modal');
      $('#' + name).addClass('popup--active');
    }

    function close_modal() {
      $('.overlay').removeClass('overlay--active');
      $('body').removeClass('overlay-modal');
        $('.popup--active').removeClass('popup--active');
    }

    $('.popup__form').on('submit', function() {
      open_modal($('.popup--success')[0].id);
      return false;
    });

    $(document).ready(function(){
      $('.popup__input--phone').inputmask("+7 (999) 999-99-99");
    });

    $('.main-nav__link--services').hover(function(){
      $('.services--wrapper').addClass('services--active');
      $('.overlay--action').addClass('overlay--active');
    }, function() {
      $('.services--wrapper').removeClass('services--active');
      $('.overlay--action').removeClass('overlay--active');
    });

    $('.services--wrapper').hover(function(){
      $('.services--wrapper').addClass('services--active');
      $('.overlay--action').addClass('overlay--active');
    }, function() {
      $('.services--wrapper').removeClass('services--active');
      $('.overlay--action').removeClass('overlay--active');
    });

    let mainNavList = document.querySelector('.main-nav__services');
    let servicesLink = document.querySelector('.services-link');

    servicesLink.addEventListener('click', function(evt) {
        evt.preventDefault();
        if(mainNavList.classList.contains('main-nav__services--active')) {
            mainNavList.classList.remove('main-nav__services--active');
        } else {
            mainNavList.classList.add('main-nav__services--active');
        }
    });

    //// Carousels

    $('.before-after').owlCarousel({
      loop:true,
      items: 11,
      margin: 20,
      mergeFit: true,
      responsiveClass:true,
      nav: true,
      navText: ["Prev", "Next"],
      responsive:{
          320:{
              items:1,
              nav: true,
              margin: 20,
          },
          768: {
              items:2,
              margin: 20,
          },
          1024:{
              items:3,
              margin: 20,
          }
        }
    });

    $('.gallery-carousel').owlCarousel({
        loop:true,
        items: 6,
        margin: 20,
        mergeFit: true,
        responsiveClass:true,
        nav: true,
        navText: ["Prev", "Next"],
        responsive:{
            320:{
                items:1,
                nav: true,
            }
          }
    });

    $('.certificate-carousel').owlCarousel({
        loop:true,
        items: 4,
        margin: 20,
        mergeFit: true,
        responsiveClass:true,
        nav: true,
        navText: ["Prev", "Next"],
        responsive:{
            320:{
                items:1,
                nav: true,
            }
          }
    });

  //// MAP

  ymaps.ready(init);

    var placemarks = [
        {
            latitude: '56.97988930535924',
            longitude: '40.996749694309095',
            hintContent: 'Стоматология Кранэкс',
            balloonContent: [
                '<div class="stomatology-img"><a href="#" class="stomatology-link map-info__link">«КРАНЭКС» на Лежневской</a><img src="img/map-photo.jpg" class="stomatology-photo" width="292" height="193"></div>'
            ]
        },
        {
            latitude: '57.00185949119298',
            longitude: '40.99284608311141',
            hintContent: 'Стоматология Кранэкс',
            balloonContent: [
                '<div class="stomatology-img"><a href="#" class="stomatology-link map-info__link">«КРАНЭКС» на Лежневской</a><img src="img/map-photo.jpg" class="stomatology-photo" width="292" height="193"></div>'
            ]
        },
        {
            latitude: '56.993696719069064',
            longitude: '40.962960178300825',
            hintContent: 'Стоматология Кранэкс',
            balloonContent: [
                '<div class="stomatology-img"><a href="#" class="stomatology-link map-info__link">«КРАНЭКС» на Лежневской</a><img src="img/map-photo.jpg" class="stomatology-photo" width="292" height="193"></div>'
            ]
        },
        {
            latitude: '56.97760105328097',
            longitude: '40.96138817472345',
            hintContent: 'Стоматология Кранэкс',
            balloonContent: [
                '<div class="stomatology-img"><a href="#" class="stomatology-link map-info__link">«КРАНЭКС» на Лежневской</a><img src="img/map-photo.jpg" class="stomatology-photo" width="292" height="193"></div>'
            ]
        },
    ],
    geoObjects = [];

    function init() {
        var map = new ymaps.Map('map', {
            center: [56.991697559317984,40.95314770456301],
            zoom: 13,
            controls: ['zoomControl','searchControl'],
            behaviors: ['multiTouch']
        });

        for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
                {
                    hintContent: placemarks[i].hintContent,
                    balloonContent: placemarks[i].balloonContent.join(''),
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/svg/map__pin.svg',
                    iconImageSize: [60, 80],
                    iconImageOffset: [-20, -60]
                });
            map.geoObjects.add(geoObjects[i]);
        }
        map.behaviors.disable('drag');
    }


    $(document).on('click', '.search-btn', function() {
      $('.main-nav__list').addClass('main-nav__list--active');
      $('.search').addClass('search--active');
      return false;
    });

    $(document).on('click', '.close-btn', function() {
      $('.main-nav__list').removeClass('main-nav__list--active');
      $('.search').removeClass('search--active');
      return false;
    });

    $('.up').click(function () {
      $('body, html').stop().animate({scrollTop: 0}, 500);
    });

    let openMenuBtn = document.querySelector('.open-menu');
    let closeMenuBtn = document.querySelector('.close-menu');
    let menuNav = document.querySelector('.main-nav');
    let overlay = document.querySelector('.overlay');

    openMenuBtn.addEventListener('click', function() {
        document.body.style.overflow = 'hidden';
        menuNav.classList.add('main-nav--active');
        closeMenuBtn.style.display = 'block';
        if(overlay.classList.contains('overlay--action')) {
            overlay.classList.remove('overlay--action');
        }
        overlay.classList.add('overlay--active');
    });

    closeMenuBtn.addEventListener('click', function() {
        document.body.style.overflow = 'auto';
        menuNav.classList.remove('main-nav--active');
        this.style.display = 'none';
        overlay.classList.remove('overlay--active');
    });

    overlay.addEventListener('click', function() {
        document.body.style.overflow = 'auto';
        menuNav.classList.remove('main-nav--active');
        this.classList.remove('overlay--active');
        closeMenuBtn.style.display = 'none';
    });

  /// Before - After dragger

  $('.dragger').each(function () {
    var dragger = $(this),
      oldImage = dragger.find('img').eq(0),
      newImage = dragger.find('img').eq(1),
      srcNewImage = newImage.attr('src');

    oldImage.wrap('<div class="dragger-start"></div>');
    newImage.wrap('<div class="dragger-end" style="background-image: url('+srcNewImage+')"></div>');

    dragger.append('<div class="drag"></div>');
    var drag = $('.drag', dragger);

    dragger.mousemove(function(e) {
      var pos = $(this).offset(),
        left = e.pageX - pos.left,
        width = dragger.width() - left;
      $('.dragger-end', dragger).width(width);
      drag.css({'left': left});
    }).mouseleave(function() {
      $('.dragger-end', dragger).animate({
        'width': '50%'
      }, 500);
      drag.animate({'left': '50%'}, 500);
    });
  });

  /// Reviews

  $('.reviews-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.test-slider'
  });
  $('.test-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.reviews-list',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 20024,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
