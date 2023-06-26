document.addEventListener('scroll', function () {
  if ($(window).scrollTop() > 450) {
      $('.header').addClass('header-fix');   
  } else {
      $('.header').removeClass('header-fix');
  }    
}) 

$('.up-btn').click(function() { 
  $('html,body').animate({ 
      scrollTop: 0
  }, 1000);
});











$('.industries-slider-cont').slick({
})
$('.comments-slider').slick({
  dots : true,
})
$(".back-call-form-input-tel").mask("+7(999) 999-99 99");
$(".modal-form-tel").mask("+7(999) 999-99 99");

$('.call-link-header').on('click', ()  => {
  $('.modal-form').toggleClass('active')
})
$('.modal-form').click((e) => {
  if(e.target.classList[0] == 'modal-form' || e.target.classList[0] == 'enter' || e.target.classList[0] == 'close-form'){
    $('.modal-form').toggleClass('active')
  }
})
$('.burger').on('click', ()  => {
  $('.sidebar-cont').toggleClass('active')
  $('.sidebar').toggleClass('active')
})
$('.sidebar-cont').click((e) => {
  if(e.target.classList[0] == 'sidebar-cont' || e.target.classList[0] == 'close-sidebar'){
    $('.sidebar-cont').toggleClass('active')
    $('.sidebar').toggleClass('active')
  }
})