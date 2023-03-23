const sendText = document.querySelector(".btn_send");
const text = document.querySelector(".txt_input");
const chatarea = document.querySelector(".chat_area");

function attchat() {
  let mensagem = text.value;

  if (mensagem === "") {
    return
  }

  let div = document.createElement("div");
  div.className = "user";

  div.innerHTML = `<p class="identific">Você diz:</p>
                   <p class="mensagem">${mensagem}</p>`;

  chatarea.appendChild(div);
  chatarea.scrollTop = chatarea.scrollHeight - chatarea.clientHeight;
  text.value = "";
}

text.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    attchat();
  }
});