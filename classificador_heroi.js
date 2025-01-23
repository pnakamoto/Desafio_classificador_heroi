// Variável para armazenar o nome e a quantidade de experiência (XP) do herói
let heroi = {
    nome: "Nome do Herói",
    xp: 8500 // Substitua pelo valor de experiência desejado
};

// Estrutura de decisão para classificar o herói com base no XP
if (heroi.xp < 1000) {
    console.log(`${heroi.nome} está na categoria: Ferro`);
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    console.log(`${heroi.nome} está na categoria: Bronze`);
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    console.log(`${heroi.nome} está na categoria: Prata Ouro`);
} else if (heroi.xp >= 5001 && heroi.xp <= 8000) {
    console.log(`${heroi.nome} está na categoria: Platina Diamante`);
} else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    console.log(`${heroi.nome} está na categoria: Ascendente`);
} else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    console.log(`${heroi.nome} está na categoria: Imortal`);
} else if (heroi.xp >= 10001) {
    console.log(`${heroi.nome} está na categoria: Radiante`);
} else {
    console.log("XP inválido!");
}
