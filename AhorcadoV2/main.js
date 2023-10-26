console.log('hola');
const intro = document.querySelector("#btnIntroPalabra");
const ventanaPrimera = document.querySelector('#ventanaIntroPalabra');
const juego = document.querySelector('#juego');
let fallos = 0;
intro.addEventListener("click", function() {
    ventanaPrimera.classList.add("d-none");
    juego.classList.remove("d-none");
  
    const inputPalabra = document.querySelector('#inputPalabra');
    const palabra = inputPalabra.value.trim(); // Elimina espacios en blanco al principio y al final
    const mayusPalabra = palabra.toUpperCase(); // Corrección: utiliza toUpperCase()
    
    // Crear una variable para almacenar el contenido HTML de las casillas
    let casillasHTML = '';

    // Recorre la palabra para construir las casillas
    for (let i = 0; i < mayusPalabra.length; i++) {
        casillasHTML += '<div class="casilla">_</div>';
    }

    // Establece el contenido HTML del elemento "casillas"
    casillas.innerHTML = casillasHTML;

    const introLetra = document.querySelector("#introLetra");
    const letra = document.querySelector("#letra");
    
    introLetra.addEventListener("click", function() {
        const letraIngresada = letra.value.toUpperCase(); // Convierte la letra ingresada a mayúsculas
        let letraCorrecta= false
        
        for (let i = 0; i < mayusPalabra.length; i++) {
            if (letraIngresada === mayusPalabra[i]) {
                // Selecciona todos los elementos con la clase .casilla
                const casillasLista = casillas.querySelectorAll('.casilla');
                // Reemplaza el contenido del elemento correspondiente en las casillas
                casillasLista[i].textContent = letraIngresada;
                letraCorrecta= true
            }     
    }
    
    if (letraCorrecta==false) {
        fallos=fallos+1
        const div = document.querySelector(`#div${fallos}`);
        div.classList.remove("d-none");
        if(fallos==6){
            const ventanaPregunta = document.querySelector("#ventanaPregunta");
            ventanaPregunta.classList.remove("d-none");
            const btnJugar = document.querySelector("#btnJugar");
            btnJugar.addEventListener("click",reiniciarJuego)
                // inputPalabra.value = "";
                // letra.value = "";
                // fallos = 0; // Reinicia el contador de fallos
                // for (let i = 1; i <= 6; i++) {
                //     const div = document.querySelector(`#div${i}`);
                //     div.classList.add("d-none");
                // }
                // ventanaPregunta.classList.add("d-none");
                // juego.classList.add("d-none");
                // ventanaPrimera.classList.remove("d-none");
            
        }
    }
        
        
        
    });
    function reiniciarJuego() {
        inputPalabra.value = "";
        letra.value = "";
        fallos = 0;
        
        for (let i = 1; i <= 6; i++) {
            const div = document.querySelector(`#div${i}`);
            div.classList.add("d-none");
        }
    
        casillas.innerHTML = "";
        juego.classList.add("d-none");
        ventanaPrimera.classList.remove("d-none");
        intro.removeEventListener("click",function(){});
        introLetra.addEventListener("click", function(){});
    }
});
