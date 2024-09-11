$(document).ready(function() {
    $('.char').on('mouseenter', function() {
        let charName = $(this).data('char').toLowerCase();
        playAudio(charName);
    });

    function playAudio(char) {
        let audio = new Audio(`../../assets/audio/${char}.mp3`);
        
        audio.play();
    }
});
