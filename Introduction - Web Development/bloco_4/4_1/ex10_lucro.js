let custo = 90;
let valVenda = 150;

if (custo < 0 || valVenda < 0){
  console.log("erro, valor(es) inválido(s)")
}else{
  custoTotal=custo*1.2;
  lucroMil = (valVenda - custoTotal)*1000;
  console.log(lucroMil);
}