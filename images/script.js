

// Mobile Menu iteam select
$(document).ready(function () {

    $(".burger").click(function(){
        $(".mobile_menu_dropdown").toggleClass("active");
        $(".all_toggles").toggleClass("active");
        $("html").toggleClass("modal-open");
    });
    $(".burger").click(function(){
        $(this).toggleClass("toggle");
    });

    $(".mbl_select_iteam_in").click(function () {
        $(this).toggleClass("icon").siblings().slideToggle(300);
    })
});



$(document).ready(function () {

    // foe swiper slider
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Default parameters
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            }
        }
      });



    //   for main nav sticky
    $(document).on('scroll', function() {
        var scrollPos = $(this).scrollTop();

        if( scrollPos > 200 ) {
            $('header').addClass('navbar-home');
        }

        else {
            $('header').removeClass('navbar-home');
        }
    });	

    // ==============search-modal
    $(".search-ic span").click(function () {
        $(".search-box-area").addClass("active-area");
        $("html").addClass("modal-open");
        $(".search-container").addClass("search-container-active");
    });

    $(".cross").click(function () {
        $(".search-box-area").removeClass("active-area");
        $("html").removeClass("modal-open");
        $(".search-container").removeClass("search-container-active");
    });
///////////////////
    $(".forgot-pass").click(function () {
        $(".forgot-pass-area").addClass("active-area");
        $("html").addClass("modal-open");
        $(".forgot-pass-container").addClass("forgot-pass-container-active");
    });

    $(".cross").click(function () {
        $(".forgot-pass-area").removeClass("active-area");
        $("html").removeClass("modal-open");
        $(".forgot-pass-container").removeClass("forgot-pass-container-active");
    });
    // ============main-slider
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // our suggestion slider======

    $('.suggestion-slider-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
                nav: true,
            }
        }
    });
    // product cart details slider
    $('.product-cart-detail-slider-active ').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // fragrance slider
    $('.fragrance-slider-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // makeup slider    
    $('.makeup-slider-active').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    // best seller slider
    $('.best-seller-slider-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        autoplay: false,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('.product-of-the-week-slider-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: false,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 8000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // fragrance-best-seller-slider
    $('.fragrance-best-selelr-slider-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: false,
        responsiveClass: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    // // fragrance-best-deal
    $('.fragrance-best-deal-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: false,
        responsiveClass: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 4,
            }
        }
    });

    


    // More details click hide/show

    $(".more-details").click(function () {
        $(".more-link-content").slideToggle(300);
    });

    // shopping-bag-quantity

    $('.quantity-add').click(function () {
        if ($(this).prev().val() < 5) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.quantity-sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    // filter

    $(".filter-category").click(function () {
        $(".filter-categoty-dropdown").slideToggle(300);
    });
    // $(".pro-cart-filter-group").children
    $(".filter-pro-custom").hide();
    $(".filter-pro").click(function (e) {
        $(".filter-pro-custom").slideToggle(300);
        $('.filter-pro-custom').click(false);
        e.stopPropagation();
    });

    // second-filter
    $(".product-filter-category-sub").hide()
    $(".product-filter-category").click(function(){
        $(this).toggleClass("change-icon").children(".product-filter-category-sub").slideToggle(200);
    });

    $(".product-filter-price-sub").hide()
    $(".product-filter-price").click(function(){
        $(this).toggleClass("change-icon").children(".product-filter-price-sub").slideToggle(200);
    });

    $(".product-filter-shotby-sub").hide()
    $(".product-filter-shotby").click(function(){
        $(this).toggleClass("change-icon").children(".product-filter-shotby-sub").slideToggle(200);
    });

    });
    // for Accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    };

    // jewelry-product-details

    var action = false, clicked = false;
    var Owl = {

        init: function () {
            Owl.carousel();
        },

        carousel: function () {
            var owl;
            $(document).ready(function () {

                owl = $('.jewelry-slider').owlCarousel({
                    items: 1,
                    center: true,
                    nav: false,
                    dots: true,
                    loop: true,
                    margin: 10,
                    dotsContainer: '.test',
                    navText: ['prev', 'next'],
                });

                $('.owl-next').on('click', function () {
                    action = 'next';
                });

                $('.owl-prev').on('click', function () {
                    action = 'prev';
                });

                $('.bookmarks').on('click', 'li', function (e) {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                });
            });
        }
    };

    $(document).ready(function () {
        Owl.init();
    });
    // $(document).ready(function(){
    //    $(".burger").click(function(){
    //        $(this).parent(".main-menu").toggleClass("xtra-bg-mmenu");
    //        $("html").toggleClass("modal-open");
    //    }) 
    // //    $(".mega-menu").hide();
    // //    $(".mobile-menu li").children("a").click(function(e) {  
    // //        e.preventDefault();
    // //        $(this).parent("li").toggleClass("x");
    // //        $(this).next(".mega-menu").slideToggle(5);
    // //    })
    // });
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.mobile-menu li');


        burger.addEventListener('click', () => {
            // toggle nav
            nav.classList.toggle('nav-mobile-active');

            // // animation links
            // navLinks.forEach((link, index) => {
            //     if(link.style.animation){
            //         link.style.animation = '';
            //     } else{
            //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            //     }
            // });
            // burger-animation
            burger.classList.toggle('toggle');

        });
    }

    navSlide();
// paralax===============

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        $('.fragrance-xtra-img').css({
            'transform' : 'translate(0px, -'+ wScroll / 35 +'%)'
        });
        $('.fragrance-slider-content').css({
            'transform' : 'translate(0px, '+ wScroll / 29  +'%)'
        });
        para();
    });

    function para() {
        var windowWidth = $(window).width();
        if(windowWidth > 767) {
            var wScroll = $(this).scrollTop();
            $('.girls-xtra-part-1-content').css({
                'transform' : 'translate(0px, -'+ wScroll / 40 +'%)'
            });
            $('.girls-xtra-part-1-content-paralax').css({
                'transform' : 'translate(0px, '+ wScroll / 40 +'%)'
            });
        }
    }

// product-details-review-tabs

$(".review-tab-details").first().show().siblings().hide();
$(".review-rating-tab").first().addClass("act-tab").siblings().removeClass("act-tab");
$(".review-rating-tab").click(function() {
    var self = $(this);
    var self_data = self.attr("data-tabs");
    self.addClass("act-tab").siblings().removeClass("act-tab");

    $(".review-tab-details[data-tabs-details="+self_data+"]").show().siblings().hide();
});


