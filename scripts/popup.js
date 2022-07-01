window.onload = function () { 
    setText(getLocalStorage());
    console.log(localStorage);
}

function setLocalStorage(text) {
    localStorage["text"] = text;
}

function getLocalStorage() {
    let text = localStorage.getItem("text");
    return text;
}

function setText(text) {
    document.getElementById("textarea").value = text;
}

function getText() {
    let text = document.getElementById("textarea").value;
    return text;
}