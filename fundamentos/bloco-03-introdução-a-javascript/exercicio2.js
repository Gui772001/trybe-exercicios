// atividade 1
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for(soma =0 ; soma < numbers.length ; soma ++){
    //console.log(numbers[soma] );
    
// atividade 2 e atividade3
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let resultado = 0
//for(soma =0 ; soma < numbers.length ; soma ++){
//resultado += numbers[soma] }
//console.log(resultado) 
//let numero = numbers.length -1 
//console.log(resultado / numero)
//if (resultado > 20) {
   // console.log('valor maior que 20') 
//} else { console.log('valor menor ou igual a 20'); }


//atividade 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maiornumero = numbers[0]
for(index = 1 ; index < numbers.length ; index ++){
    if(numbers[index] > maiornumero){
        maiornumero = numbers[index]
         }
}
console.log(maiornumero)