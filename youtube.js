var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {  /* html에 적은 id와 같아야 함 */
        videoId: 'n6J4_VvAbI0',
        playerVars: {
            'autoplay': true, /* (=1) */
            'controls': false, /* (=0) */
            'loop': true, /* (=1) */
            'playlist': 'n6J4_VvAbI0' /* 반복재생할 때, 반드시 video id를 다시 한번 적어야 한다. */
        },
        events: {
            //영상이 준비되면 함수가 실행
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상자체
            },
        }
    });

var player2;
    player2 = new YT.Player('player2', {  
        videoId: 'Ok7qgLqZaUo',
        playerVars: {
            'autoplay': true, 
            'controls': false, 
            'loop': true, 
            'playlist': 'Ok7qgLqZaUo' 
        },
        events: {
            'onReady': function (event) {
                event.target.mute(); 
            },
        }
    });

}