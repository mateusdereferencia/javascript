function contagemRegressiva(segundos) {
    for (let i = segundos; i >= 0; i--) {
        setTimeout(function() {
            console.log(i);
            if (i === 0) {
                console.log("Lançamento!");
            }
        }, (segundos - i) * 1000);
    }
}

contagemRegressiva(10);