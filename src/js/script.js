// DECLARANDO VARIAVEIS

let tarefas =[];


// FUNÇÃO QUE VALIDA O PREENCHIMENTO DO CAMPO 

function validaCampo(){
    let valida = false;
    if(document.getElementById("task").value == "")
        valida = true;
        return valida    
}

// FUNÇÃO QUE ADICIONA A TAREFA

function adicionarTarefa(){
    let linhas = document.getElementById("task");
    if(validaCampo()){
        alert('preencha o campo');
    }else{
        tarefas.push(linhas.value);
        linhas.value="";
        listarTarefas();
    }
    document.getElementById("task").focus();
}