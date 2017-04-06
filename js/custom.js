$('.firstPage').parallax({
	imageSrc: 'https://media.giphy.com/media/svMwMGuSZTdF6/giphy.gif',
});

$('.music').parallax({
	imageSrc: 'http://wallpapercave.com/wp/pEeUsp1.jpg',
});


  $(".owl-carousel").owlCarousel();







// scroll to page sections by # id
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});











// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.'M7lc1UVf-VE',
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'T_UywfuYTvc',  //change the video here 
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        // player.mute();    
        // up here makes the video AUTO MUTE 
        // player.playVideo(); 
        // VIDEO AUTOPLAY HERE!
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.

      function onPlayerStateChange(event) {
       
      }
      function stopVideo() {
        player.stopVideo();
      }
