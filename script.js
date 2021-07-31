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
  ///Bitcoin
  let bitcoin = Intl.NumberFormat().format(data4.ask);
  let spanBitcoin = document.getElementById("bitcoin");
  spanBitcoin.innerHTML = bitcoin;
  ///Ethereum
  let ethereum = Intl.NumberFormat().format(data5.ask);
  let spanEthereum = document.getElementById("ethereum");
  spanEthereum.innerHTML = ethereum;
  ///DAI
  let daiCompra = parseFloat(data6.bid).toFixed(2);
  let spanDaiCompra = document.getElementById("daiCompra");
  spanDaiCompra.innerHTML = daiCompra;
  let daiVenta = parseFloat(data6.ask).toFixed(2);
  let spanDaiVenta = document.getElementById("daiVenta");
  spanDaiVenta.innerHTML = daiVenta;
};

//let urlOpcional = "http://estudiodelamo.com/wp-admin/admin-ajax.php?action=wp_ajax_ninja_tables_public_action&table_id=18156&target_action=get-all-data&default_sorting=manual_sort&ninja_table_public_nonce=d2f259d80a";
let url7 = "https://apis.datos.gob.ar/series/api/series/?ids=145.3_INGNACUAL_DICI_M_38&limit=1000&sort=desc";
getData7()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 7.");
    console.error(error);
  });
async function getData7() {
  const response7 = await fetch(url7);
  const data7 = await response7.json();
  let inflacionMensual = ((data7.data[0][1]) * 100).toFixed(2);
  let spanInflacionMensual = document.getElementById("inflacionMensual");
  spanInflacionMensual.innerHTML = inflacionMensual;
};

let url8 = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/6?source=jhu&timelines=true";
/// urlOpcional https://covid-api.mmediagroup.fr/v1/cases?country=Argentina
getData8()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 8.");
    console.error(error);
  });
async function getData8() {
  const response8 = await fetch(url8);
  const data8 = await response8.json();
  /// COVID Casos
  let covidTotal = Intl.NumberFormat().format(data8.location.latest.confirmed);
  let spanCovidTotal = document.getElementById("covidTotal");
  spanCovidTotal.innerHTML = covidTotal;
  let covidDias = Object.values(data8.location.timelines.confirmed.timeline);
  let covidAyer = Intl.NumberFormat().format((covidDias[covidDias.length - 1]) - (covidDias[covidDias.length - 2]));
  let spanCovidAyer = document.getElementById("covidAyer");
  spanCovidAyer.innerHTML = covidAyer;
  /// COVID Datos
  let covidFallecidos = Intl.NumberFormat().format(data8.location.latest.deaths);
  let spanCovidFallecidos = document.getElementById("covidFallecidos");
  spanCovidFallecidos.innerHTML = covidFallecidos;
  let covidRecuperados = Intl.NumberFormat().format(data8.location.latest.recovered);
  let spanCovidRecuperados = document.getElementById("covidRecuperados");
  spanCovidRecuperados.innerHTML = covidRecuperados;
};

let url9 = "https://covid-api.mmediagroup.fr/v1/vaccines";
getData9()
  .catch(error => {
    console.log("Ups! Parece que hay un error al cargar la API 9.");
    console.error(error);
  });
async function getData9() {
  const response9 = await fetch(url9);
  const data9 = await response9.json();
  /// COVID Vacunacion
  let covid1Dosis = Intl.NumberFormat().format(data9.Argentina.All.people_partially_vaccinated);
  let spanCovid1Dosis = document.getElementById("covid1Dosis");
  spanCovid1Dosis.innerHTML = covid1Dosis;
  let covid2Dosis = Intl.NumberFormat().format(data9.Argentina.All.people_vaccinated);
  let spanCovid2Dosis = document.getElementById("covid2Dosis");
  spanCovid2Dosis.innerHTML = covid2Dosis;
  /// COVID Vacunacion Porcentaje
  let population = data9.Argentina.All.population;
  let covid1DosisPor = ((data9.Argentina.All.people_partially_vaccinated) * 100 / (population)).toFixed(2);
  let spanCovid1DosisPor = document.getElementById("covid1DosisPor");
  spanCovid1DosisPor.innerHTML = covid1DosisPor;
  let covid2DosisPor = ((data9.Argentina.All.people_vaccinated) * 100 / (population)).toFixed(2);
  let spanCovid2DosisPor = document.getElementById("covid2DosisPor");
  spanCovid2DosisPor.innerHTML = covid2DosisPor;
};



// var fecha2 = new Date(data8.location.last_updated);
// console.log(fecha2);
// console.log("Actualizado " + fecha2.getDate() + "/" + (fecha2.getMonth() + 1) + "/" + fecha2.getFullYear() + " - " + fecha2.getHours() + ":" + fecha2.getMinutes());