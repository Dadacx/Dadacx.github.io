fetch('https://www.kamisi.pl/projekty/imieniny/api')
    .then((response) => response.json())
    .then((json) => imieniny = json);

var dateFuture1 = new Date(2023,5,23,0,0,0)
  , dateStart1 = new Date(2022,8,1,0,0,0)
  , freeDays = 0;
  tyg = 0
  dni = 0
  dni_bez_weekendow = 0
  procenty = 0
  godz_odliczanie = 0
  min_odliczanie = 0
  sek = 0
  FreeDays(dateFuture1)
  GetCountTyg(dateFuture1),
  GetCountDni(dateFuture1),
  GetCountFreeDni(dateFuture1),
  GetCountGodz(dateFuture1),
  GetCountMin(dateFuture1),
  GetCountSec(dateFuture1),
  Percent(dateFuture1, dateStart1)
function FreeDays(e) {
    for (var t = new Date, n = (t.setUTCHours(0, 0, 0, 0),
    t.setDate(t.getDate() + 1),
    e), o = []; t < n; )
        6 != t.getDay() && 0 != t.getDay() && !o.includes(t.getTime()) || freeDays++,
        t.setDate(t.getDate() + 1);
    freeDays *= 864e5
}
function Rzeczownik(e, t, n, o) {
    return 1 == e ? t : e % 10 != 2 && e % 10 != 3 && e % 10 != 4 || e % 100 == 12 || e % 100 == 13 || e % 100 == 14 ? o : n
}
function GetCountTyg(e) {
    var n = new Date
      , o = e.getTime() - n.getTime();
    if (delete n,
    o < 0) {
        for (var n = document.getElementById("finished_note"), i = document.getElementsByClassName("counter"), u = document.getElementsByClassName("explain_main"), d = document.getElementsByClassName("explain_small"), r = 0, m = i.length; r < m; r++)
            i[r].style.display = "none";
        for (r = 0,
        m = d.length; r < m; r++)
            d[r].style.display = "none";
        for (r = 0,
        m = u.length; r < m; r++)
            u[r].style.display = "none";
        n.style.display = "inline"
    } else {
        var n = ""
          , o = Math.floor(o / 1e3);
        n += (o = Math.floor(o / 604800)) + " " + Rzeczownik(o, "tydzień", "tygodnie", "tygodni"),
        tyg = n,
        setTimeout(function() {
            GetCountTyg(e)
        }, 1e3)
    }
}
function GetCountDni(e) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    i < 0 ? dni = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 86400)) + " " + (1 == o ? "dzień" : "dni"),
    dni = n,
    setTimeout(function() {
        GetCountDni(e)
    }, 1e3))
}
function GetCountFreeDni(e) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    (i -= freeDays) < 0 ? dni_bez_weekendow = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 86400)) + " " + (1 == o ? "dzień" : "dni"),
    dni_bez_weekendow = n,
    setTimeout(function() {
        GetCountFreeDni(e)
    }, 1e3))
}
function GetCountGodz(e) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    i < 0 ? godz_odliczanie = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 3600)) + " " + Rzeczownik(o, "godzinę", "godziny", "godzin"),
    godz_odliczanie = n,
    setTimeout(function() {
        GetCountGodz(e)
    }, 1e3))
}
function GetCountMin(e) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    i < 0 ? min_odliczanie = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 60)) + " " + Rzeczownik(o, "minutę", "minuty", "minut"),
    min_odliczanie = n,
    setTimeout(function() {
        GetCountMin(e)
    }, 1e3))
}
function GetCountSec(e) {
    var n, o, i = new Date, u = e.getTime() - i.getTime();
    delete i,
    u < 0 ? sek = "" : (i = 0,
    o = ((n = "") + (u % 1e3 + 1e3)).substring(1, 4),
    u = Math.floor(u / 1e3),
    n += (i = Math.floor(u)) + " sekund",
    sek = n,
    setTimeout(function() {
        GetCountSec(e)
    }, 25))
}
function Percent(e, t) {
    var o = new Date
      , i = e.getTime() - t.getTime()
      , u = e.getTime() - o.getTime();
    delete o,
    u < 0 ? procenty = "" : (o = "",
    o += (u / i * 100).toFixed(4) + "%",
    procenty = o,
    setTimeout(function() {
        Percent(e, t)
    }, 1e3))
}
setInterval(() => {
    document.querySelector("#text1").innerHTML = "Do wakacji zostało jeszcze: " + tyg + " czyli " + dni + " czyli " + godz_odliczanie + " czyli " + min_odliczanie + " czyli " + sek + " <u>Bez weekendów do wakacji zostało jeszcze: " + dni_bez_weekendow + "</u> Roku szkolnego zostało jeszcze " + procenty + " Imieniny dziś obchodzą " + imieniny.solenizanci
    document.querySelector("#text2").innerHTML = "Do wakacji zostało jeszcze: " + tyg + " czyli " + dni + " czyli " + godz_odliczanie + " czyli " + min_odliczanie + " czyli " + sek + " <u>Bez weekendów do wakacji zostało jeszcze: " + dni_bez_weekendow + "</u> Roku szkolnego zostało jeszcze " + procenty + " Imieniny dziś obchodzą " + imieniny.solenizanci
}, 1000)