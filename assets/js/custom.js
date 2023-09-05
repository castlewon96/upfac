var swiper = new Swiper(".main_slide", {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    // loopAdditionalSlides : 1,
    // parallax: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  });

// 아코디언 공통
$(".accordion .accordion_title").on("click", function(){
    $(this).siblings().stop().slideToggle()
    $(this).parents('.accordion_list').toggleClass('on');
    $(this).parents('.accordion_list').siblings().removeClass('on');
    $(this).parents('.accordion_list').siblings().children(".accordion_toggle").stop().slideUp();
    $(this).parents().parents().siblings().children().children(".accordion_toggle").stop().slideUp();
});

// 셀렉스 커스텀 공통
$(".select_box .select_title").on('click', function(){
    $(this).parents('.select_box').toggleClass('on')
});

// 리스트 버튼 한개만 클릭
$('.list_choice_one li').on('click', function(){
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
})