let saldo = 1000;

function sacar(valorSaque) {
    if (valorSaque <= saldo) {
        saldo -= valorSaque;
        console.log("Saque realizado");
    } else {
        console.log("Saldo insuficiente");
    }
}

sacar(300);