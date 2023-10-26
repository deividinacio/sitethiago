

/* função data de encerramento do site */

// Pega o valor numérico da data e hora:
// formato ano/mes/dia

/*

var dataEncerramento = (new Date('2023/10/25 16:00:00')).getTime();
setTimeout(function() {  // Executa a função quando no tempo marcado:
    window.location.href = "../404.html"; // direciona para esse página
}, dataEncerramento - Date.now());

*/


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
