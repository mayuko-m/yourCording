
$(function () {
    $(".answer:not(:first-of-type)").css("display", "none").addClass("open");
    $(".question:first-of-type").addClass("open");
    $('.question').on('click', function () {
      //openクラスをつける
    $(this).toggleClass('open', 800);
    //クリックされていないnswerのopenクラスを取る
    $(".question").not(this).removeClass("open");

    $(this).next().slideToggle();
    $('.question').not($(this)).next('.answer').slideUp();
  })
});


$(function() {
	/* 「同意する」チェックイベント */
	$('[type="checkbox"]').on('click', function(){
		if($('[type="checkbox"]').prop("checked")){
			$('[type="submit"]').css('background-color', 'rgb(51, 51, 255)');
		} else {
			$('[type="submit"]').css('background-color', 'rgb(102, 102, 102)');
		}
	});

	/* 「同意する」がチェックされていない場合submit=false */
	$('[type="submit"]').on('click', function(){
		if ($('[type="submit"]').css('background-color') == 'rgb(102, 102, 102)') {
			return false;
		}
	});
});

$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});