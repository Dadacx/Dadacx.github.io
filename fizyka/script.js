var niezdrowe = {
    pizza: 2.66,
    drwal: 2.93,
    frytki: 2.89,
    hamburger: 2.42,
    schabowy: 3.03,
    chipsy: 5.17,
    zupka_chinska: 3.43,
    hot_dog: 2.89,
    kebab: 1.95,
    nuggetsy: 2.96,
    lody_wloskie: 2.22,
    zelki_haribo: 3.43,
    parowki: 2.3,
  }
var zdrowe = {
    ziemniak: 0.66,
    kasza_jeczmienna: 1.23,
    kasza_gryczana: 1.23,
    ryz_brazowy: 1.11,
    platki_owsiane: 0.74,
    jablko: 0.52,
    marchewka: 0.41,
    gruszka: 0.57,
    banan: 0.88,
    arbuz: 0.3,
    winogrono: 0.67,
    truskawki: 0.32,
    pomarancze: 0.47,
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
    wynik = parseFloat(niezdrowe[niezdr]*ilosc/zdrowe[zdr]).toFixed(2)
    document.querySelector("#wynik").innerHTML = ("Zamiast "+ilosc+"g <b>"+niezdr+"</b> możesz zjeść "+ wynik +"g <b>"+zdr)
  } else {
    document.querySelector("#validation").style.visibility = "visible"
  }
}