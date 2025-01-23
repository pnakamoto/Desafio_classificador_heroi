// Cria uma variável para armazenar o nome e o XP do herói
let heroi = {
    nome: "Nakamoto", // Substitua pelo nome do herói
    xp: 7200        // Substitua pelo valor de experiência do herói
};

// Inicializa a variável para armazenar o nível
let nivel = "";

// Estrutura de decisão para definir o nível com base no XP do herói
if (heroi.xp < 1000) {
    nivel = "Ferro";
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    nivel = "Bronze";
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    nivel = "Prata";
} else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
    nivel = "Ouro";
} else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    nivel = "Platina";
} else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    nivel = "Ascendente";
} else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    nivel = "Imortal";
} else if (heroi.xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "XP Inválido";
}

// Exibe a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);

// Exemplo adicional com laço para testar diferentes valores de XP
for (let xpTeste = 0; xpTeste <= 11000; xpTeste += 1000) {
    heroi.xp = xpTeste;

    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else if (heroi.xp >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "XP Inválido";
    }

    console.log(`Com XP de ${heroi.xp}, o Herói está no nível de ${nivel}`);
}
