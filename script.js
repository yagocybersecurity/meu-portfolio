// Capturamos o botão pelo ID dele
const botaoTema = document.getElementById("btn-tema");

// Adicionamos um "ouvinte" que espera pelo clique
botaoTema.addEventListener("click", function() {
  // A função toggle liga/desliga a classe no HTML
  document.body.classList.toggle("modo-escuro");
  
  // Muda o texto do botão dependendo do tema
  if (document.body.classList.contains("modo-escuro")) {
    botaoTema.textContent = "☀️ Modo Claro";
  } else {
    botaoTema.textContent = "🌙 Modo Escuro";
  }
});

