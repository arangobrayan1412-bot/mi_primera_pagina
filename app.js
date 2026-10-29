const inputFavorito = document.getElementById('numeroFavorito');
const mensajeJuego = document.getElementById('mensajeJuego');

// Define aquí tu número favorito (cámbialo por el número real que deseas)
const numeroFavoritoSecreto = 14; 

inputFavorito.addEventListener('input', () => {
    const valorIngresado = Number(inputFavorito.value);

    // Si el input está vacío, limpiamos el mensaje
    if (inputFavorito.value === "") {
        mensajeJuego.textContent = "";
        mensajeJuego.className = "mensaje-juego";
        return;
    }

    // Comparamos el número y aplicamos la clase correspondiente (verde o rojo)
    if (valorIngresado === numeroFavoritoSecreto) {
        mensajeJuego.textContent = "¡Felicitaciones! Adivinaste mi número favorito 🎉";
        mensajeJuego.className = "mensaje-juego correcto"; // Aplica el verde forzado
    } else if (valorIngresado < numeroFavoritoSecreto) {
        mensajeJuego.textContent = "Prueba con un número más alto 📈";
        mensajeJuego.className = "mensaje-juego error"; // Aplica el rojo forzado
    } else {
        mensajeJuego.textContent = "Prueba con un número más bajo 📉";
        mensajeJuego.className = "mensaje-juego error"; // Aplica el rojo forzado
    }
});

function cambiarPasion() {
    const select = document.getElementById('selectPasiones').value;
    const texto = document.getElementById('textoPasion');
    const imagen = document.getElementById('imagenPasion');

    switch (select) {
        case 'natacion':
            texto.textContent = "Desde los 6 años estube en clases de natacion, alcance el nivel superior pero me retire a los 14 años, la practique durante 8 años, gane muchas medallas 🏅 y trofeos 🏆 y me volvi profesional.";
            imagen.src = "img/natacion.jpg"; 
            break;

        case 'motos':
            texto.textContent = "Me apasionan las motos y mi favorita es la YZ, algun dia me la pienso comprar... desde los 13 años manejo moto 😎, me regalaron mi primera moto a los 14.";
            imagen.src = "img/moto.jpg"; 
            break;

        case 'videojuegos':
            texto.textContent = "Me gustan mucho los juegos en linea porque uno puede jugar con amigos o en otros casos hacer amigos en el juego, el juego que mas me gusta es el Free Fire.";
            imagen.src = "img/freefire.jpg"; 
            break;

        default:
            texto.textContent = "Selecciona una pasión.";
            imagen.src = "img/programacion.jpg";
            break;
    }
}

function mostrarMensajeInstructor() {
    alert("Profesor, sus clases son muy metodicas, explica muy bien, perooo... si depronto tengo alguna falta le agradeceria que me la pusiera como tardanza porque nunca he faltado jajaja");
}