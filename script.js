const btnSuma = document.getElementById('idSuma');
const btnResta = document.getElementById('idResta');
const btnMultiplicacion = document.getElementById('idMultiplicacion');
const btnDivision = document.getElementById('idDivision');

btnSuma.addEventListener("click", () => {
    const suma = parseInt(document.getElementById('idOperando1').value) + 
    parseInt(document.getElementById('idOperando2').value);
    document.getElementById("idResultado").innerHTML = suma;
});

btnResta.addEventListener("click", () => {
    const suma = parseInt(document.getElementById('idOperando1').value) - 
    parseInt(document.getElementById('idOperando2').value);
    document.getElementById("idResultado").innerHTML = suma;
});

btnMultiplicacion.addEventListener("click", () => {
    const suma = parseInt(document.getElementById('idOperando1').value) * 
    parseInt(document.getElementById('idOperando2').value);
    document.getElementById("idResultado").innerHTML = suma;
});

btnDivision.addEventListener("click", () => {
    const suma = parseInt(document.getElementById('idOperando1').value) / 
    parseInt(document.getElementById('idOperando2').value);
    document.getElementById("idResultado").innerHTML = suma;
});