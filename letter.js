$(function(){
  $(document).ready(function() {
    $(".type-area").typed({
      stringsElement: $('#type-content'),
      typeSpeed: -70,
      contentType: 'html',
      loop: false
    });
    var lastScrollEvent;
    function startAutoScroll() {
      autoScroll = setInterval(function() {
        window.scroll(0, document.body.scrollHeight);
      }, 1);
    }
    function clearAutoScroll() {
      if (autoScroll) {
        clearInterval(autoScroll);
        window.scroll(0, document.body.scrollHeight);
      }
    }
    $('.sticky-btn').click(function() {
      if (lastScrollEvent === 'start') {
        lastScrollEvent = 'stop';
        clearAutoScroll();
        $('.backdrop').fadeOut();
        $('.sticky-btn').text('Lock Page');
      }
      else {
        lastScrollEvent = 'start';
        startAutoScroll();
        $('.backdrop').fadeIn();
        $('.sticky-btn').text('Unlock Page');
      }
    });
    lastScrollEvent = 'start';
    startAutoScroll();
  });
});
