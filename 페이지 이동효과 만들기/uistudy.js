$(document).ready(function(){
	 $("#container").addClass("start");
	 $("nav li").click(function(){
	 	$("#container").css("max-width", "100%");

	 	//nav li, 즉 메뉴를 열어 클릭할때마다 #container의 width가 100%로 변경.

	 	var id=$(this).attr("data-rol");

	 	 // 클릭된 태그의 data-rol 속성값을 가져올수 있게.attr 메서드 사용하지만
	 	// 테스트를 위해 작성된것이므로 삭제함. data의 값을 선택자로 사용하기위해 
	 	// 변수(var id)로 만듬

	 	$("nav li").removeClass("on");
	 	$(this).addClass("on");

	 	$(".content").removeClass("prev this next");
	 	//클릭시 가지고 있던 클래스를 모두 지운다.

	 	$("#" + id).addclass("this").prevAll().addClass("prev");
	 	//클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 <section>태그는
	 	//.prev 클래스를 지정한다.

	 	$("#" + id).nextAll().addClass("next");
	 	//클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다.
          });

				//로고 클릭시.
       $(".logo_box").click(function()

       {
       	 $("nav li").removeClass("on");
         $(".content").removeClass("prev this next");
         $("#container").css("max-width", "1200px");

					});

				 });

    

       // <section class="content" 태그영역이 화면 전체로 구성되어 페이지 형태로 있다면
       // 원래 4분할된으로 돌아와야 하므로 removeClass 메서드를 사용해 
       // prev/next/this 클래스 삭제하고 <section id="container"> 
       // 태그 역시 max-width를 1200px로 변경
	   //메뉴 역시 초기화상태로 바꿔야함. 다른콘텐츠 메뉴는 해당콘텐츠의 해당하는곳에 on클래스가
       //적용되어 다른색으로 표기되기때문에 원래 화면으로 돌아올떄 메뉴를 초기화해야 하므로
       //removeClass 메서드를 사용해 <li class="on" 클래스를 동적으로 지움.





       




	 	
	 	
  

