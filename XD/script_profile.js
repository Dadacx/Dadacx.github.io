function zlicz() {
    var post_context = document.forms["create_post"]["post"].value;
    if (post_context.length >= 152) {
        document.getElementById("post").style.fontSize = "14px"
    }
    else {
        document.getElementById("post").style.fontSize = "23px"
    }
    if (post_context.length != 0) {
        document.getElementById("public").style.backgroundColor = "#2374e1"
        document.getElementById("public").style.color = "white"
        document.getElementById("public").style.cursor = "pointer"
    }
    else {
        document.getElementById("public").style.backgroundColor = "#505151"
        document.getElementById("public").style.color = "#858686"
        document.getElementById("public").style.cursor = "not-allowed"
    }
  }
  function write_post() {
      document.getElementById("create_post").style.visibility = "visible"
      document.getElementById("aside").style.opacity = "0.2"
      document.getElementById("nav").style.opacity = "0.2"
      document.getElementById("header").style.opacity = "0.2"
      document.getElementById("main").style.opacity = "0.2"
  }
  function stop_write_post() {
      document.getElementById("create_post").style.visibility = "hidden"
      document.getElementById("aside").style.opacity = "1"
      document.getElementById("nav").style.opacity = "1"
      document.getElementById("header").style.opacity = "1"
      document.getElementById("main").style.opacity = "1"
  }
  n = 2;
  function add_post() {
    var post_context = document.forms["create_post"]["post"].value;
    if(post_context != "") {
    var data = new Date();
    const days = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]
    const month = ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]
    var post_data = days[data.getDay()]+", "+data.getDate()+" "+month[data.getMonth()]+" "+data.getFullYear()+" o "+data.getHours()+":"+data.getMinutes()
    const post = document.createElement("div");
    var tresc = document.forms["create_post"]["post"].value;
    post.innerHTML = '<div class="post"><div class="post_username">Jakub Loryś</div><div class="opcje"><svg viewBox="0 0 20 20" width="1.5em" height="1.5em"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></div><img class="post_avatar" src="image/avatar2.png" width="41" height="41" alt="Avatar posta"><br><div class="tooltip"><span class="tooltiptext" style="width: auto;left: 15px;right: -70px;font-size: 13px;top: 110%;">' + post_data +'</span><div class="czas">Przed chwilą ·  </div></div><div class="tooltip"><span class="tooltiptext" style="top: -190%; width: 100px; left: 120%; font-size: 15px;">Publiczne</span><svg viewBox="0 0 16 16" width="1em" height="1em" class="publiczne" title="Grono odbiorców: Publiczne"><title>Grono odbiorców: Publiczne</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg></div><p id="tresc" class="tresc">' + tresc + '</p><div id="reaction_kom" class="reaction_kom like_count"><div class="likes"><div class="tooltip"><span class="tooltiptext" style="top: 110%;"><span style="font-size: 14px;font-weight: bold">Lubię to!</span><br><span style="font-size: 13px;">Jakub Loryś</span></span><img src="image/like.png" class="reaction_kom" alt="like icon" width="20" height="20"></div><span class="reaction_kom">1</span></div></div><hr class="post"><div class="post_footer"><div class="like" onclick="like(' + n + ')"><i class="like_img"></i><span class="text_footer_post"> Lubię to!</span></div><div class="comment"><i class="comment_img"></i><span class="text_footer_post"> Komentarz</span></div><div class="share"><i class="share_img"></i><span class="text_footer_post"> Udostępnij</span></span></div></div></div>'
    document.getElementById("post_box").appendChild(post)
    n++
    document.forms["create_post"]["post"].value = "";
    stop_write_post()
    zlicz()
      }
}
function like(number) {
    const like_count = document.getElementsByClassName("like_count");
    for (let i = 0; i < like_count.length; i++) {
        if (number == i) {
        like_count[i].style.display = "block";
        }
    }
}