const producto = document.getElementById("producto");
const lotes = document.getElementById("lotes");
const botonSimular = document.getElementById("botonSimular");
const resumen = document.getElementById("resumen");
const detalle = document.getElementById("detalle");

botonSimular.addEventListener("click", function () {

    let tipoProducto = producto.value;
    let cantidadLotes = Number(lotes.value);

    console.log(tipoProducto);
    console.log(cantidadLotes);

    if (tipoProducto === "" || cantidadLotes <= 0) {
        resumen.textContent = "Ingrese datos válidos.";
        detalle.innerHTML = "";
        return;
    }

    let unidadesPorLote = 0;
    let nombreProducto = "";

    switch (tipoProducto) {
        case "a":
            unidadesPorLote = 12;
            nombreProducto = "Producto A";
            break;

        case "b":
            unidadesPorLote = 20;
            nombreProducto = "Producto B";
            break;

        case "c":
            unidadesPorLote = 8;
            nombreProducto = "Producto C";
            break;
    }

    let totalCalculado = unidadesPorLote * cantidadLotes;

    if (totalCalculado > 200) {
        resumen.textContent = "La solicitud es mayor a 200 unidades (Total: " + totalCalculado + " unidades).";
        detalle.innerHTML = "";
        return;
    }

    let contenido = "";
    let totalUnidades = 0;

    for (let i = 1; i <= cantidadLotes; i++) {
        totalUnidades += unidadesPorLote;

        contenido +=
            "<p>Lote " + i +
            " | " + nombreProducto +
            " | " + unidadesPorLote +
            " unidades | Acumulado: " + totalUnidades + "</p>";
    }

    resumen.textContent =
        nombreProducto +
        " | Lotes: " + cantidadLotes +
        " | Total: " + totalUnidades +
        " unidades";

    detalle.innerHTML = contenido;
});