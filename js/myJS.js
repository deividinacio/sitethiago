

/* função data de encerramento do site */

// Pega o valor numérico da data e hora:
// formato ano/mes/dia
var dataEncerramento = (new Date('2024/10/25 16:00:00')).getTime();
// Executa a função quando no tempo marcado:
setTimeout(function() {
    window.location.href = "../404.html"; // direciona para esse página
}, dataEncerramento - Date.now());


/* add função bloqueio do click direito do mouse no iframe do video - janela pop-up */

    window.onload = function()
    {
        document.addEventListener("contextmenu", e => e.preventDefault()); // bloqueia em toda pagina
        $(document).ready(function() {
            $('.video-wrapper').on('click', function(){
                setTimeout(() => {
                    var iframe = $(".mfp-iframe");

                    var iframeContent = iframe.contents();

                    iframeContent.on("contextmenu", function(e) {
                        e.preventDefault();
                    });
                }, 500);
            });
        });
    }
  
   
/* fim bloquei click direito mouse */


/* add função modal video */

jQuery(document).ready(function(){
    
    jQuery(document).on('click', '.video-wrapper .modal.fade, .video-wrapper .close', function(){
        setTimeout(() => {
            if(jQuery('#video-modal:visible').length == 0){
                var video = document.getElementById('video-modal');
                
                if(video != null){
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }, 200);
    });

    /* função autoplay no video */
    jQuery(document).on('click', '.video-wrapper .video-play-button', function(){
        setTimeout(() => {
        var video = document.getElementById('video-modal');
        video.play();
        }, 100);
    });
}); 





