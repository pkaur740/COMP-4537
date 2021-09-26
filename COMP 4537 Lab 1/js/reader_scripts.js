const msg_notSupported = "Sorry, web storage is not supported!";

if (typeof(Storage) == "undefined"){
    document.write(msg_notSupported);
    window.stop();
}

let notes = localStorage.getItem("notes");
notes = JSON.parse(notes);
// console.log(notes);
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
    cache_clear()
}, 2000);


function cache_clear() {
    window.location.reload(true);
  }