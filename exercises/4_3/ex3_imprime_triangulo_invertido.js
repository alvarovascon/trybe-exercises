let n = 6;
let string = "";

for (i = 0; i < n; i += 1) {
  for (j = n; j >= 0; j -= 1) {
    if (j > i){
      string += " ";
    } else {
      string += "*";
    }
  }
  console.log(string);
  string = "";
}