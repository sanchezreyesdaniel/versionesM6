console.log('hola');
const intro = document.querySelector("#btnIntroPalabra");
const ventanaPrimera = document.querySelector('#ventanaIntroPalabra');
const juego = document.querySelector('#juego');

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
            } else {
               
               
                
            }
        }
        let fallos = 0;
        // let suma=0
        // Cuando se produce un fallo
        if (!letraCorrecta) {
            fallos++;
            // suma= suma + fallos
            // console.log(`Has fallado ${suma} veces.`);
            const imagenes = ["img1", "img2", "img3", "img4", "img5", "img6"];
            const imagenId = imagenes[fallos - 1];
            const imagen = document.querySelector(`#${imagenId}`);
            
        }
        
        
    });
});
