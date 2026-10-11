function pedraPapelTesoura(jogada1, jogada2) {
    if (jogada1 === jogada2) {
        console.log("Empate");
    } else if (
        (jogada1 === "pedra" && jogada2 === "tesoura") ||
        (jogada1 === "papel" && jogada2 === "pedra") ||
        (jogada1 === "tesoura" && jogada2 === "papel")
    ) {
        console.log("Jogador 1 venceu");
    } else {
        console.log("Jogador 2 venceu");
    }
}

pedraPapelTesoura("pedra", "tesoura");