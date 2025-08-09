// Lista de heróis com nome e XP
let herois = [
  { nome: "Arthuros, o Valente", xp: 7500 },
  { nome: "Selena, a Sombria", xp: 9800 }
];

// Função para classificar o nível
function classificarNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Percorrer a lista com for
for (let i = 0; i < herois.length; i++) {
  let heroi = herois[i];
  let nivel = classificarNivel(heroi.xp);

  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);

  // Frase especial - switch agora está dentro do for
  switch (nivel) {
    case "Ferro":
      console.log("Ainda há muito caminho pela frente...");
      break;
    case "Bronze":
      console.log("Você está começando a brilhar!");
      break;
    case "Prata":
      console.log("O progresso é visível.");
      break;
    case "Ouro":
      console.log("Uma lenda em ascensão.");
      break;
    case "Platina":
      console.log("Poucos chegaram tão longe.");
      break;
    case "Ascendente":
      console.log("Você já é temido nos campos de batalha!");
      break;
    case "Imortal":
      console.log("Quase no topo do mundo!");
      break;
    case "Radiante":
      console.log("Você alcançou o auge da glória!!!");
      break;
    default:
      console.log("Nível desconhecido.");
  }

  console.log(""); // Linha em branco
}
