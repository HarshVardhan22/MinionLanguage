const translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", handleBtnClick);

const inputContainer = document.getElementById("inputTextArea");
const outputContainer = document.querySelector("#result");

const url = "https://api.funtranslations.com/translate/minion.json";

function handleBtnClick(event) {
  const inputText = inputContainer.value;
  const urlGenerated = urlGenerator(inputText);
  console.log(urlGenerated);
  fetch(urlGenerated)
    .then((response) => response.json())
    .then((json) => {
      outputContainer.innerText = json.contents.translated;
    })
    .catch((err) => alert(err.message));
}

function urlGenerator(inputText) {
  const uri = encodeURI(inputText);
  return `${url}?text=${uri}`;
}
