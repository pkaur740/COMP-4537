const msg_notSupported = "Sorry, web storage is not supported!";
getTime();
function addNote(){
    const parentDiv = document.createElement("div");
    const num = Math.random()
    const elementId = "ele" + num;
    parentDiv.setAttribute("id", elementId);

    const txtarea = document.createElement("textarea");
    txtarea.setAttribute("id", "txtarea");

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.innerHTML = "<a href=\"javascript:;\" onclick=\"deleteNote(\'" + elementId + "\')\">Remove</a>"

    parentDiv.appendChild(txtarea);
    parentDiv.appendChild(removeBtn);

    const addbtn = document.getElementById("addBtn");
    const parentNode = addbtn.parentNode;
    parentNode.insertBefore(parentDiv, addbtn);
    
}


function deleteNote(id){
    let note = document.getElementById(id);
    note.remove();
}

let textareas = document.getElementsByTagName("textarea");
let lsarray = [];
let noteObj;

setInterval(function(){
    if (typeof(Storage) == "undefined"){
        document.write(msg_notSupported);
        window.stop();
    }

    for (let i = 0; i < textareas.length; i++){
        noteObj = {[i]: textareas[i].value};
        lsarray.push(noteObj);
    }
    // console.log(lsarray);
    lsarray = JSON.stringify(lsarray);
    localStorage.setItem("notes", lsarray);
    lsarray = [];
    getTime();
}, 2000);


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