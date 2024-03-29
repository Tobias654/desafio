const btnAddTarefa = document.querySelector("#add_tarefa")
const lstAFazer = document.querySelector("#a-fazer")
const lstFeito = document.querySelector("#feito")

const adicionarTarefa = function(ev) {
    ev.preventDefault()
    
    const tarefa = document.querySelector("#tarefa").value

    if (tarefa.length < 1) {
        return;
    }

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstAFazer.appendChild(novaTarefa)
    document.querySelector("#tarefa").value = ""
}

const moverParaFeito = function(ev) {
    const tarefa = ev.target.innerText

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstFeito.appendChild(novaTarefa)
    lstAFazer.removeChild(ev.target)
}


const removerTarefa = function(ev) {

    lstFeito.removeChild(ev.target)
    
}


btnAddTarefa.addEventListener("click", adicionarTarefa)
lstFeito.addEventListener("click", removerTarefa)
lstAFazer.addEventListener("click", moverParaFeito)