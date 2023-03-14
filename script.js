const sendText = document.querySelector(".btn_send");
const text = document.querySelector(".txt_input");
const chatarea = document.querySelector(".chat_area");

function attchat() {
  var menssagem = text.value;

  var div = document.createElement("div");
  div.className = "user";

  div.innerHTML = `<p class="identific">Você diz:</p>
                   <p class="mensagem">${menssagem}</p>`;

  chatarea.appendChild(div);
}