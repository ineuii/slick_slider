$(document).ready(function () {
    var hCont = $('.history_slide'); //전역변수
    var hBtn = $('.history_btn li');
    var hIndex; //값을 초기화 하는 개념

    hCont.slick({

    });

    hBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        //li중 선택한 그것, hBtn이 클릭이 되어야지 변수가 생성됨(지역변수)
        var index = target.index();
        //li의 '색인번호'를 호출
        console.log(index);
        if (index == 0) {
            hIndex = 0;
        } else if (index == 1) {
            hIndex = 4;
        } else if (index == 2) {
            hIndex = 8;
        } else if (index == 3) {
            hIndex = 12;
        } else if (index == 4) {
            hIndex = 16;
        }

        //$('.your-element').slick('setPosition');
        //->변수를 사용해서 넣었더라면 반드시 변수를 사용해서 넣어야함
        hCont.slick('slickGoTo', hIndex);

        hBtn.removeClass('active');
        target.addClass('active');
        //클릭할때마다 칸의 색 변화 주기


    });//click


   
    hCont.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log(nextSlide);
        //nextSlide를 통해서 해당 index 번호를 바로 가져올수 있다!!

        if(nextSlide>=0 && nextSlide<=3){
            hBtn.removeClass('active');
            hBtn.eq(0).addClass('active');
        }else if(nextSlide>=4 && nextSlide <= 7){
            hBtn.removeClass('active');
            hBtn.eq(1).addClass('active');
        }else if(nextSlide>=8 && nextSlide <= 11){
            hBtn.removeClass('active');
            hBtn.eq(2).addClass('active');
        }else if(nextSlide>=12 && nextSlide <= 15){
            hBtn.removeClass('active');
            hBtn.eq(3).addClass('active');
        }else if(nextSlide>=16 && nextSlide <= 19){
            hBtn.removeClass('active');
            hBtn.eq(4).addClass('active');
        }

        $('.history_page em').text(nextSlide + 1);    
        //페이지 번호를 1부터 시작하기 위해서 +1 설정함

    });//On before slide change

    //history_poster 텝메뉴
    var posterBtn=$('.poster_btn li'),
        posterCont=$('.poster_cont .poster');

        posterCont.hide().eq(0).show();

        posterBtn.click(function(e){
            e.preventDefault();
            var pTarget = $(this);
            var pIndex = pTarget.index();
            console.log(pIndex);
            
            posterCont.hide();
            posterCont.eq(pIndex).fadeIn();
            
            posterCont.find('figure').removeClass('move')
            posterCont.eq(pIndex).find('figure').addClass('move')
        });

        // cider_bottle
            $('.cider_bottle').slick({
                centerMode:true,
                centerPadding:'380px',
                /* centerMode와 centerPadding항상 셋뚜셋뚜!! */
                dots:true
            });
          





});//ready