mc_colors = ["mc-black"]
function minecraft(w) {
    switch (w) {
        case 1: {
            mc_colors.push(document.querySelector("#colors").value)
            document.querySelector("#colors").className = mc_colors[mc_colors.length-1]
            if (mc_colors.length>2) {
                mc_colors.shift()
            }
            document.querySelector("#minecraft").classList.replace(mc_colors[mc_colors.length-2],mc_colors[mc_colors.length-1])
            minecraft(7)
            break
        }
        case 2: {
            if (document.querySelector("#minecraft").classList.contains("mc-shadow")) {
                document.querySelector("#minecraft").classList.remove("mc-shadow")
            } else {
                document.querySelector("#minecraft").classList.add("mc-shadow")
            }
            minecraft(7)
            break
        }
        case 3: {
            if (document.querySelector("#minecraft").classList.contains("mc-bold")) {
                document.querySelector("#minecraft").classList.remove("mc-bold")
            } else {
                document.querySelector("#minecraft").classList.add("mc-bold")
            }
            minecraft(7)
            break
        }
        case 4: {
            if (document.querySelector("#minecraft").classList.contains("mc-strikethrough")) {
                document.querySelector("#minecraft").classList.remove("mc-strikethrough")
            } else {
                document.querySelector("#minecraft").classList.add("mc-strikethrough")
            }
            minecraft(7)
            break
        }
        case 5: {
            if (document.querySelector("#minecraft").classList.contains("mc-underline")) {
                document.querySelector("#minecraft").classList.remove("mc-underline")
            } else {
                document.querySelector("#minecraft").classList.add("mc-underline")
            }
            minecraft(7)
            break
        }
        case 6: {
            if (document.querySelector("#minecraft").classList.contains("mc-italic")) {
                document.querySelector("#minecraft").classList.remove("mc-italic")
            } else {
                document.querySelector("#minecraft").classList.add("mc-italic")
            }
            minecraft(7)
            break
        }
        case 7: {
            clas = document.querySelector("#minecraft").classList.value
            clas = clas.replace("minecraft ","")
            document.querySelector("p").innerText = "class=\""+clas+"\""
        }
    }
}
function test() {
    clas = document.querySelector("#minecraft").classList.value
    clas = clas.replace("minecraft ","")
    document.querySelector("p").innerText = "class=\""+clas+"\""
}