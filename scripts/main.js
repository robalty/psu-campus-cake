window.onload = function(){
    menuNav('start');
    if (!Notification) {
        alert('Notifications aren\'t supported by this browser!.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();

};

function notifyMe() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('PSU Campus Resources', {
            icon: './img/icon.png',
            body: "Hi there! Are you having a good day at PSU?",
        });
        notification.onclick = function () {
            window.open("http://10.200.118.205:8887/");
        };
    }
}

function menuNav(to){
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    var toShow = document.getElementById(to);
    toShow.style.display = "block";
}
