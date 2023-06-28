
var custo_fabrica = 40000
var valor_distribuidor = custo_fabrica * (0.28)
var valor_impostos = custo_fabrica * (0.45)

var custo_consumidor = custo_fabrica + valor_distribuidor + valor_impostos
console.log(custo_consumidor)