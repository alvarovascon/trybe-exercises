const a = 90;
const b = 60;
const c = 20;

if (a<=0 || b<=0 || c<=0){
  console.log("um dos angulos é inválido (igual ou menor que zero)")
}
else if((a+b+c)==180){
  console.log(true)
}else{
  console.log("erro")
}