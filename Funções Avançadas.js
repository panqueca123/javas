function ex09() {
    alert(
      "Desafio: Declare uma função multiplica que aceite dois parâmetros e retorne o produto deles." +
        "\nChame a função multiplica com os valores 7 e 8, e exiba o resultado no console." +
        "\nDeclare uma função quadrado que retorne o quadrado de um número."
    );
  
  
      alert("O produto de 7 e 8 é: "+ multiply(7, 8));
     
      alert(
          "Os primeiros 5 quadrados perfeitos são: "+
          [1, 2, 3, 4, 5].map((elem) => square(elem))
      );
  }
  
  
  function multiply(a, b) {
      return a*b;
  }
  function square(a) {
      return a*a
  }
  