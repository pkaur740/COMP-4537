const msg_notSupported = "Sorry, web storage is not supported!";

setInterval(function(){
    if (typeof(Storage) == "undefined"){
        document.write(msg_notSupported);
        window.stop();
    }

    let notes = localStorage.getItem("notes");
    notes = JSON.parse(notes);
    console.log(notes);

    for (let i = 0; i < notes.length; i++){
        const eleDiv = document.createElement("div");
        eleDiv.setAttribute("id", "eleDiv");

        let note = document.createTextNode(notes[i][i]);

        eleDiv.appendChild(note);

        document.body.appendChild(eleDiv);
    }



}, 2000);
