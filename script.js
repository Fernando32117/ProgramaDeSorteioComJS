// Adiciona um histórico de números sorteados
var historico = [];

function sortearNumero() {
  var min = parseInt(document.getElementById('min').value);
  var max = parseInt(document.getElementById('max').value);
  var quantidade = parseInt(document.getElementById('quantidade').value);

  if (isNaN(min) || isNaN(max) || isNaN(quantidade) || min >= max || quantidade < 1) {
    alert('Por favor, insira valores válidos. O número mínimo deve ser menor que o número máximo e a quantidade de números a ser sorteada deve ser maior que 0.');
    return;
  }

  var resultado = document.getElementById('resultado');
  var historicoList = document.getElementById('historico');

  var numerosSorteados = [];

  // Adiciona o efeito de confetes
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Adiciona um atraso de 2 segundos antes de exibir os números sorteados
  setTimeout(function() {
    for (var i = 0; i < quantidade; i++) {
      var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      numerosSorteados.push(numeroSorteado);
    }

    // Adiciona os números sorteados ao histórico
    historico = historico.concat(numerosSorteados);

    // Atualiza a lista de histórico no HTML
    atualizarHistorico();

    resultado.innerHTML = 'Números Sorteados: ' + numerosSorteados.join(', ');
  }, 500);
}

// Função para atualizar o histórico no HTML
function atualizarHistorico() {
  var historicoList = document.getElementById('historico');
  historicoList.innerHTML = ''; // Limpa a lista

  for (var i = 0; i < historico.length; i++) {
    var item = document.createElement('li');
    item.textContent = 'Sorteio ' + (i + 1) + ': ' + historico[i];
    historicoList.appendChild(item);
  }
}
