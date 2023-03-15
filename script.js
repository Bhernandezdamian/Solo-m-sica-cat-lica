// Variables para el reproductor de YouTube y la lista de videos
var player;
var playlist = [
  '6OST_ZKrhXI',
  '8fkz-wjfT5c',
  'IOTTzG3dJy0'
];
var currentVideoIndex = 0;

// Función para cargar y reproducir el primer video de la lista
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: playlist[currentVideoIndex],
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Función para reproducir el siguiente video al finalizar el actual
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    currentVideoIndex++;
    if (currentVideoIndex >= playlist.length) {
      currentVideoIndex = 0;
    }
    player.loadVideoById(playlist[currentVideoIndex]);
  }
}

// Función para iniciar la reproducción del video
function onPlayerReady(event) {
  event.target.playVideo();
}
