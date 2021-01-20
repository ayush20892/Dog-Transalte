var translateButton = document.querySelector("#btn-data");
var translateInput = document.querySelector("#txt-input");
var translateOutput = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/doge.json"

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

translateButton.addEventListener("click", buttonClickHandler)