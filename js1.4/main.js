var user = {
    name: "Джон",
    age: 30,
}
user.sayHI = function(){
    alert("Привет!")
}

user.sayHI()

var customer = {
    name: "Name",
    surname: "Surname",
    id: 45,
    orderSum: 9999,
    orderNum: 5,
}

alert(customer.id + " " + customer.name + " " + customer.orderSum)

var order = {
    name: "order1",
    id: 100,
    customerID: 45,
}

function User(name){
    this.name = name
    this.isAdmin = false
}

let newUser = new User("Sergey")

alert(newUser.name)

function User2(name) {
    this.name = name
    this.sayHI = function(){
        alert("My name is " + this.name)
    }
}

var newUser2 = new User2("Alex")

newUser2.sayHI()