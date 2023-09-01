$(document).ready(function(){
    //퍼블용 공통 헤더,푸터
    $('.header').load("../common/header.html");

    //탭
    $('.tab_type01 a').click(function () {
        var idx = $(this).parent().index();
        console.log(idx);
        $('.tab_type01 li').removeClass('on');
        $(this).parent().addClass('on');
        $('.tab_box').addClass('hide').eq(idx).removeClass('hide');
    })

    //썸네일 3D
    //thumb preview
    var $threeSixty = $('.threesixty');

    $threeSixty.threeSixty({
        dragDirection: 'horizontal',
        useKeys: true,
        draggable: true
    });

    $('.next').click(function () {
        $threeSixty.nextFrame();
    });

    $('.prev').click(function () {
        $threeSixty.prevFrame();
    });

    $threeSixty.on('down', function () {
        $('.ui, h1, h2, .label, .examples').stop().animate({ opacity: 0 }, 300);
    });

    $threeSixty.on('up', function () {
        $('.ui, h1, h2, .label, .examples').stop().animate({ opacity: 1 }, 500);
    });
    
});