window.onload = function () { 
    setText(getLocalStorage());
    console.log(localStorage);
}

function setLocalStorage(text) {
    localStorage["text"] = text;
    chrome.storage.local.set({text: text}, function() {
        console.log('Value is set to ' + text);
      });
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