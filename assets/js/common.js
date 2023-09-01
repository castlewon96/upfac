$(document).ready(function(){
    //퍼블용 공통 헤더,푸터
    $('.header').load("../common/header.html");

    //탭
    $('.tab_type01 a').click(function () {
        var idx = $(this).parent().index();
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
    

    /*******************************************************************************
     * 상품 썸네일 리스트 팝업 시작 js
     ******************************************************************************/
    function wrapWindowByMask() {

    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
        'width': '100%',
        'height': '100%'
    });

    //애니메이션 효과   
    $('#mask').fadeTo("slow", 0.5);
    }

    function popupOpen() {
        $('.layerpop').css("position", "absolute");
        $('body').css("overflow", "hidden");
        //영역 가운에데 레이어를 뛰우기 위해 위치 계산 
        //리사이즈시 작동 펑션
        window.addEventListener('resize', function () {
            $('.layerpop').css("top", (($(window).height() - $('.layerpop').outerHeight()) / 2) + $(window).scrollTop());
            $('.layerpop').css("left", (($(window).width() - $('.layerpop').outerWidth()) / 2) + $(window).scrollLeft());
        });
            $('.layerpop').css("top", (($(window).height() - $('.layerpop').outerHeight()) / 2) + $(window).scrollTop());
            $('.layerpop').css("left", (($(window).width() - $('.layerpop').outerWidth()) / 2) + $(window).scrollLeft());
            //$('.layerpop').draggable();
            $('#layerbox').show();
    }

    $('#layerbox_close').on('click', function() {
        popupClose()
    })

    function popupClose() {
        $('#layerbox').hide();
        $('#mask').hide();
        $('body').css("overflow", "unset");
    }

    function goDetail() {

        /*팝업 오픈전 별도의 작업이 있을경우 구현*/

        popupOpen(); //레이어 팝업창 오픈 
        wrapWindowByMask(); //화면 마스크 효과           
    } 
    /****썸네일 클릭시 리스트 팝업****/

    /*썸네일 Each 클릭 펑션*/
    $('#product_pop > .item').on('click', function(e) {
        goDetail()                       
    })

    
    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e){	
        var LayerPopup = $("#layerbox");
        if(LayerPopup.has(e.target).length === 0){
            $('#layerbox').hide();
            $('#mask').hide();
            $('body').css("overflow", "unset");
        }
    });
    /*******************************************************************************
     * 상품 썸네일 리스트 팝업 끝 js
     ******************************************************************************/


    /*******************************************************************************
     * 일반 공통 팝업 시작 js
     ******************************************************************************/
    // 팝업 열기
    $(document).on("click", ".btn-open", function (e){
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e){	
        var LayerPopup = $(".layer-popup");
        console.log(LayerPopup.has(e.target).length)
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("show");
        }
    });
    /*******************************************************************************
     * 일반 공통 팝업 시작 js
     ******************************************************************************/
});