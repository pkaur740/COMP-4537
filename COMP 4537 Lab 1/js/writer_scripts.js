const msg_notSupported = "Sorry, web storage is not supported!";


function getTime() {
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
};

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
    lsarray = JSON.stringify(lsarray);
    localStorage.setItem("notes", lsarray);
    lsarray = [];
    getTime();
}, 2000);
