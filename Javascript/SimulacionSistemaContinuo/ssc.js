function simularMercado() {
  const precioInicial = parseFloat(document.getElementById("precioInicial").value);
  const volatilidad = parseFloat(document.getElementById("volatilidad").value);
  const pasos = parseInt(document.getElementById("pasos").value);

  const precios = [precioInicial]; 

  for (let i = 1; i <= pasos; i++) {
    const cambioPrecio = volatilidad * precios[i - 1] * (Math.random() - 0.5);
    const nuevoPrecio = precios[i - 1] + cambioPrecio;
    precios.push(nuevoPrecio);
  }

  return precios;
}

function simular() {
  const preciosSimulados = simularMercado();

  document.getElementById("enunciado").innerHTML = "Precios simulados del activo financiero:";
  document.getElementById("preciosSimulados").innerHTML = preciosSimulados.join("<br>");

  console.log("Precios simulados del activo financiero:");
  console.log(preciosSimulados);
}