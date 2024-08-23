function ex08() {
    alert(
      "Desafio: Declare uma matriz matriz com duas linhas e três colunas, preenchendo-a com números." +
        "\nExiba a matriz no console." +
        "\nAcesse e exiba o valor do elemento na segunda linha, terceira coluna da matriz." +
        "Modifique o valor do elemento na primeira linha, segunda coluna para 99 e exiba a matriz atualizada no console."
    );
  
  
    let matriz = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
  
  
    alert(
      matriz +
      "\n"+ matriz[2][3]
    );
    matriz[1][2] = 99
    alert(matriz);
  }
  