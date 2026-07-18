document.addEventListener("DOMContentLoaded", () => {

    const titulo = document.getElementById("titulo-animado");

    const texto = "Convertimos ideas en apps y tiendas online que ";
    const azul = "venden";

    let i = 0;

    function escribirTexto() {

        if (i <= texto.length) {

            titulo.innerHTML =
                texto.substring(0, i);

            i++;

            setTimeout(escribirTexto, 45);

        } else {

            escribirAzul();

        }
    }

    let j = 0;

    function escribirAzul() {

        if (j <= azul.length) {

            titulo.innerHTML =
                texto +
                '<span class="text-primary">' +
                azul.substring(0, j) +
                '</span>';

            j++;

            setTimeout(escribirAzul, 45);

        }

    }

    escribirTexto();

});