let n = 7;
let string = "";

for ( i = 0; i <= parseInt(n/2); i+= 1){
  for ( j = 0; j < n; j += 1 ) {
    if ( j >= parseInt(n/2) - i && j <= parseInt(n/2) + i){
      string += "*";
    } else {
      string += " ";
    }
  }
  console.log(string);
  string = "";
}
