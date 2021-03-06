$(document).ready(function(){

    // set needed vars
    var everMusicPlayer = $('#ever_audio')[0];
    var play_pause_button = $('.ever-music-button');

    // save the player currentTime every 2 sec
    setInterval(function() {
        sessionStorage.setItem('ever-music-current', everMusicPlayer.currentTime);
    }, 2000);

    // check in session storage if the player must play
    if (sessionStorage.getItem('ever-music-pause') === 'true') {
        // make sure the metadata are loaded before set the currentTime
        everMusicPlayer.addEventListener('loadedmetadata', function() {
            everMusicPlayer.currentTime = parseFloat(sessionStorage.getItem('ever-music-current'));
        }, false);
        everMusicPlayer.pause();
        play_pause_button.html('<i class=" fa fa-play"></i>');
    } else {
        // make sure the metadata are loaded before set the currentTime
        everMusicPlayer.addEventListener('loadedmetadata', function() {
            everMusicPlayer.currentTime = parseFloat(sessionStorage.getItem('ever-music-current'));
        }, false);
        everMusicPlayer.play();
        play_pause_button.html('<i class="fa fa-pause"></i>');
    }

    // bind the play/pause button
    play_pause_button.click(function() {
        if (everMusicPlayer.paused == false) {
            everMusicPlayer.pause();
            sessionStorage.setItem('ever-music-pause', 'true');
            play_pause_button.html('<i class=" fa fa-play"></i>');
        } else {
            everMusicPlayer.play();
            sessionStorage.setItem('ever-music-pause', 'false');
            play_pause_button.html('<i class="fa fa-pause"></i>');
        }
    });
});
