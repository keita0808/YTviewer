var videoId = window.prompt("YoutubeのURLを入力してください", "").replace('https://www.youtube.com/watch?v=', '');
var videoWidth  = '640';  //横
var videoHeight = '360';  //縦
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: videoHeight,
    width: videoWidth,
    videoId: videoId,
    playerVars: {
      autoplay: 1,
    },
  });
}