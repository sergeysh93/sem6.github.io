var guesses = 0;
var v1 = parseInt(prompt('2+2=?'));
if (v1 == 4){
    guesses++;
    alert("Верно :)")
}else{
    alert("Неверно :(")
}

var v2 = parseInt(prompt('2^10=?'));
if (v2 == 1024){
    guesses++;
    alert("Верно :)\nВсего: "+guesses)
}else{
    alert("Неверно :(\nВсего: "+guesses)
}

for (let i=1; i<=10;i++){
    document.write(i) 
}

var m = ""
while (!m.includes("1")){
    m = prompt("Еще по одной?")
}
var fact = 1
for (let i = 1; i < 15; i++){
    fact = fact * i;
}
alert("Факториал 15 = "+fact);


var sname = "shishonkov"
var isPal = true
for (let i=0; i < sname.length/2;i++){
    if (sname[i] != sname[sname.length-1-i]){
        isPal = false
        break;
    }
}
alert(sname + " "+ (isPal ? "Является палиндромом" : "Не является палиндромом"))
for (let i=2;i<=15;i++){
    let isPrime = true
    for (let j=2;j<i-1;j++){
        if (i % j == 0) then
    }
}

var n = parseInt(prompt('Задумайте число, умножьте на 2 и прибавьте семь, запишите ответ: '))
n = (n-7)/2 
alert('Ваше число: ' + n)

var name = prompt('Введите Имя: ')
var year = parseInt(prompt('Введите ГОД рождения: '))
var age = 2023 - date
alert(typeof(age))
document.write(name + ":" + age) 