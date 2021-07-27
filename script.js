let url = "https://mercados.ambito.com//home/general";
getData()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 1.");
    console.error(error);
  });
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  /// Fecha
  let update = data[3].fecha;
  let date = document.getElementsByClassName("update");
  let contador = 0;
  for (var i = 0; i < date.length; i++) {
    date[contador].innerHTML = update;
    contador++;
  }
  /// Dolar Oficial
  let oficialCompra = parseFloat(data[0].compra.replace(/,/g, '.')).toFixed(2);
  let spanOfiCompra = document.getElementById("oficialCompra");
  spanOfiCompra.innerHTML = oficialCompra;
  let oficialVenta = parseFloat(data[0].venta.replace(/,/g, '.')).toFixed(2);
  let spanOfiVenta = document.getElementById("oficialVenta");
  spanOfiVenta.innerHTML = oficialVenta;
  /// Dolar Blue
  let blueCompra = parseFloat(data[1].compra.replace(/,/g, '.')).toFixed(2);
  let spanBlueCompra = document.getElementById("blueCompra");
  spanBlueCompra.innerHTML = blueCompra;
  let blueVenta = parseFloat(data[1].venta.replace(/,/g, '.')).toFixed(2);
  let spanBlueVenta = document.getElementById("blueVenta");
  spanBlueVenta.innerHTML = blueVenta;
  /// Dolar Turista
  let turistaCompra = parseFloat(data[3].compra.replace(/,/g, '.')).toFixed(2);
  let spanTuristaCompra = document.getElementById("turistaCompra");
  spanTuristaCompra.innerHTML = turistaCompra;
  let turistaVenta = parseFloat(data[3].venta.replace(/,/g, '.')).toFixed(2);
  let spanTuristaVenta = document.getElementById("turistaVenta");
  spanTuristaVenta.innerHTML = turistaVenta;
  /// Oro
  let oroCompra = parseFloat(data[13].compra.replace(/,/g, '.')).toFixed(2);
  let spanOroCompra = document.getElementById("oroCompra");
  spanOroCompra.innerHTML = oroCompra;
  let oroVenta = parseFloat(data[13].ultimo.replace(/,/g, '.')).toFixed(2);
  let spanOroVenta = document.getElementById("oroVenta");
  spanOroVenta.innerHTML = oroVenta;
  /// Riesgo Pais
  let riesgo = data[7].ultimo;
  let spanRiesgoPais = document.getElementById("riesgoPais");
  spanRiesgoPais.innerHTML = riesgo;
};

let url2 = "https://api.bluelytics.com.ar/v2/latest";
getData2()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 2.");
    console.error(error);
  });
async function getData2() {
  const response2 = await fetch(url2);
  const data2 = await response2.json();
  /// Euro Oficial
  let euroCompra = data2.oficial_euro.value_buy.toFixed(2);
  let spanEuroCompra = document.getElementById("euroCompra");
  spanEuroCompra.innerHTML = euroCompra;
  let euroVenta = data2.oficial_euro.value_sell.toFixed(2);
  let spanEuroVenta = document.getElementById("euroVenta");
  spanEuroVenta.innerHTML = euroVenta;
  /// Euro Blue
  let euroBlueCompra = data2.blue_euro.value_buy.toFixed(2);
  let spanEuroBlueCompra = document.getElementById("euroBlueCompra");
  spanEuroBlueCompra.innerHTML = euroBlueCompra;
  let euroBlueVenta = data2.blue_euro.value_sell.toFixed(2);
  let spanEuroBlueVenta = document.getElementById("euroBlueVenta");
  spanEuroBlueVenta.innerHTML = euroBlueVenta;
  /// Euro Turista
  let euroTuristaCompra = data2.oficial_euro.value_buy.toFixed(2);
  let spanEuroTuristaCompra = document.getElementById("euroTuristaCompra");
  spanEuroTuristaCompra.innerHTML = euroTuristaCompra;
  let euroTuristaVentaValor = parseInt(data2.oficial_euro.value_sell.toFixed(2));
  let euroTuristaVenta = (euroTuristaVentaValor * 0.65) + euroTuristaVentaValor;
  let spanEuroTuristaVenta = document.getElementById("euroTuristaVenta");
  spanEuroTuristaVenta.innerHTML = euroTuristaVenta.toFixed(2);
};

let url3 = "https://www.dolarsi.com/api/api.php?type=cotizador";
getData3()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 3.");
    console.error(error);
  });
async function getData3() {
  const response3 = await fetch(url3);
  const data3 = await response3.json();
  /// Real Oficial
  let realCompra = parseFloat(data3[2].casa.compra.replace(/,/g, '.')).toFixed(2);
  let spanRealCompra = document.getElementById("realCompra");
  spanRealCompra.innerHTML = realCompra;
  let realVenta = parseFloat(data3[2].casa.venta.replace(/,/g, '.')).toFixed(2);
  let spanRealVenta = document.getElementById("realVenta");
  spanRealVenta.innerHTML = realVenta;
  /// Real Blue
  let spanRealBlueCompra = document.getElementById("realBlueCompra");
  spanRealBlueCompra.innerHTML = (realCompra * 1.9456).toFixed(2); 
  let spanRealBlueVenta = document.getElementById("realBlueVenta");
  spanRealBlueVenta.innerHTML = (realVenta * 1.9578).toFixed(2);
  /// Real Turista
  let spanRealTuristaCompra = document.getElementById("realTuristaCompra");
  spanRealTuristaCompra.innerHTML = realCompra;
  let spanRealTuristaVenta = document.getElementById("realTuristaVenta");
  spanRealTuristaVenta.innerHTML = (realVenta * 1.65).toFixed(2);
  /// Libra Oficial
  let libraCompra = parseFloat(data3[3].casa.compra.replace(/,/g, '.')).toFixed(2);
  let spanLibraCompra = document.getElementById("libraCompra");
  spanLibraCompra.innerHTML = libraCompra;
  let libraVenta = parseFloat(data3[3].casa.venta.replace(/,/g, '.')).toFixed(2);
  let spanLibraVenta = document.getElementById("libraVenta");
  spanLibraVenta.innerHTML = libraVenta;
  /// Libra Blue
  let spanLibraBlueCompra = document.getElementById("libraBlueCompra");
  spanLibraBlueCompra.innerHTML = (libraCompra * 2.1055).toFixed(2); 
  let spanLibraBlueVenta = document.getElementById("libraBlueVenta");
  spanLibraBlueVenta.innerHTML = (libraVenta * 1.8152).toFixed(2);
  /// Libra Turista
  let spanLibraTuristaCompra = document.getElementById("libraTuristaCompra");
  spanLibraTuristaCompra.innerHTML = libraCompra;
  let spanLibraTuristaVenta = document.getElementById("libraTuristaVenta");
  spanLibraTuristaVenta.innerHTML = (libraVenta * 1.65).toFixed(2);
};

let url4 = "https://criptoya.com/api/buenbit/btc/ars";
let url5 = "https://criptoya.com/api/buenbit/eth/ars";
let url6 = "https://criptoya.com/api/buenbit/dai/ars";
getData456()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 456.");
    console.error(error);
  });
async function getData456() {
  const response4 = await fetch(url4);
  const response5 = await fetch(url5);
  const response6 = await fetch(url6);
  const data4 = await response4.json();
  const data5 = await response5.json();
  const data6 = await response6.json();
  ///Criptoss
  console.log(data4);
  console.log(data5);
  console.log(data6);
};