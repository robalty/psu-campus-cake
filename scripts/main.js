window.onLoad = function(){
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
