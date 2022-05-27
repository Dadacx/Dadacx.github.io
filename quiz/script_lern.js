const pytanie = ["oceniać","rozwiązanie","podstawowa wiedza","zmieniający się","wymagający","w przypadku","ciągły","spójność danych","baza danych","jednostka","komputer","procesor","zapytanie","plik","programista","arkusz kalkulacyjny","pośród","zapis/rekord"]
const odp = ["evaluate","solution","fundamental knowledge","varying","demanding","in the event","constant","data integrity","database","entity","computer","processor","query","file","developer","spreadsheet","among","record"]
rng = 0
const test = []
ilosc = 0
function nastepny() {
    document.getElementById("lern").innerHTML = pytanie[rng]
    document.getElementById("odp_lern").innerHTML = "&nbsp;"
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
        nastepny()
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
   /*getRandomNumber(0,pytanie.length) //tu zmienić <------------------------------------------------------
   document.getElementById("lern").innerHTML = pytanie[rng]
   document.getElementById("progress").innerHTML = "Pytanie: " + parseInt(ilosc + 1) + "/" + pytanie.length*/
   lern()
}
function lern() {
    if(ilosc==pytanie.length) {
        document.getElementById("lern").innerHTML = "KONIEC"
        document.getElementById("progress").innerHTML = "&nbsp;"
        document.getElementById("odp_lern").innerHTML = "&nbsp;"
        document.getElementById("again").innerHTML = "JESZCZE RAZ!"
        document.getElementById("again").setAttribute("onclick","document.location.reload(true)")
    } else {
        getRandomNumber(0,pytanie.length) //tu zmienić <------------------------------------------------------
    ilosc++
    document.getElementById("progress").innerHTML = "Pytanie: " + parseInt(ilosc) + "/" + pytanie.length
    }
}
function klik() {
    document.getElementById("odp_lern").innerHTML = odp[rng]
}