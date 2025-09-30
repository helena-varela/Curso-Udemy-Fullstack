const nome = 'Helena'
const sobrenonome = 'Varela'
const idade = 19;
const peso = 45;
const alturaEmM = 1.54;
let imc;
let anonascimento;

imc = peso/(alturaEmM**2);
anonascimento = 2025 - idade;

console.log(nome, sobrenonome, "tem", idade, "anos, pesa", peso, "kg e tem", alturaEmM, "de altura e seu IMC é de", imc);
console.log(`${nome} ${sobrenonome} nasceu em ${anonascimento}`);