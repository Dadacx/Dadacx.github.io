const pytanie = ["oceniać","rozwiązanie","podstawowa wiedza","zmieniający się","wymagający","w przypadku","ciągły","spójność danych","baza danych","jednostka"]
const odp = ["evaluate","solution","fundamental knowledge","varying","demanding","in the event","constant","data integrity","database","entity"]
rng = 0
const test = []
ilosc = 0
zle = 0
  function next() {
      document.getElementById("pytanie").innerHTML = pytanie[rng]
      document.getElementById("in").value = null
      document.getElementById("odp_btn").style.visibility = "hidden"
      document.getElementById("blad").style.visibility = "hidden"
      document.getElementById("odp").innerHTML = "&nbsp"
  }
 function repeatingNumber() {
     yes = 0
     for(let i = 0; i < test.length +1; i++) {
         if(rng==test[i]) {
            getRandomNumber(0,pytanie.length) //tu zmienić <-----------------------------------------------
            yes = 0
            break;
         } else yes = 1
     }
     if(yes==1) {
         next()
     }
     test.push(rng)
     console.log(test)
 }
 function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    rng = Math.floor(Math.random() * (max - min)) + min;
    repeatingNumber()
  }
function load() {
    getRandomNumber(0,pytanie.length) //tu zmienić <------------------------------------------------------
    document.getElementById("pytanie").innerHTML = pytanie[rng]
    document.getElementById("progress").innerHTML = "Pytanie: " + parseInt(ilosc + 1) + "/" + pytanie.length
}
function pokaz() {
    document.getElementById("odp").innerHTML = odp[rng]
}
function check(){
    ilosc++
    u_odp = document.getElementById("in").value
    if(u_odp == odp[rng]) {
        if(ilosc==pytanie.length) {
            end();
            window.open("end.html","_top")
        } else {
        getRandomNumber(0,pytanie.length) //tu zmienić <--------------------------------------
        document.getElementById("in").focus()
        }
    } else {
        document.getElementById("odp_btn").style.visibility = "visible"
        document.getElementById("blad").style.visibility = "visible"
        zle++
    }
    document.getElementById("progress").innerHTML = "Pytanie: " + parseInt(ilosc + 1) + "/" + pytanie.length
}
function end() {
    x = pytanie.length - zle
    procent = parseFloat(x/pytanie.length*100)
    procent_2_po_przecinku = procent.toFixed(2)
    sessionStorage.setItem("wynik", "Ukończyłeś Quiz z wynikiem: " + procent_2_po_przecinku + "%");
}
