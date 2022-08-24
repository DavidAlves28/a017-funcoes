//------1 
const numx = 8

const numy = 5
function soma(num1, num2){
   const somar = num1+num2
   console.log(somar);
   
}
soma(numx,numy)
//---2 boolee return
function boolean(num1,num2){
  let isTrue 
   if(num1>=num2){
      isTrue = true
   } else { isTrue= false
   }
   return isTrue
}
 console.log(boolean(numx,numy));
    //---- 3 par ou nao 
const numeroPar = Number(prompt("Insira um número para saber se ele é par ou não"))
function definir(par){
   let isPar 
   if(par % 2 ===0){
      isPar=`Este número é par ${par}`
   } else { 
      isPar=`Descupe esse número ${par} não é par.`
   }
   return isPar
}
console.log(definir(numeroPar))
//----4
const string = "Astronauta"
function conteString(string1) {
   string1 = `A palavra ${string} contém = ${string1.length} letras.E palavras maiísculas : ${string.toUpperCase()}`
   
   return string1;
   
}
console.log(conteString(string));
