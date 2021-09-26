const msg_notSupported = "Sorry, web storage is not supported!";



function Clock() {
    this.date = new Date();
    this.hr = this.date.getHours();
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();
}
var clock = new Clock();
clock.get_time = function() {
    var ampm = this.hr >= 12 ? 'pm' : 'am';
    this.hr = this.hr % 12;
    this.hr = this.hr ? this.hr : 12; // the hour '0' should be '12'
    this.sec = String(this.sec).length == 1 ? "0" + this.sec: this.sec;
    this.min = String(this.min).length == 1 ? "0" + this.min: this.min;
    document.getElementById("time").innerHTML = "stored at:" + this.hr + ":" + this.min + ":" + this.sec + ampm;
}


clock.get_time();

if (typeof(Storage) == "undefined"){
    document.write(msg_notSupported);
    window.stop();
}

let notes = localStorage.getItem("notes");
notes = JSON.parse(notes);
for (let i = 0; i < notes.length; i++){
    const parentDiv = document.createElement("div");
    const elementId = "ele" + i;
    parentDiv.setAttribute("id", elementId);
    const txtarea = document.createElement("textarea");
    txtarea.setAttribute("id", "txtarea" + i);
    parentDiv.appendChild(txtarea);
    document.body.appendChild(parentDiv);
}



for (let i = 0; i < notes.length; i++){
    document.getElementById("txtarea" + i).value = notes[i][i];
}

setInterval(function(){
    cache_clear();
    clock.get_time();
}, 2000);


function cache_clear() {
    window.location.reload(true);
}

