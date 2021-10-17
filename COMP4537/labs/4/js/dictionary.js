const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:8000/";

const errorMsg = "Invalid Input! Please try again. Only strings allowed!";

function post() {
    let word = document.getElementById("word").value;
    let definition = document.getElementById("definition").value;

    if (word.length != 0 && definition.length != 0 && isNaN(word) && isNaN(definition)) {
        let params = "?word=" + word + "&definition=" + definition;
        console.log(params);

        xhttp.open("POST", endPointRoot, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("msg").innerHTML = this.responseText;
            }
        };

    }
    else {
        document.getElementById("msg").innerHTML = errorMsg;
    }
}

function get() {
    let word = document.getElementById("searchWord").value;

    const url = endPointRoot + "?word=" + word;
    xhttp.open("GET", url, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("msg").innerHTML = this.responseText;
        }
    };
}