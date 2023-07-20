// let nota = prompt();

//if (nota >= 7) {
    console.log("aprovado")
//}else if (nota > 5){
    console.log("Recuperação");
// }else{
//   console.log("Reprovado");    


let nota1 = parseFloat(prompt("Digite Sua nota"));
let nota2 = parseFloat(prompt("digite sua nota"));
let nota3 = parseFloat(prompt("digite sua nota"));
let nota4 = parseFloat(prompt("digite sua nota"));

let media = (nota1 + nota2 + nota3 + nota4) /4

if (media >= 7){
    console.log(`aprovado! Nota Final: ${media.toFixed(2)}`);
}else if (media > 5){
    console.log(`Recuperação! Nota Final:${media.toFixed(2)}`);
}else{ 
    console.log(`Reprovado! Nota Final: ${media.toFixed(2)}`);    
} 





