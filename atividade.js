// Array para armazenar os produtos
let produtos = [];

// Função para adicionar novos produtos ao array
function adicionarProduto(nome, preco, quantidade) {
    // Validação dos dados
    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        console.error('Nome do produto é obrigatório e deve ser uma string não vazia.');
        return;
    }
    if (isNaN(preco) || preco <= 0) {
        console.error('Preço deve ser um número maior que 0.');
        return;
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        console.error('Quantidade deve ser um número maior que 0.');
        return;
    }

    // Adiciona o produto ao array
    const produto = {
        nome: nome.trim(),
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade, 10)
    };
    produtos.push(produto);
    console.log('Produto adicionado com sucesso:', produto);
}

// Função para listar todos os produtos cadastrados
function listarProdutos() {
    if (produtos.length === 0) {
        console.log('Nenhum produto cadastrado.');
        return;
    }
    console.log('Produtos cadastrados:');
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}

// Função para calcular e exibir o valor total dos produtos em estoque
function calcularValorTotal() {
    let valorTotal = 0;
    produtos.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade;
    });
    console.log(`Valor total dos produtos em estoque: R$${valorTotal.toFixed(2)}`);
}

// Exemplo de uso das funções
adicionarProduto('Camiseta', 50.90, 10);
adicionarProduto('Calça', 90.90, 5);
listarProdutos();
calcularValorTotal();