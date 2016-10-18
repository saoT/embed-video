document.addEventListener("DOMContentLoaded", function() {

  var video     = document.getElementById('video');
  var playPause = document.getElementById('play-pause');
  var progress  = document.getElementById('progress');

  function playPauseClick () {
     if (video.paused || video.ended) {
        video.play();
     }
     else {
        video.pause();
     }
  }

  function progressUpdate () {
    var percent = (video.currentTime/video.duration) * 100
    progress.value = percent;
  }

  video.ontimeupdate = progressUpdate;
  playPause.addEventListener("click", playPauseClick);
});