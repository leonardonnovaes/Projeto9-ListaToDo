// DECLARANDO VARIAVEIS

let tarefas =[];


// FUNÇÃO QUE VALIDA O PREENCHIMENTO DO CAMPO 

function validaCampo(){
    let valida = false;
    if(document.getElementById("task").value == "")
        valida = true;
        return valida    
}
