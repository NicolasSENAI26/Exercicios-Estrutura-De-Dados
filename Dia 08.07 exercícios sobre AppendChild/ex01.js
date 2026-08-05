
const botaoTexto = document.getElementById('btn-add-texto');
botaoTexto.addEventListener('click', () => {

  const paragrafo = document.createElement('p');
  paragrafo.textContent = "Olá mundo!";
  
  document.body.appendChild(paragrafo);
});