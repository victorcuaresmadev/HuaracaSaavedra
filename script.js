function toggleFullScreen() {
  const iframe = document.getElementById("babyVideo");

  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { 
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) { 
    iframe.mozRequestFullScreen();
  } else if (iframe.msRequestFullscreen) { 
    iframe.msRequestFullscreen();
  }
}
