function login(){
email = document.forms["login_box"]["email"].value
password = document.forms["login_box"]["password"].value
if (email == "dadacxgaming@gmail.com" && password == "mojprofil1") {
    window.open('profile1.html', '_top')
    return false;
}
else if (email == "jakublorys@gmail.com" && password == "fbnazamowienie") {
    window.open('profile2.html', '_top')
    return false;
}
else {
    document.getElementById("error").style.display = "block"
    document.getElementById("submit_btn").style.marginTop = 0
    document.forms["login_box"]["password"].value = null
    document.getElementById("show_pass_pos").style.visibility = "hidden"
    return false;
}
}
function check() {
email = document.forms["login_box"]["email"].value
password = document.forms["login_box"]["password"].value
/*if (email == "dadacxgaming@gmail.com" && password == "mojprofil1") {
    document.getElementById("submit").setAttribute("href","profile1.html")
}*/
if (password != "") {
    document.getElementById("show_pass_pos").style.visibility = "visible"
}
else {
    document.getElementById("show_pass_pos").style.visibility = "hidden"
}
}
function show_password() {
    type = document.getElementById("password").getAttribute("type")
    if ( type == "password") {
        document.getElementById("show_pass").style.background = "url('image/password_show.png')"
        document.getElementById("password").setAttribute("type","text")
    }
    else {
        document.getElementById("show_pass").style.background = "url('image/password_hide.png')"
        document.getElementById("password").setAttribute("type","password")
    }
}