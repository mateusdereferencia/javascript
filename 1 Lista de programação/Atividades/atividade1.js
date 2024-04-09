function somarNumeros () {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar):"));

        if (!isNaN(numero)) {

            soma+= numero;
        } else {
                alert("Por favor, digite um número válido.");
        }
        continuar = confirm("Deseja adicionar mais números?");
    }
    
    alert("A soma dos números é: "+ soma);

}

somarNumeros( );