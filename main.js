function CriaCartao (categoria, pergunta, resposta){
  let container = document.getElementById('container');
  let cartao = document.createElement('article');
  cartao.className = 'RodrigoColorado';
  cartao.innerHTML = `
  <div class="conteudo-cartao">
  <h3>${categoria}</h3>

<div class="pergunta-cartao">
  <p>${pergunta}</p>
</div>

<div class="resposta-cartao">
  <p>${resposta}</p>

</div>
</div>`

let respostaVisivel = false;
function viraCartao () {
  respostaVisivel = !respostaVisivel;
  cartao.classList.toggle('active', respostaVisivel);
}
cartao.addEventListener('click', viraCartao);
container.appendChild(cartao);
}