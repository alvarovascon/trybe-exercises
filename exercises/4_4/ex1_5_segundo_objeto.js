let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: 'sim'
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'sim'
}

for (let chave in info) {
  if (info[chave] == 'sim' && info[chave] == 'sim'){
    console.log('ambos recorrentes');
  } else {
    console.log(`${info[chave]} e ${info2[chave]}`);
  }
}
