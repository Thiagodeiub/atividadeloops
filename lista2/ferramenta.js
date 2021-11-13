var ferramenta = prompt("qual a ferramenta será usada")
var vezes = Number (prompt("digite a quantidade de vezes que sera ultilizada"))



var r =""
for(var i =1; i<=vezes; i++){
    r +=` ${ferramenta} |`
}

document.getElementById("f").innerHTML = `ferramenta usada: ${ferramenta}`

document.getElementById("v").innerHTML = `Quantidade de vezes: ${vezes}`


document.getElementById("resposta").innerHTML = r

