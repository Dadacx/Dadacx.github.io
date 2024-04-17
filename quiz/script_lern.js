const pytanie = []
const odp = []
rng = 0
const test = []
ilosc = 0
document.addEventListener('keyup', e => {
  if (e.key == " " || e.key == "ArrowDown") {
    klik()
  }
     if (e.key == "ArrowRight") {
    lern()
  }
})
function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
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
   fetch("https://script.google.com/macros/s/AKfycbxWaGf9FNpQaxxb2Od4_lo3BFDUGHsGWF4rtpaz9C75NvckuZAe3Q6KRfOXtlZbtFvD/exec")
  .then(res => res.json()).then(data => {for (let i = 1; i < data.content.length; i++) {
    //console.log(data.content[i]);
    pytanie[i-1] = data.content[i][0]
    odp[i-1] = data.content[i][1]
  }
  lern()
  for(i=0;i<pytanie.length; i++) {
    add = "<tr><td>" + pytanie[i] + "</td><td>" + odp[i] + "</td></tr>"
    document.querySelector("tbody").innerHTML = document.querySelector("tbody").innerHTML + add
    //arr.push({data:data.content[i][0],ilosc:data.content[i][1]})
  }})
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
