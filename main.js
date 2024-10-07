function CriaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById('container');
  const cartao = document.createElement('article');
  cartao.className = 'RodrigoColorado';
  cartao.setAttribute('aria-expanded', 'false'); // Para acessibilidade

  cartao.innerHTML = `
    <div class="conteudo-cartao">
      <h3>${categoria}</h3>
      <div class="pergunta-cartao">
        <p>${pergunta}</p>
      </div>
      <div class="resposta-cartao" style="display: none;">
        <p>${resposta}</p>
      </div>
    </div>`;

  let respostaVisivel = false;

  function viraCartao() {
    respostaVisivel = !respostaVisivel;
    cartao.classList.toggle('active', respostaVisivel);
    cartao.setAttribute('aria-expanded', respostaVisivel); // Atualiza atributo ARIA

    // Alterna a visibilidade da resposta
    const respostaElement = cartao.querySelector('.resposta-cartao');
    respostaElement.style.display = respostaVisivel ? 'block' : 'none';
  }

  cartao.addEventListener('click', viraCartao);
  container.appendChild(cartao);
}
