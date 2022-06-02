wynik = 0
function licz() {
    oceny = document.getElementById("input").value
    if(oceny != "") {
        const ioceny = oceny.split(",")
        for(i=0;i<ioceny.length;i++) {
            if(ioceny[i]=="") {
                ioceny.splice(i, 1)
                i--
            } else {
            ioceny[i] = parseInt(ioceny[i])
            }
        }
        for(i=0;i<ioceny.length;i++) {
            if(Number.isInteger(ioceny[i]) == true) {
                if(ioceny[i]>6 || ioceny[i]<1) {
                    document.getElementById("wrong_number").innerHTML = ''
                    for(z=0;z<ioceny.length;z++) {
                    const post = document.createElement("span");
                    post.innerHTML = ioceny[z]
                    if(ioceny[z]>6 || ioceny[z]<1) {
                        post.style.color = "red"
                        post.style.textDecoration = "underline"
                    }
                    post.style.marginRight = "5px"
                    document.getElementById("wrong_number").appendChild(post)
                    }
                    const post = document.createElement("span");
                    post.innerHTML = "<------- Oceny nie mogą być mniejsze niż 1 i większe niż 6"
                    post.style.color = "red"
                    document.getElementById("wrong_number").appendChild(post)
                    wynik = 0
                    document.getElementById("wynik").innerHTML = ''
                    break;
                } else {
                    wynik = 1 
                }
            } else {
                alert(ioceny[i] + " nie jest liczbą!")
                break;
            }
        }
        if(wynik==1) {
        wynik = ioceny[0]
        for(j=1;j<ioceny.length;j++) {
            wynik = wynik + ioceny[j]
        }
        wynik = wynik/ioceny.length
        document.getElementById("wynik").innerHTML = "Obliczona średnia to " + wynik.toFixed(2)
        document.getElementById("wrong_number").innerHTML = ''
    }
    }
    return false
}