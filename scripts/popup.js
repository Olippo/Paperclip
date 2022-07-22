window.onload = function () {
    chrome.storage.local.get("textBackup", function(items) {
        if (!chrome.runtime.error) {
          console.log(items);
          setText(items.textBackup);
        }
    });

    let text = " ";

    document.getElementById("textarea").oninput = function() {
        text = document.getElementById("textarea").value;
        setStorage(text);
    }
}

function setStorage(text) {
    chrome.storage.local.set({'textBackup': text}, function() {
        console.log("Updated to " + text);
    });
    console.log()
}

function setText(text) {
    document.getElementById("textarea").value = text;
}

function getText() {
    let text = document.getElementById("textarea").value;
    return text;
}
