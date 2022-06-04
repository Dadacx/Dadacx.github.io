const pytanie = ["oceniać","rozwiązanie","podstawowa wiedza","zmieniający się","wymagający","w przypadku","ciągły","spójność danych","baza danych","jednostka","komputer","procesor","zapytanie","plik","programista","arkusz kalkulacyjny","pośród","zapis/rekord"]
const odp = ["evaluate","solution","fundamental knowledge","varying","demanding","in the event","constant","data integrity","database","entity","computer","processor","query","file","developer","spreadsheet","among","record"]
rng = 0
const test = []
ilosc = 1
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
    document.getElementById("progress").innerHTML = "Pytanie: " + parseInt(ilosc) + "/" + pytanie.length
}
function pokaz() {
    document.getElementById("odp").innerHTML = odp[rng]
}
function check(){
    u_odp = document.getElementById("in").value
    if(u_odp.toLowerCase() == odp[rng].toLowerCase()) {
        if(ilosc==pytanie.length) {
            end();
            window.open("end.html","_top")
        } else {
        getRandomNumber(0,pytanie.length) //tu zmienić <--------------------------------------
        document.getElementById("in").focus()
        ilosc++
        }
    } else {
        document.getElementById("odp_btn").style.visibility = "visible"
        document.getElementById("blad").style.visibility = "visible"
        document.getElementById("in").classList.add("shake")
        document.getElementById("in").focus()
        setTimeout(()=>{
            document.getElementById("in").classList.remove('shake')
          },600)
        zle++
    }
    document.getElementById("progress").innerHTML = "Pytanie: " + parseInt(ilosc) + "/" + pytanie.length
    return false
}
function end() {
    x = pytanie.length - zle
    procent = parseFloat(x/pytanie.length*100)
    procent_2_po_przecinku = procent.toFixed(2)
    sessionStorage.setItem("wynik", procent_2_po_przecinku);
}
function exit() {
    if (confirm("Czy na pewno chcesz opuścić quiz?") == true) {
        window.open('index.html','_top')
      }
}