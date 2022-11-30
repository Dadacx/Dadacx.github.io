var niezdrowe = {
    pizza: {kcal: 2.66, name: "pizzy"},
    drwal: {kcal: 2.93, name: "drwala"},
    frytki: {kcal: 2.89, name: "frytek"},
    hamburger: {kcal: 2.42, name: "hamburgera"},
    schabowy: {kcal: 3.03, name: "schabowego"},
    chipsy: {kcal: 5.17, name: "chipsów"},
    zupka_chinska: {kcal: 3.43, name: "zupki chińskiej"},
    hot_dog: {kcal: 2.89, name: "hot doga"},
    kebab: {kcal: 1.95, name: "kebaba"},
    nuggetsy: {kcal: 2.96, name: "nuggetsów"},
    lody_wloskie: {kcal: 2.22, name: "lodów włoskich"},
    zelki_haribo: {kcal: 3.43, name: "żelków haribo"},
    parowki: {kcal: 2.3, name: "parówek"},
  }
var zdrowe = {
    ziemniak: {kcal: 0.66, name: "ziemniaków"},
    kasza_jeczmienna: {kcal: 1.23, name: "kaszy jęczmiennej"},
    kasza_gryczana: {kcal: 1.23, name: "kaszy gryczanej"},
    ryz_brazowy: {kcal: 1.11, name: "ryżu brązowego"},
    platki_owsiane: {kcal: 0.74, name: "płatków owsianych"},
    jablko: {kcal: 0.52, name: "jabłek"},
    marchewka: {kcal: 0.41, name: "marchewek"},
    gruszka: {kcal: 0.57, name: "gruszek"},
    banan: {kcal: 0.88, name: "bananów"},
    arbuz: {kcal: 0.3, name: "arbuza"},
    winogrono: {kcal: 0.67, name: "winogrona"},
    truskawki: {kcal: 0.32, name: "truskawek"},
    pomarancze: {kcal: 0.47, name: "pomarańczy"},
}
function calc() {
  ilosc = parseInt(document.querySelector("#ilosc").value)
  if (!isNaN(ilosc) && ilosc<=10000 && ilosc>0) {
    document.querySelector("#validation").style.visibility = "hidden"
    niezdr = document.querySelector("#niezdrowe").value
    zdr = document.querySelector("#zdrowe").value
    console.log(ilosc)
    console.log(niezdr)
    console.log(zdr)
    //wynik = parseFloat(eval("niezdrowe."+niezdr)*ilosc/eval("zdrowe."+zdr)).toFixed(2)
    wynik = parseFloat(niezdrowe[niezdr].kcal*ilosc/zdrowe[zdr].kcal).toFixed(2)
    document.querySelector("#wynik").innerHTML = ("Zamiast "+ilosc+"g <b>"+niezdrowe[niezdr].name+"</b> możesz zjeść "+ wynik +"g <b>"+zdrowe[zdr].name)
  } else {
    document.querySelector("#validation").style.visibility = "visible"
  }
}
function kcal() {
  for (let i = 0; i < Object.keys(niezdrowe).length; i++) {
    console.log(document.querySelector("select").options[i].value +": "+niezdrowe[document.querySelector("select").options[i].value].kcal) 
  }
}