IMC em rect.js
Explicação do código:

Importamos o React e useState.
Criamos um componente chamado ImcScreen.
Dentro do componente, criamos três estados: height (altura), weight (peso) e result (resultado do IMC).
Criamos uma função chamada calculateImc para calcular o IMC com base nos valores de height e weight. Se algum dos valores não for preenchido, um alerta é exibido.
No retorno do componente, criamos um formulário com dois campos de entrada (altura e peso) e um botão para calcular o IMC.
Quando o botão é clicado, a função calculateImc é chamada e o resultado é armazenado no estado result.
Se houver um resultado, ele é exibido na tela.
Lembre-se de que esta é apenas uma implementação básica e você pode personalizá-la para atender às suas necessidades específicas.