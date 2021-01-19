let inputText = document.querySelector("#txt-input");
let btnTranslate = document.querySelector("#btn-data");
let outputText = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/doge.json";

function errorHandler(error) {
    alert('Something went wrong:'+error);
}



btnTranslate.addEventListener("click", function onClickHandler() {
    let userInput = inputText.value;
    let requestUrl = url + "?text=" + userInput;

    fetch(requestUrl)
       .then(res => res.json())
       .then(json => outputText.innerText = json.content.translated)
       .catch(errorHandler);
}); 