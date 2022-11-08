function selecionarAba(aba) {
    if(aba.classList.contains("selecionado")){
        return;
    }
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")
    aba.classList.add("selecionado")
}

//mostrar conteudo da aba selecionada
function mostrarConteudo(info) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    const idElemtInfoAba = `info-${info.id}`
    const informacaoMostrar = document.getElementById(idElemtInfoAba)
    informacaoMostrar.classList.add("selecionado")
}

const abas = document.querySelectorAll(".aba")
abas.forEach(el => {
    el.addEventListener("click", () => {

    selecionarAba(el)

    mostrarConteudo(el)


    })
});

