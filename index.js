let naves = []

class Espaconave {
    constructor(nome, quantTripulantes){
        this.nome = nome
        this.quantTripulantes = quantTripulantes
        this.engatada = false
        this.portaAberta = false
    }

    engatar(){
        this.engatada = true
        this.portaAberta = true
    }
}

function menu(){
    let opcoes

    while (opcoes != "3"){
        opcoes = prompt("Qual a opção desejada?\n1- Engatar nave\n" +
                                        "2- Imprimir naves\n" +
                                        "3- Sair do programa ")

        switch(opcoes){
            case "1":
                let addnaves = criarNave()
                addnaves.engatar()
                naves.push(addnaves)
                break
            case  "2":
                imprirListNaves(naves)
                break
        }
    }
    
}

function criarNave(){
    let nomeNave = prompt("Informe o nome da nave") 
    let qTripulantes = prompt("Informe a quantidade de tripulantes")
    let nave = new Espaconave(nomeNave, qTripulantes)
    return nave
}

function imprirListNaves(naves){
    let listNave = ""

    naves.forEach((nave, index) => {
        listNave += (index + 1) + "- Nome da nave: " + nave.nome + " (" + nave.quantTripulantes + " tripulantes)\n"
    });

    alert(listNave)
}

 

menu()
