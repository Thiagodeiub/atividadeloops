var c = Number(prompt("Digite o número de coelhos"))

//if(c<=3){
//    return;
//}

var a = Number(prompt("digite o número de anos"))


var resposta = ""

for(var i=0; i<a; i++){
    resposta +=` ano: ${a} | coelhos previstos ${c*(Math.pow(7,i))} <br> `

}
document.getElementById("coelhos").innerHTML = `Número de coelhos : ${c} <br>`
document.getElementById("anos").innerHTML = `Número de anos: ${a}<br>`
document.getElementById("resultado").innerHTML = resposta;

