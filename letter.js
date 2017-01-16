$(function(){
  $(document).ready(function() {
    $(".type-area").typed({
      stringsElement: $('#type-content'),
      typeSpeed: 0,
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
        $('.sticky-btn').text('Enable Auto Scrolling');
      }
      else {
        lastScrollEvent = 'start';
        startAutoScroll();
        $('.sticky-btn').text('Disable Auto Scrolling');
      }
    });
    lastScrollEvent = 'start';
    startAutoScroll();
  });
});
