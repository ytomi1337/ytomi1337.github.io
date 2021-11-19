$('.team-carousel').slick(
    
    {
    
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [

        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2
            }
        },
        {
        breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

    ]
  }
  
  );