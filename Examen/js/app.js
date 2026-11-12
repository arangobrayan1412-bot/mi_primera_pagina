const selectProducto = document.getElementById("producto");
const inputLotes = document.getElementById("lotes");
const btnCalcular = document.getElementById("calcular");
const pMensaje = document.getElementById("mensaje");
const pResumen = document.getElementById("resumen");
const divDetalle = document.getElementById("detalle");

btnCalcular.addEventListener("click", () => {
    pMensaje.textContent = "";
    pResumen.textContent = "";
    divDetalle.innerHTML = "";

    const producto = selectProducto.value;
    const lotes = parseInt(inputLotes.value);

    if (producto === "") {
        pMensaje.textContent = "Error: Por favor seleccione un producto.";
        return;
    }

    if (isNaN(lotes) || lotes < 1 || lotes > 20) {
        pMensaje.textContent = "Error: Ingrese una cantidad de lotes válida (entre 1 y 20).";
        return;
    }

    let unidadesPorLote = 0;

    switch (producto) {
        case "a":
            unidadesPorLote = 10;
            break;
        case "b":
            unidadesPorLote = 15;
            break;
        case "c":
            unidadesPorLote = 25;
            break;
    }

    let acumulado = 0;
    let htmlDetalle = `<p><strong>Producto: ${producto.toUpperCase()}</strong></p>`;

    for (let i = 1; i <= lotes; i++) {
        acumulado += unidadesPorLote;
        htmlDetalle += `<p>Lote ${i}: ${unidadesPorLote} | Acum. : ${acumulado}</p>`;
    }

    let nivel = "";

    if (acumulado < 100) {
        nivel = "bajo";
    } else if (acumulado <= 200) {
        nivel = "medio";
    } else {
        nivel = "alto";
    }

    divDetalle.innerHTML = htmlDetalle;
    pResumen.innerHTML = `
        <strong>Total: ${acumulado} unidades</strong><br>
        <strong>Nivel: ${nivel}</strong>
    `;
});
