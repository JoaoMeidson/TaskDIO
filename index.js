const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
playerName = '';
xp = '';
let tier;
rl.question('Qual o nome do jogador? ', (answer) => {
  playerName = answer;
  rl.question('Qual a quantidade de XP do jogador? ', (answer) => {
    xp = +answer;
   if (xp < 1000) {
      tier = 'Ferro';
    } else if (xp <= 2000) {
      tier = 'Bronze';
    } else if (xp <= 5000) {
      tier = 'Prata';
    } else if (xp <= 7000) {
      tier = 'Ouro';
    } else if (xp <= 8000) {
      tier = 'Platina';
    } else if (xp <= 9000) {
      tier = 'Ascendente';
    } else if (xp <= 10000) {
      tier = 'Imortal';
    } else {
      tier = 'Radiante';
    }
    console.log(`O herói ${playerName} está no nível ${tier}.`);
    rl.close();
  })
})