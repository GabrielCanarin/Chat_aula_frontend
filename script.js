const sendText = document.querySelector(".btn_send");
const text = document.querySelector(".txt_input");
const chatarea = document.querySelector(".chat_area");

function attchat() {
  var mensagem = text.value;

  if (mensagem === "") {
    return
  }

  var div = document.createElement("div");
  div.className = "user";

  div.innerHTML = `<p class="identific">Você diz:</p>
                   <p class="mensagem">${mensagem}</p>`;

  chatarea.appendChild(div);
  text.value = "";
}

text.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    attchat();
  }
});