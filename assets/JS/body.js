$(document).ready(function() {
    $('#activites .col-md-3').on('mouseenter', function() {
        let curDiv=this.getAttribute('data-attr');
        
        playAudio(curDiv);
    });

    function playAudio(char) {
        let audio = new Audio(`../../assets/audio/Body/${char}.mp3`);
        
        audio.play();
    }
});
