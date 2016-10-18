document.addEventListener("DOMContentLoaded", function() {

  var video = document.getElementById('video');
  // var progress = document.getElementById('progress');

  // var playPause = document.getElementById('play-pause');

  // function playPauseClick () {
  //   console.log('clicked');
  //    if (video.paused || video.ended) {
  //       playPause.title = 'pause';
  //       playPause.innerHTML = 'pause';
  //       playPause.className = 'pause';
  //       video.play();
  //    }
  //    else {
  //       playPause.title = 'play';
  //       playPause.innerHTML = 'play';
  //       playPause.className = 'play';
  //       video.pause();
  //    }
  // }

  function progressUpdate () {
    var percent = (video.currentTime/video.duration) * 100
    progress.value = percent;
    progress.max = 300
  }

  video.ontimeupdate = progressUpdate;

  // playPause.addEventListener("click", playPauseClick);
});