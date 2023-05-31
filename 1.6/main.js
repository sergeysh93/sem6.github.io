/*function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
    
    alert( message );
    }
    
    showMessage(); // Привет, я JavaScript!
    
    alert( message ); // 
}*/

function isPali(word){
    for (let i=0; i < word.length/2;i++){
        if (word[i] != word[word.length-1-i]){
            return false
        }
    }
    return true
}

function negativeReplace(arr){
    for (let i=0;i<arr.length;i++){
        arr[i] = (arr[i] >= 0) ? arr[i] : arr[i]**2
    }
}

class Name{
    constructor(name){
        this.name = name
    }
    print(){
        //console.log(this.name)
        alert(this.name)
        
    }
}

class HiMessage{
    constructor(name){
        this.name = name
    }
    show(){
        //console.log("Привет, "+this.name)
        alert("Привет, "+this.name)
    }
}

class RevertedName{
    constructor(name){
        this.name = name
    }
    reversed(){
        var split = this.name.split("")
        var arr = split.reverse()
        var reversed = arr.join("")
        return reversed
    }
}
