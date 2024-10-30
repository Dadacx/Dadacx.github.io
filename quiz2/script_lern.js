const pytanie = [
    "pierścionek",
    "pójść wcześniej spać",
    "rozstać się",
    "zerwać z kimś",
    "opakować/odpakować prezent",
    "wziąć czyjąś stronę",
    "połączyć się węzłem małżeńskim",
    "walentynki",
    "robić zdjęcia",
    "nie odzywać się do kogoś",
    "grać na instrumencie muzycznym",
    "przyjaźń",
    "grób",
    "zorganizować imprezę, przyjęcie",
    "szanować innych ludzi",
    "pójść z psem na spacer",
    "wkroczyć, podjąć działania",
    "zaprzestać",
    "brać udział w",
    "jeździć na rolkach",
    "pójść na imprezę",
    "pasierb/pasierbica",
    "mieć miejsce",
    "przybrane dziecko",
    "siostrzeniec, bratanek",
    "bal przebierańców",
    "rocznica",
    "chodzić na koncerty",
    "naładować baterie",
    "nastawić pranie",
    "pomagać",
    "patrzeć na kogoś z góry",
    "dać (dziecku) szlaban na wychodzenie z domu",
    "Wielkanoc",
    "obchodzić/uroczystość",
    "ślub",
    "wartości rodzinne",
    "być podobnym do kogoś",
    "ojczym/macocha",
    "biegać (rekreacyjnie)",
    "obrażać",
    "nadawać na tej samej fali",
    "stracić z oczu",
    "wysoka odprawa",
    "zamieszkać z kimś",
    "cierpieć w milczeniu",
    "wstrzymać wypłatę kieszonkowego",
    "kuzyn",
    "opłakiwać",
    "relaksować się",
    "budzić się",
    "wyładować na kimś negatywne emocje",
    "wyładować (o emocjach)",
    "nastawić budzik",
    "rozwieść się",
    "śmiertelny wróg",
    "panna młoda",
    "na krawędzi",
    "radzić sobie",
    "nabożeństwo, ceremonia",
    "konkurs",
    "kościół",
    "wieniec z kwiatów",
    "najbliższa rodzina",
    "korzystać (np. z prawa do czegoś)",
    "karnawał",
    "druhna",
    "zachowywać się/zachowanie",
    "wytłumaczyć swój punkt widzenia",
    "plotkować",
    "zagrzać",
    "uprawiać gimnastykę",
    "wujek",
    "być świadkiem",
    "ścielić łóżko",
    "koleżeństwo, braterstwo",
    "pogodzić się z",
    "daleki kuzyn",
    "parada karnawałowa",
    "podkochiwać się w kimś",
    "wykorzystać coś",
    "przestawać z kimś",
    "zdenerwowany, nakręcony",
    "w separacji",
    "załatwiać sprawy",
    "stawiać granice",
    "niespodzianka, prezent z okazji urodzin",
    "uczyć się do późna",
    "opowiadać historie",
    "przedyskutować sprawę",
    "jeść na mieście",
    "uzasadnione zmartwienie",
    "przyjęcie",
    "mąż",
    "położyć się",
    "wywiesić pranie",
    "szwagier",
    "Boże Narodzenie",
    "kłócić się z",
    "kolega z pracy",
    "zdradzić kogoś",
    "sierota",
    "ciotka",
    "wyznaczać podstawowe zasady",
    "emeryt/emerytka",
    "zbesztać kogoś, zrugać",
    "gratulować",
    "mieć romans",
    "przebrać się za",
    "dziadkowie",
    "spotykać się ze znajomymi",
    "uciec z domu",
    "najlepszy przyjaciel",
    "pan młody",
    "mieć dobre stosunki z",
    "rozejść się",
    "bliźniaki",
    "rysować",
    "pragnąć",
    "siostrzenica, bratanica",
    "brać kogoś/coś za pewnik",
    "krzywa uczenia się",
    "sprawdzać pocztę elektroniczną",
    "szczotkować włosy/zęby",
    "Nowy Rok",
    "brat przyrodni/siostra przyrodnia",
    "opiekować się",
    "pradziadkowie",
    "jedynak",
    "z perspektywy czasu",
    "graniczyć z",
    "wstawać",
    "pobrać się",
    "wyznaczać godziny powrotu do domu",
    "chrzest",
    "przyrodni brat/siostra",
    "spędzać czas na robieniu czegoś",
    "ojciec chrzestny/matka chrzestna",
    "późno wstać, leżeć dłużej w łóżku",
    "dyscyplina",
    "pójść na kurs",
    "wbrew zdrowemu rozsądkowi",
    "pogrzeb",
    "szwagierka",
    "być spokrewnionym z",
    "buntować się/bunt",
    "zająć się nowym hobby",
    "chodzić na ryby",
    "mieć różne zdania",
    "kartka z życzeniami",
    "pójść na łyżwy",
    "samotny rodzic",
    "oglądać serial w internecie",
    "wieczór panieński/kawalerski",
    "wracać do domu",
    "nie spieszyć się",
    "znajomy/znajoma",
    "odpowiedzialny",
    "trzymać się zasad",
    "mieć z kimś coś wspólnego",
    "wnuk",
    "kłócić się/kłótnia",
    "kupić",
    "chodzić na siłownię",
    "narzeczony",
    "grać w gry planszowe",
    "zrozumieć, załapać jak coś się robi",
    "zobaczyć wystawę sztuki",
    "zwyczaj",
    "nie zgadzać się/różnica zdań, sprzeczka",
    "zakończyć związek",
    "zawieść kogoś",
    "wrócić do siebie",
    "szykować się do szkoły",
    "żona",
    "rzucić kogoś",
    "chodzić do klubów",
    "ubierać się",
    "wykonywać prace domowe",
    "podziwiać",
    "pokolenie",
    "najeść, napchać się czymś",
    "kłaść się spać",
    "bratnia dusza",
    "bukiet",
    "drużba",
    "gawędzić ze znajomymi",
    "być wychowanym w",
    "załadować zmywarkę",
    "pójść do restauracji",
    "rodzeństwo",
    "rozwiązywać krzyżówkę",
    "przyrządzić posiłek",
    "spędzić wieczór w domu/wybrać się gdzieś wieczorem",
    "bardzo się zdenerwować",
    "zmywać naczynia",
    "bliski przyjaciel",
    "ksiądz",
    "wpaść (do kogoś z wizytą)",
    "pokłócić się z kimś",
    "odświeżyć się",
    "nakrywać do stołu",
    "moczyć się w wannie",
    "opłukać coś",
    "pokłócić się z",
    "zażarta kłótnia",
    "małżonek/małżonka",
    "impreza uliczna",
    "adoptowany/zaadoptować",
    "czytać blogi",
    "sprzątać ze stołu",
    "narzeczona",
    "unikać",
    "odejść od kogoś",
    "wychowywać",
    "zaręczyć się",
    "gadać o czymś cały czas",
    "wnuczka",
    "zaprzyjaźnić się",
    "trudne zadanie",
    "rodzina wielopokoleniowa",
    "testować granice",
    "robić filmy za pomocą programów dostępnych w Internecie",
    "bardzo różnić się od siebie, być jak ogień i woda",
    "utrzymywać kontakt z",
    "zasmucić kogoś",
    "wynosić śmieci",
    "krewny",
    "rodzina zastępcza",
    "odprężyć się",
    "układać włosy",
    "uporządkować coś",
    "przypaść sobie do serca"
]
  const odp = [
    "ring",
    "get an early night",
    "split up",
    "break up with",
    "wrap /unwrap a present",
    "take someone's side",
    "tie the knot",
    "Valentine's Day",
    "take photographs",
    "give someone the silent treatment",
    "play a musical instrument",
    "friendship",
    "grave",
    "have/organise/throw a party",
    "respect other people",
    "take the dog for a walk",
    "step up",
    "cease",
    "take part in",
    "go rollerblading",
    "go to a party",
    "stepson/stepdaughter",
    "take place",
    "foster child",
    "nephew",
    "fancy dress party",
    "anniversary",
    "go to music gigs",
    "recharge one's batteries",
    "put on a wash",
    "help out",
    "look down on",
    "ground",
    "Easter",
    "celebrate/celebration",
    "wedding",
    "family values",
    "take after",
    "stepfather/stepmother",
    "go jogging",
    "offend",
    "be on the same wavelength",
    "lose sight of",
    "golden handshake",
    "move in with",
    "suffer in silence",
    "stop an allowance",
    "cousin",
    "mourn",
    "chill out",
    "wake up",
    "take sth out on sb",
    "vent sth",
    "set the alarm",
    "get a divorce",
    "sworn enemy",
    "bride",
    "on the rocks",
    "handle",
    "service",
    "contest/competition",
    "church",
    "wreath",
    "immediate family",
    "exercise",
    "carnival",
    "bridesmaid",
    "behave/behaviour",
    "get your point across",
    "gossip",
    "heat through",
    "do gymnastics",
    "uncle",
    "witness",
    "make your bed",
    "fellowship",
    "make up with",
    "distant cousin",
    "carnival parade",
    "have a crush on",
    "take advantage of sth",
    "hang around with",
    "wound up",
    "separated",
    "run errands",
    "set boundaries",
    "birthday treat",
    "have a late night studying",
    "tell stories",
    "talk things through",
    "eat out",
    "legitimate worry",
    "reception",
    "husband",
    "lie down",
    "hang out the washing",
    "brother-in-law",
    "Christmas",
    "quarrel with",
    "colleague",
    "cheat on",
    "orphan",
    "aunt",
    "lay down some ground rules",
    "pensioner",
    "tell someone off",
    "congratulate",
    "have an affair",
    "dress up as",
    "grandparents",
    "see/meet friends",
    "run away from home",
    "best mate",
    "groom",
    "get on well with",
    "drift apart",
    "twins",
    "do some drawing",
    "crave",
    "niece",
    "take sb/sth for granted",
    "learning curve",
    "check your email",
    "brush your hair/teeth",
    "New Year's Day",
    "half-brother/half-sister",
    "take care of",
    "great-grandparents",
    "only child",
    "hindsight",
    "border on",
    "get up",
    "get married",
    "set curfews",
    "christening",
    "stepbrother/stepsister",
    "spend time doing sth",
    "godfather/godmother",
    "have a lie-in",
    "discipline",
    "do a course",
    "against your better judgement",
    "funeral",
    "sister-in-law",
    "be related to",
    "rebel/rebellion",
    "take up a hobby",
    "go fishing",
    "have a difference of opinion",
    "greetings card",
    "go skating",
    "single parent",
    "watch a series online",
    "hen/stag party",
    "go/come home",
    "take one's time",
    "aquaintance",
    "responsible",
    "stick to the rules",
    "have sth in common with sb",
    "grandson",
    "argue/argument",
    "pick up",
    "go to the gym",
    "fiance",
    "play board games",
    "get the hang of",
    "visit an art exhibition",
    "custom",
    "disagree/disagreement",
    "end a relationship",
    "let sb down",
    "get back together",
    "get ready for school",
    "wife",
    "dump sb",
    "go clubbing",
    "get dressed",
    "do chores",
    "look up to",
    "generation",
    "fill up on sth",
    "go to bed",
    "soulmate",
    "bouquet",
    "best man",
    "chat with friends",
    "be raised in",
    "load the dishwasher",
    "go out for a meal",
    "siblings",
    "do a crossword",
    "make a meal",
    "have a night in/out",
    "go ballistic",
    "do the washing-up",
    "close friend",
    "priest",
    "come round",
    "have a fight/a row with sb",
    "freshen up",
    "lay the table",
    "soak in a bath",
    "give sth a rinse",
    "fall out with",
    "heated argument",
    "spouse",
    "street party",
    "adopted/adopt",
    "read blogs",
    "clear the table",
    "fiancee",
    "shy away",
    "walk out on",
    "bring up",
    "get engaged",
    "go on about sth",
    "granddaughter",
    "make friends",
    "tall order",
    "extended family",
    "push the limits",
    "make films online",
    "be complete opposites",
    "keep in touch with",
    "get sb down",
    "put out the rubbish",
    "relative",
    "foster family",
    "unwind",
    "do your hair",
    "do sth out",
    "get on like a house on fire"
]
rng = 0
const test = []
ilosc = 0
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
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
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
    //pytanie[i-1] = data.content[i][0]
    //odp[i-1] = data.content[i][1]
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
