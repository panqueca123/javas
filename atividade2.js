// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar novas tarefas ao array
function adicionarTarefa(descricao) {
    // Validação dos dados
    if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
        console.error('Descrição da tarefa é obrigatória e deve ser uma string não vazia.');
        return;
    }

    // Adiciona a tarefa ao array
    const tarefa = {
        descricao: descricao.trim(),
        concluida: false
    };
    tarefas.push(tarefa);
    console.log('Tarefa adicionada com sucesso:', tarefa);
}

// Função para listar todas as tarefas cadastradas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa cadastrada.');
        return;
    }
    console.log('Tarefas cadastradas:');
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. Descrição: ${tarefa.descricao}, Status: ${tarefa.concluida ? 'Concluída' : 'Pendente'}`);
    });
}

// Função para remover uma tarefa específica do array
function removerTarefa(index) {
    if (index < 0 || index >= tarefas.length) {
        console.error('Índice inválido. Não foi possível remover a tarefa.');
        return;
    }

    const tarefaRemovida = tarefas.splice(index, 1);
    console.log('Tarefa removida com sucesso:', tarefaRemovida[0]);
}

// Função para marcar uma tarefa como concluída
function marcarComoConcluida(index) {
    if (index < 0 || index >= tarefas.length) {
        console.error('Índice inválido. Não foi possível atualizar o status da tarefa.');
        return;
    }

    tarefas[index].concluida = true;
    console.log('Tarefa marcada como concluída:', tarefas[index]);
}

// Exemplo de uso das funções
adicionarTarefa('Estudar ');
adicionarTarefa('Comprar tomate');
listarTarefas();
marcarComoConcluida(0);
listarTarefas();
removerTarefa(1);
listarTarefas();