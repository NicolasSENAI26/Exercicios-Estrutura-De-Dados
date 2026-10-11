let numeroSecreto = 7;
let palpite = Number(prompt("Adivinhe qual é o número secreto:"));

if (palpite === numeroSecreto) {
  console.log("Parabéns! Você acertou o número!");
} else if (palpite > numeroSecreto) {
  console.log("Você errou! O seu palpite é MAIOR do que o número secreto.");
} else {
  console.log("Você errou! O seu palpite é MENOR do que o número secreto.");
}