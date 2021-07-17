let url = "https://mercados.ambito.com//home/general";
getData()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API.");
    console.error(error);
  });
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  /// Fecha
  let update = data[3].fecha;
  let date = document.getElementsByClassName("update");
  date[0].innerHTML = update;
  date[1].innerHTML = update;
  date[2].innerHTML = update;
  date[3].innerHTML = update;
  /// Oficial
  let oficialCompra = data[0].compra;
  let spanOfiCompra = document.getElementById("oficialCompra");
  spanOfiCompra.innerHTML = oficialCompra;
  let oficialVenta = data[0].venta;
  let spanOfiVenta = document.getElementById("oficialVenta");
  spanOfiVenta.innerHTML = oficialVenta;
  /// Blue
  let blueCompra = data[3].compra;
  let spanBlueCompra = document.getElementById("blueCompra");
  spanBlueCompra.innerHTML = blueCompra;
  let blueVenta = data[3].venta;
  let spanBlueVenta = document.getElementById("blueVenta");
  spanBlueVenta.innerHTML = blueVenta;
  /// Turista
  let turistaCompra = data[1].compra;
  let spanTuristaCompra = document.getElementById("turistaCompra");
  spanTuristaCompra.innerHTML = turistaCompra;
  let turistaVenta = data[1].venta;
  let spanTuristaVenta = document.getElementById("turistaVenta");
  spanTuristaVenta.innerHTML = turistaVenta;
  /// RiesgoPais
  let riesgo = data[7].ultimo;
  let spanRiesgoPais = document.getElementById("riesgoPais");
  spanRiesgoPais.innerHTML = riesgo;
};