$(window).resize(function(){ 
  if ( window.innerWidth > 1024) {  

		new Swiper('.swiper-container', {

			slidesPerView : 4, 
			spaceBetween : 30, 
			slidesPerGroup : 4, 
			loopFillGroupWithBlank : true,
		
			loop : true,
		
			pagination : { 
				el : '.swiper-pagination',
				clickable : true, 
			},
			navigation : { 
				nextEl : '.swiper-button-next', 
				prevEl : '.swiper-button-prev', 
			},
		});

  } if ( window.innerWidth < 321) {

		new Swiper('.swiper-container', {

			slidesPerView : 2, 
			spaceBetween : 30, 
			slidesPerGroup : 1, 
			loopFillGroupWithBlank : true,
		
			loop : true,
		
			pagination : { 
				el : '.swiper-pagination',
				clickable : true, 
			},
			navigation : { 
				nextEl : '.swiper-button-next', 
				prevEl : '.swiper-button-prev', 
			},
		});
    
  }
  
  }).resize();

$(".que").click(function() {
  $(this).next(".anw").stop().slideToggle(300);
 $(this).toggleClass('on').siblings().removeClass('on');
 $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});

$(".subMenuWrap").hide();
$(".navi > li").mouseover(function() {
	$(this).find(".subMenuWrap").stop().slideDown(300);
}).mouseout(function() {
	$(this).find(".subMenuWrap").stop().slideUp(300);
});

$(".mNavi").hide();
$("#tabMenu").click(function() {
	$(".mNavi").fadeIn();
});
$("#close").click(function() {
	$(".mNavi").fadeOut();
});

alert("포트폴리오용입니다.");