document.getElementById("btnSimular").addEventListener("click", function () {

    const tipoProducto = document.getElementById("producto").value;
    const cantidadLotes = parseInt(document.getElementById("lotes").value);
    const contenedorReporte = document.getElementById("reporte");

    // Validación básica
    if (isNaN(cantidadLotes) || cantidadLotes <= 0) {
        alert("Por favor, ingresa una cantidad de lotes válida (mayor a 0).");
        return;
    }

    let valorPorLote = 0;
    let nombreProducto = "";

    switch (tipoProducto) {
        case "figura":
            nombreProducto = "Figura Monumental";
            valorPorLote = 1500000;
            break;
        case "manguera":
            nombreProducto = "Rollo de Manguera LED";
            valorPorLote = 350000;
            break;
        case "cascada":
            nombreProducto = "Cortina / Cascada de Luces";
            valorPorLote = 180000;
            break;
        default:
            valorPorLote = 0;
            break;
    }

    let costoTotalProduccion = 0;
    let detalleLotesHTML = "<ul>";

    for (let i = 1; i <= cantidadLotes; i++) {
        costoTotalProduccion += valorPorLote;
        detalleLotesHTML += `<li><strong>Lote #${i}:</strong> ${valorPorLote.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</li>`;
    }

    detalleLotesHTML += "</ul>";

    contenedorReporte.innerHTML = `
        <h3>Reporte de Producción Navideña</h3>
        <p><strong>Artículo seleccionado:</strong> ${nombreProducto}</p>
        <p><strong>Cantidad de lotes:</strong> ${cantidadLotes}</p>
        <hr>
        <h4>Detalle del costo por lote:</h4>
        ${detalleLotesHTML}
        <hr>
        <p><strong>Costo total de producción:</strong> ${costoTotalProduccion.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</p>
    `;
});