let numberOne = Number(prompt("Coloque o primeiro número:"));
let numberTwo = Number(prompt("Coloque o segundo número:"));

let sum = numberOne + numberTwo;
alert(`A soma dos número é ${sum}!`);

let subtration = numberOne - numberTwo;
alert(`A subtração dos números é ${subtration}!`);

let multiplication = numberOne * numberTwo;
alert(`A multiplicação dos número é ${multiplication}!`)

let division = numberOne / numberTwo;
alert(`A divisão dos número é ${division}!`)

let rest = numberOne % numberTwo;
alert(`O resto da divisão dos número é ${rest}!`)


if(numberOne == numberTwo){
  alert(`Os dois números são iguais!`);
} else {
  alert(`Os números são diferentes!`);
}

if(sum % 2 == 0) {
  alert(`A soma dos números é par!`);
} else {
  alert('A soma dos números é impar');
}

