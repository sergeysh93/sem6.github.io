let id = Symbol("id");
let client = {
  bankName:"VTB",
  [id]: 415,
}

const number = +prompt('Загадайте цифру до 9', '');

switch(number){
  case "1":
    alert('Вы ввели число 1');
    break
  case "2":
    alert('Вы ввели число 2');
    break
  case "8":
  case "9":
    alert('Вы ввели число 8, а может и 9');
    break
}

let x = Math.floor(Math.random()*60)
switch(x){
  case x<15:
    alert('1');
    break
  case x<30:
    alert('2');
    break
  case x<45:
    alert('3');
    break
  default:
    alert('4');
    break
}

let string = "32547345"

switch(string[0]){
  case "1":
  case "2":
  case "3":
    alert("Первая цифра 1, 2 или 3")
    break
  default:
    alert("нет")
}


