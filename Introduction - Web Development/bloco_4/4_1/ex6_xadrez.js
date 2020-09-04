const peça = 'rei'

switch(peça.toLowerCase()){
  case 'peão':
    console.log("move uma ou duas casas para frente");
    break;
  case 'torre':
    console.log("move qualquer numero de casas para frente ou lateral");
    break;
  case 'bispo':
    console.log("move qualquer numero de casas na diagonal");
    break;
  case 'cavalo':
    console.log("move em L, pode saltar outras peças");
    break;
  case 'rei':
    console.log("move uma casa em qualquer direção");
    break;
  case 'rainha':
    console.log("move qualquer numero de casas em qualquer direção");
    break;
  default:
    console.log("esta peça nao existe");
    break;
  
}