// [01] Reviews swiper 
// [02] Jarallax init 
// [03] Trasition-scroll at Element
// [04] Footer Year-stamp
// [05] Menu-Toggle & Audio-Play
// [06] Navbar sticky-scroll & Links Hover-Animation
// [07] Float Window show/hide
// [08] personal Video Play/remove
// [09] Hire-Me window show/hide
// [10] Make review action
// [11] Scrollbar Customization
// [12] Hero Heading Animation
// [13] Pre-Loader
// [14] BackToTop Btn show/hide
// [15] Hire Me form submition/validation
// [16] Make Review form submition/validation

// ________ _ ____________________________________________ _______  


// window load event 
window.addEventListener("DOMContentLoaded", () => {

    // onload initial calls 

    function initialScrollForce() {
        window.scrollBy(0, 1)
    }


    function scrollDeActivate() {
        $("#body").addClass("bodyScript")
    }

    function scrollActivate() {
        $("#body").removeClass("bodyScript")
    }

    initialScrollForce()
    scrollDeActivate()
    preLoader()

    setTimeout(() => {
        scrollActivate()
        animateText()
    }, 4200);


    // ____________________________ __ __________________________ __  


    // [01] ***********************
    //      Reviews Slider
    // ***************************


    // Custom bullets for swiper2 / reviews-slides
    const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 7,
        allowSlideNext: false,
        allowSlidePrev: false,
    });

    // Reviews-slides / swiper 2
    const swiper2 = new Swiper('.swiper2', {
        loop: false,
        speed: 800,
        effect: 'fade',
        parallax: true,
        thumbs: {
            swiper: swiper1,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Event listener for swiper2 slide change

    $(".bulletFocusAnimation1").addClass("bulletFocusAnimation__Script");
    swiper2.on('slideChange', function() {
        // Remove all bullet focus animations 
        $(".bulletFocusAnimation").removeClass("bulletFocusAnimation__Script");

        // Determine which bullet focus animation to add on swiper2's realIndex
        switch (swiper2.realIndex) {
            case 0:
                $(".bulletFocusAnimation1").addClass("bulletFocusAnimation__Script");
                break;
            case 1:
                $(".bulletFocusAnimation2").addClass("bulletFocusAnimation__Script");
                break;
            case 2:
                $(".bulletFocusAnimation3").addClass("bulletFocusAnimation__Script");
                break;
            case 3:
                $(".bulletFocusAnimation4").addClass("bulletFocusAnimation__Script");
                break;
            case 4:
                $(".bulletFocusAnimation5").addClass("bulletFocusAnimation__Script");
                break;
            case 5:
                $(".bulletFocusAnimation6").addClass("bulletFocusAnimation__Script");
                break;
            case 6:
                $(".bulletFocusAnimation7").addClass("bulletFocusAnimation__Script");
                break;
            default:
                break;
        }

        // Handle prev and next button visibility  
        if (swiper2.realIndex === 0) {
            $(".swiper-button-prev").addClass("swiper-button-prev-SCRIPT");
            $(".swiper-button-next").removeClass("swiper-button-next-SCRIPT");
        } else if (swiper2.realIndex === 6) {
            $(".swiper-button-next").addClass("swiper-button-next-SCRIPT");
            $(".swiper-button-prev").removeClass("swiper-button-prev-SCRIPT");
        } else if (swiper2.realIndex > 0 || swiper2.realIndex < 6) {
            $(".swiper-button-prev").removeClass("swiper-button-prev-SCRIPT");
            $(".swiper-button-next").removeClass("swiper-button-next-SCRIPT");
        }
    });


    // [02] ***********************
    //      Jarallax init
    // ***************************

    jarallax(document.querySelectorAll('.jarallax'), {
        // background scroll speed 
        speed: 0.4,
    });
    // diasable jaralax at 
    jarallax(document.querySelectorAll('.jarallax'), {
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/
    })



    // [03] ******************************** 
    //      Trasition-scroll at Element
    // ************************************

    $('a.scrollToElem').smoothScroll({
        offset: 1,
        // one of 'top' or 'left'
        direction: 'top',
        // only use if you want to override default behavior or if using $.smoothScroll
        scrollTarget: null,
        // automatically focus the target element after scrolling to it
        // (see https://github.com/kswedberg/jquery-smooth-scroll#focus-element-after-scrolling-to-it for details)
        autoFocus: false,
        // string to use as selector for event delegation
        delegateSelector: null,
        // fn(opts) function to be called before scrolling occurs.
        // `this` is the element(s) being scrolled
        beforeScroll: function() {},
        // fn(opts) function to be called after scrolling occurs.
        // `this` is the triggering element
        afterScroll: function() {
            // window.scrollBy(0, 1)
            // window.scrollBy(0, -1)
            initialScrollForce()
        },
        // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
        // from jQuery UI or elsewhere

        easing: 'easeInOutQuint',
        // easing: 'easeInOutCirc',
        // easing: 'easeInOutQuart',
        // easing: 'easeInOutCubic',
        // easing: 'easeInOutQuad',
        // easing: 'easeInOutExpo',
        // easing: 'easeInElastic',
        // easing: 'easeInOutBack',
        // easing: 'easeInOutBounce',

        // speed can be a number or 'auto'
        // if 'auto', the speed will be calculated based on the formula:
        // (current scroll position - target scroll position) / autoCoefficient
        speed: 1800,
        // autoCoefficent: Only used when speed set to "auto".
        // The higher this number, the faster the scroll speed
        // autoCoefficient: 2,
        // $.fn.smoothScroll only: whether to prevent the default click action
        preventDefault: true
    })


    // [04] ******************************** 
    //      Footer Year-stamp
    // ************************************

    $(".currentYear").text(new Date().getFullYear() + " ");


    // [05] ******************************** 
    //      Menu-Toggle & Audio-Play
    // ************************************

    function navigationToggle() {
        $(".navigationAnimation__toggler").toggleClass("navigationAnimation__toggler__SCRIPT");

        $(".header__innerContainer").toggleClass("header__innerContainer__Script");
        $(".header__nav").toggleClass("header__nav__Script");

        const audio1 = document.querySelector(".togglePlay_audio__1")
        const audio2 = document.querySelector(".togglePlay_audio__2")


        if ($(".navigationAnimation__toggler").hasClass("navigationAnimation__toggler__SCRIPT")) {
            audio1.play();

            BackToTop_btn__hide()
        } else {
            audio2.play();
        };

    }


    $(".navigationAnimation__toggler").click(navigationToggle);
    $(".Links_Ul__responsive li a").click(navigationToggle);
    $(".BackToTop__Btn .scrollToElem").click(() => {

        if ($(".navigationAnimation__toggler").hasClass("navigationAnimation__toggler__SCRIPT")) {

            return navigationToggle()

        } else {

            return false
        };
    });



    // [06] ******************************************** 
    //      Navbar sticky-scroll & Links Animation
    // ************************************************ 

    window.addEventListener("scroll", () => {
        // Handle fixed navbar  
        if (window.scrollY >= 50) {
            $(".fixedNavBar").addClass("fixedNavBar__Script");
            $(".staticNavBar").addClass("staticNavBar__Script");

        } else {

            $(".fixedNavBar").removeClass("fixedNavBar__Script");
            $(".staticNavBar").removeClass("staticNavBar__Script");
        }

        // Checkcking each section to add or remove classes on scroll position
        let currentScroll = window.scrollY;

        // Home section
        if (currentScroll < $("#About").offset().top) {
            $(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script");
            $(".hdrNav_HomeAncor").addClass("hdrNav__Ancor_Script");
        }
        // About section
        else if (currentScroll >= $("#About").offset().top && currentScroll < $("#Resume").offset().top) {
            $(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script");
            $(".hdrNav_AboutAncor").addClass("hdrNav__Ancor_Script");
        }
        // Resume section
        else if (currentScroll >= $("#Resume").offset().top && currentScroll < $("#works").offset().top) {
            $(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script");
            $(".hdrNav_ResumeAncor").addClass("hdrNav__Ancor_Script");
        }
        // Works section
        else if (currentScroll >= $("#works").offset().top && currentScroll < $("#Reviews").offset().top) {
            $(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script");
            $(".hdrNav_WorksAncor").addClass("hdrNav__Ancor_Script");
        }
        // Reviews section
        else if (currentScroll >= $("#Reviews").offset().top && currentScroll < $("#jumpToContact").offset().top) {
            $(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script");
            $(".hdrNav_ReviewsAncor").addClass("hdrNav__Ancor_Script");
        }
        // Contact section 
        else if (currentScroll >= $("#jumpToContact").offset().top) {
            $(".hdrNav_Ancor").removeClass("hdrNav__Ancor_Script");
            $(".hdrNav_ContactAncor").addClass("hdrNav__Ancor_Script");
        };


        // Other Callbacks on Scroll-Event 

        if (currentScroll >= 50) {
            BackToTop_btn__show()
        } else {
            BackToTop_btn__hide()
        }

    });



    // [07] ******************************************** 
    //      Float winndow show/hide
    // ************************************************ 



    function FloatWindow_Show() {
        $(".FloatWindowContainer").addClass("FloatWindowContainer__Script");
        $(".closeFloatWindow").addClass("closeFloatWindow__Script");

        scrollDeActivate()
        BackToTop_btn__hide()
    }

    function FloatWindow_Hide() {
        $(".FloatWindowContainer").removeClass("FloatWindowContainer__Script");
        $(".closeFloatWindow").removeClass("closeFloatWindow__Script");

        scrollActivate()
    }

    $(".closeFloatWindow__icon").click(() => {
        FloatWindow_Hide();
        personalVideoRemove();
        hireContainerHide()
        MakeReviewContainer_Hide()
    });



    // [08] ******************************************** 
    //      personal Video Play/remove
    // ************************************************


    function personalVideoPlay() {

        $(".FloatWindow").append($(".personalVideo__container"));
        $(".personalVideo__container").addClass("personalVideo__container__Script");

        $(".personalVideo__iframeWrap").removeClass("personalVideo__iframeWrap__Script");
        $(".personalVideo__placeHolder").removeClass("personalVideo__placeHolder__Script");


        var youtubeEmbedUrl = "https://www.youtube.com/embed/WG5ikvJ2TKA?si=OTwG3Pdx5F-y_FoE";
        $(".personalVideo__iframe").attr("src", youtubeEmbedUrl);
        $(".personalVideo__iframe").on("load", function() {
            $(".personalVideo__iframeWrap").addClass("personalVideo__iframeWrap__Script");
            $(".personalVideo__placeHolder").addClass("personalVideo__placeHolder__Script");
        });
    }

    $(".heroWatchVideoIcon").click(() => {
        FloatWindow_Show();
        personalVideoPlay();
    });


    function personalVideoRemove() {

        $(".FloatWindow").remove($(".personalVideo__container"));
        $(".personalVideo__container").removeClass("personalVideo__container__Script");

        $(".personalVideo__iframe").attr("src", "");
        $(".personalVideo__iframeWrap").removeClass("personalVideo__iframeWrap__Script");
        $(".personalVideo__placeHolder").removeClass("personalVideo__placeHolder__Script");
    }


    // [09] ******************************************** 
    //      Hire-Me window show/hide
    // ************************************************

    $(".hireMeAncor").click(() => {
        FloatWindow_Show();
        hireContainerShow()
    });

    function hireContainerShow() {
        $(".FloatWindow").append($(".HireMe__container"));

        $(".HireMe__container").addClass("HireMe__container__Script");
        $(".HireMe__container__inner").addClass("HireMe__container__inner__Script");
    }

    function hireContainerHide() {
        $(".FloatWindow").remove($(".HireMe__container"));

        $(".HireMe__container").removeClass("HireMe__container__Script");
        $(".HireMe__container__inner").removeClass("HireMe__container__inner__Script");
    }


    // [10] ******************************************** 
    //      Make review action
    // ************************************************

    $(".MakeReviewAncor").click(function() {
        FloatWindow_Show();
        MakeReviewContainer_Show()
    })

    function MakeReviewContainer_Show() {
        $(".FloatWindow").append($(".MakeReviewContainer"));

        $(".MakeReviewContainer").addClass("MakeReviewContainer__Script");
        $(".MakeReviewContainer__Inner").addClass("MakeReviewContainer__Inner__Script");
    }

    function MakeReviewContainer_Hide() {
        $(".FloatWindow").remove($(".MakeReviewContainer"));

        $(".MakeReviewContainer").removeClass("MakeReviewContainer__Script");
        $(".MakeReviewContainer__Inner").removeClass("MakeReviewContainer__Inner__Script");
    }


    // [11] ******************************************** 
    //      Scrollbar Customization
    // ************************************************


    window.addEventListener("scroll", () => {

        const windowHeight = $("body").height();
        const windowBottom = window.scrollY + window.innerHeight

        const currentScrollPosition = (windowBottom / windowHeight) * 100;

        $(".customScrollbar").css({
            "height": currentScrollPosition + "%"
        });
    })


    // [12] ******************************************** 
    //      Hero Heading Animation
    // ************************************************

    function animateText() {

        var element = document.getElementById("AnimateTextInThisElement");

        var texts = ["Haseeb Arshad", "programming pro", "script sensei", "code sage"];
        var currentIndex = 0;

        function animate(currentText) {
            element.textContent = "";

            for (var i = 0; i < currentText.length; i++) {
                setTimeout(function(index) {
                    return function() {
                        element.textContent += (currentText[index])
                    };
                }(i), i * 160);
            }

            setTimeout(function() {
                var interval = setInterval(function() {
                    if (element.textContent.length > 0) {
                        var newText = element.textContent.slice(0, -1);
                        element.textContent = newText
                    } else {
                        clearInterval(interval);
                        currentIndex = (currentIndex + 1) % texts.length;
                        animate(texts[currentIndex]);
                    }
                }, 160);
            }, currentText.length * 160 + 3000);
        }

        animate(texts[currentIndex]);
    }



    // [12] ******************************************** 
    //      AOS Animate
    // ************************************************

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 150, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });



    // [13] ******************************************** 
    //      Pre-Loader
    // ************************************************


    function preLoader() {
        $(".preloader").addClass("preloader__Script")
    }


    // [14] ******************************************** 
    //      BackToTop Btn show/hide
    // ************************************************


    function BackToTop_btn__show() {
        $(".BackToTop__Btn").addClass("BackToTop__Btn__Script")
    }

    function BackToTop_btn__hide() {
        $(".BackToTop__Btn").removeClass("BackToTop__Btn__Script")
    }



    // [15] ******************************************** 
    //      Hire Me form submition/validation
    // ************************************************


    var HireMe_form = document.getElementById("HireMe_form");
    async function handleSubmit(event) {

        event.preventDefault();
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: HireMe_form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Thanks for your submission!")
                HireMe_form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "))
                    } else {
                        alert("Oops! There was a problem submitting your form")
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form", error)
        });
    }
    HireMe_form.addEventListener("submit", handleSubmit)



    // [16] ******************************************** 
    //      Make Review form submition/validation
    // ************************************************

    var Review_form = document.getElementById("HireMe_form");
    async function handleSubmit(event) {

        event.preventDefault();
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: Review_form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Thanks for your submission!")
                Review_form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "))
                    } else {
                        alert("Oops! There was a problem submitting your form")
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form", error)
        });
    }
    Review_form.addEventListener("submit", handleSubmit)



    // window load-event braces end >>
})