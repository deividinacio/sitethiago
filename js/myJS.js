
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
