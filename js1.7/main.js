let sum =(arg1,arg2) => arg1+arg2
let mult =(arg1,arg2) => arg1*arg2
let divide =(arg1,arg2) => arg1/arg2
let sub =(arg1,arg2) => arg1-arg2

//let x = prompt("Введите число");
//let y = prompt("Введите число");
//let z = prompt("Введите операцию");

//let valid = (z != "/" | y != 0) ? () => alert('Valid input') : () => alert("Invalid input");

let isPali = (word) => {
    for (let i=0; i < word.length/2;i++){
        if (word[i] != word[word.length-1-i]){
            return false
        }
    }
    return true
}
let avg = (arr) => {
    let res = 0
    for (let i=0;i<arr.length;i++){
        res+= arr[i]
    }
    return res/arr.length
}

let newYear = (day) => {
    return 365 - day
}

let empty = ()=>{}

let summ = (arr) => {
    let res = 0
    for (let i=0;i<arr.length;i++){
        res+= arr[i]
    }
    return res
}

let mult2 = (arr) => {
    for (let i=0;i<arr.length;i++){
        arr[i]*=2
    }
}

let odd = (arr) => {
    let res = []
    for (let i=0;i<arr.length;i++){
        if (arr[i] % 2 == 0){
            res.push(arr[i])
        }
    }
    return res
}

let arr = ["ger@mail.ru", "a@mail.ru", "bc@mail.ru", "def@mail.ru"]
let mul = (arr) => {
    arr.sort()
}

let body = document.getElementById("js")
for (i=0;i<arr.length;i++){
    let p = document.createElement("p")
    p.innerHTML=arr[i]
    body.append(p)
}