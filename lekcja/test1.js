var god = 6;
var min = 55;
setInterval(() => {
    let czas = new Date();
    const godzina = czas.getHours();
    const minuta = czas.getMinutes();
    //const godzina = god;
    //const minuta = min 

    const isSkrocone = false; //ta zmienna sie manualnie zmienia

    const plan_lekcji = (
        isSkrocone ?
        [
            "07:00-07:30",
            "07:35-08:05",
            "08:10-08:40",
            "08:45-09:15",
            "09:20-09:50",
            "09:55-10:25",
            "10:30-11:00",
            "11:20-11:50",
            "11:55-12:25",
        ] :
        [
            "07:00-07:45",
            "07:50-08:35",
            "08:45-09:30",
            "09:40-10:25",
            "10:35-11:20",
            "11:40-12:25",
            "12:45-13:30",
            "13:40-14:25",
            "14:30-15:15",
        ]
    )

    var plan_przerw = [];
    plan_lekcji.forEach((v, i)=>{
        var g_kn_lekcji = v.split("-")[1].split(":")[0];
        var m_kn_lekcji = v.split("-")[1].split(":")[1];

        var dl_przerwy; // i - 1 = ktora lekcja
        if (i == 0 || i > 7) dl_przerwy = 5;
        else if (i == (isSkrocone ? -1 : 4) || i == (isSkrocone ? 6 : 5)) dl_przerwy = 20;
        else dl_przerwy = (isSkrocone ? 5 : 10);


        plan_przerw[i] = g_kn_lekcji + ":" + m_kn_lekcji + "-" + g_kn_lekcji + ":" + (parseInt(m_kn_lekcji)+dl_przerwy);
    }); //generowanie zasiegow przerwy


    var now = (godzina < 10 ? "0" + godzina : godzina) + ":" + (minuta < 10 ? "0" + minuta : minuta)

    var isPrzerwa = true;
    plan_lekcji.forEach((v, i)=>{
        var st_lekcji = v.split("-")[0];
        var kn_lekcji = v.split("-")[1];
        if (now >= st_lekcji && now < kn_lekcji) {
            isPrzerwa = false;
            document.querySelector("#info").innerHTML = "Jest lekcja, która sie konczy o " + kn_lekcji
        }
    });

    if (isPrzerwa) {
        plan_przerw.forEach((v)=>{
            var st_przerwy = v.split("-")[0];
            var kn_przerwy = v.split("-")[1];
            if (now >= st_przerwy && now < kn_przerwy) {
                if (godzina < 15)
                    document.querySelector("#info").innerHTML = "Jest przerwa, ktora sie konczy o " + kn_przerwy
            }
        })
    }

    if (now > plan_lekcji[8].split("-")[1] || now < "07:00") 
        document.querySelector("#info").innerHTML = "KONIEC LEKCJI!!!"

    //console.log(now)
    //min++;
    //if (min == 60) {
    //    god++;
    //    min = 0;
    //}
}, 1000);

setInterval(() => {
    czas = new Date();
    godzina = czas.getHours()
    minuta = czas.getMinutes()
    sekunda = czas.getSeconds()
    if(godzina < 10) godzina = "0" + godzina
    if(minuta < 10) minuta = "0" + minuta
    if(sekunda < 10) sekunda = "0" + sekunda
document.querySelector("#czas").innerHTML = godzina + ":" + minuta + ":" + sekunda
},1000)