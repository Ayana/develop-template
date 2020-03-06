"use strict";

// 値取得の書き方サンプル
var genderInput1 = gender.getElementsByTagName('div')[0].getElementsByTagName('input');
var genderInput2 = gender.getElementsByTagName('div')[1].getElementsByTagName('input');
var genderOption = document.getElementsByName('gender'); // 性別ラジオボタンの画像オンオフ切り替え
// const genderOption = document.getElementsByName('gender')
// function activeImage() {
//   const genderOption1Input = genderOption[0]
//   if (genderOption1Input.checked == true) {
// 		genderOption2Input.parentElement.classList.remove('active')
// 		genderOption1Input.parentElement.classList.add('active')
// 	} else {
// 		genderOption1Input.parentElement.classList.remove('active')
// 		genderOption2Input.parentElement.classList.add('active')
// 	}
// }
// genderOption.forEach(function(e) {
// 	e.addEventListener('click', function() {
//     activeImage()
// 	})
// })
// Get width

function getWidth() {
  var width = document.querySelector(".item").offsetWidth * 0.94;
  document.querySelector(".item").style.height = width + 'px';
}

window.addEventListener('load', function () {
  getWidth();
});
window.addEventListener('resize', function () {
  getWidth();
}); // jQuery

$(function () {
  var checkboxItem = $('.checkbox__item'); // Add id to input

  $(checkboxItem).eq(0).children('input').attr('id', 'answer_1');
  $(checkboxItem).eq(1).children('input').attr('id', 'answer_2'); // Toggle class

  $(checkboxItem).on('click', function () {
    $(this).toggleClass('active');
  }); // Autofocus with keyboard enter

  var targetElm = 'input[type=text],select,input[type=checkbox],input[type=submit]';
  $(targetElm).keypress(function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      var index = $(targetElm).index(this);
      $(targetElm).eq(index + 1).focus();
    }
  });
}); // ToggleClass Sample

$(function () {
  var gender = $('.gender_item');
  var interest = $('.interest_item'); // 性別をクリックしたらclassを追加削除

  $(gender).on('click', function () {
    $(this).toggleClass('active');
  }); // 興味関心をクリックしたらclassを追加削除

  $(interest).on('click', function () {
    $(this).toggleClass('active');
  });
});