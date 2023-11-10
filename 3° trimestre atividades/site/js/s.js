function alternarCores() {
    var corpoPagina = document.body;
    var corAtual = corpoPagina.style.backgroundColor;
    var cor1 = 'red';
    var cor2 = 'blue';
        if (corAtual === cor1) {
        corpoPagina.style.backgroundColor = cor2;
    } else {
        corpoPagina.style.backgroundColor = cor1;
    }
}