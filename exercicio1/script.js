// ----1 
// function Ola() {
//     console.log('Olá! Sou o David');
// }
// Ola()

//---refatoração  1 
const ola = () => { console.log('Olá! Sou o David'); }
ola()

// -------- 2
let num=6
// function multiply(num1){

//      for( let i=1;i<=10;i++){
//         const mult = i*num1
//        console.log(mult);
//     }
// } 


// multiply(num);


//---------refatoração 2 ----
const multiply = (num1) => {
    for (let i = 1; i <= 10; i++) {
        const mult = i * num1
        console.log(`tabuada do 6 x ${i} = ${mult}` );
    }
}
multiply(num)

