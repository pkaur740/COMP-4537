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


const msg_notSupported = "Sorry, web storage is not supported!";
let textareas = document.getElementsByTagName("textarea");

setInterval(function(){
    for (let i = 0; i < textareas.length; i++){
        console.log(textareas[i].value);
        if (typeof(Storage) == "undefined"){
            document.write(msg_notSupported);
            window.stop();
        }
        localStorage.setItem(textareas[i].value);
    }
}, 2000);

console.log(window.localStorage);