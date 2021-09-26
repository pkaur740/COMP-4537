const msg_notSupported = "Sorry, web storage is not supported!";
getTime();
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
    getTime();
}, 2000);


function cache_clear() {
    window.location.reload(true);
}


function getTime() {
    var d = new Date();
    var hr = d.getHours();
    var ampm = hr >= 12 ? 'pm' : 'am';
    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'
    var min = d.getMinutes();
    var sec = d.getSeconds();
    sec = String(sec).length == 1 ? "0" + sec: sec;
    min = String(min).length == 1 ? "0" + min: min;
    document.getElementById("time").innerHTML = "stored at:" + hr + ":" + min + ":" + sec + ampm;
}