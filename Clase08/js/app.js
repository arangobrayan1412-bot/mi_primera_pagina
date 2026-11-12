/* const formato = document.getElementById("formato");
const mensaje = document.getElementById("mensaje")

formato. addEventListener ("change", function ( ) {
      switch (formato. value) {
          case "pdf":
               mensaje. textContent = "Documento para impresión.";
               break;
          case "excel":
               mensaje. textContent = "Archivo editable.";
               break;
          case "csv":
               mensaje. textContent = "Datos separados por comas.";
               break;
          default:
               mensaje. textContent = "Seleccione un formato.";
      }
    }); 

const selectVehiculo = document.getElementById('tipoVehiculo');
const parrafoMensaje = document.getElementById('mensaje');

selectVehiculo.addEventListener('change', function() {
    const vehiculoSeleccionado = selectVehiculo.value;
    let mensaje = '';

    switch (vehiculoSeleccionado) {
        case 'bicicleta':
            mensaje = 'Has seleccionado una bicicleta.';
            break;
        case 'motocicleta':
            mensaje = 'Has seleccionado una motocicleta.';
            break;
        case 'automovil':
            mensaje = 'Has seleccionado un automóvil.';
            break;
        case 'camion':
            mensaje = 'Has seleccionado un camión.';
            break;
        default:
            mensaje = 'Por favor, selecciona un tipo de vehículo válido.';
            break;
    }

    parrafoMensaje.textContent = mensaje;
});   

const limite = document.getElementById("limite");
const boton = document.getElementById("generar");
const  resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    let maximo = Number(limite. value);
    let numero = 1;
    let texto = ""

    while (numero <= maximo) {
       texto += numero + " "; numero++;
    }
    resultado. textContent = texto;
});  */

 /* let numero = 1;
do {
    console.log(numero);
    numero++;

} while (numero <= 5); 
 */
/* let numero;
do {
    numero = Number(
        prompt("Ingrese un numero entre 1 y 10:")
    );

} while(numero < 1 || numero > 10);
console.log("Valor aceptado:", numero); 
 */
/* for(let i = 1; 1 <= 5; i++){
    console.log(i);
};

 */

/* function mostrarTabla() {
    let numero = document.getElementById("cajaNumero").value;
    
    let textoResultado = "";

    for (let i = 1; i <= 10; i++) {
        let multiplicacion = numero * i;
        textoResultado += numero + " x " + i + " = " + multiplicacion + "<br>";
    }

    document.getElementById("resultado").innerHTML = textoResultado;
} */

/* let semanas = prompt("Ingrese el numero de semanas:");
let ahorro = prompt("Ingrese la cantidad a ahorrar:");
let ahorroUsu = Number(ahorro);
for (let semanas = Number(semanas); semana <= semanas; semanas++){
    ahorro += ahorro;
    alert ("Semana " + semanas + " ahorro: $" + ahorro);
} */

/* const cantidad = document.getElementById("cantidad");
const crear = document.getElementById("crear");
const lista = document.getElementById("lista");

crear.addEventListener("click", function () {

    let limite = Number(cantidad.value);
    let contenido = "";

    for (let i = 1; i <= limite; i++) {
        contenido += "<p>Registro #" + i + "</p>";
    }
    lista.innerHTML = contenido;
}) */

const producto = document.getElementById("producto");

const lotes = document. getElementById ("lotes");

const botonSimular = document.getElementById(" simular");

const resumen = document. getElementById("resumen") ;

const detalle = document.getElementById("detalle");

botonSimular.addEventListener("click", function () {

let tipoProducto = producto.value;
let cantidadLotes = Number (lotes.value);
consolelog(tipoProducto);
console.log(cantidadLotes);
});

if ( tipoProducto === "" || cantidadLotes <= 0) {

    resumen.textContent = "Ingrese datos validos.";

    detalle.innerHTML = "";

    return;
}

let unidadesPorLote = 0;
    let nombreProducto = "";
    switch (tipoProducto) {
        case "a":
        unidadesPorLote = 12;
        nombreProducto = "Producto A"
        break;

        case "b":
        unidadesPorLote = 20;
        nombreProducto = "Producto B"
        break;

        case "c":
        unidadesPorLote = 8;
        nombreProducto = "Producto C"
        break;
    };