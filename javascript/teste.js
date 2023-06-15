


// array c/ 5 nomes: guilherme, manuel, samuel, davi, joão

//adicionar monica
//retirar ultimo elemento do array
//encontre a posição do samuel
//trocar Manuel por Emanuel


var nomes = ['Guilherme', 'Manuel', 'Samuel', 'Davi', 'João']
console.log(nomes)

nomes.push("Mônica")
console.log(nomes)

nomes.pop()
console.log(nomes)

console.log(nomes.indexOf("Samuel"))

var i = nomes.indexOf("Manuel")
nomes[i] = "Emanuel"
console.log(nomes)