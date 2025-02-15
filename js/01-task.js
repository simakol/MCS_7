const refs = {
  mainForm: document.querySelector("#mainForm"),
  container: document.querySelector(".js-container"),
};

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
