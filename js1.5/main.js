function getRandInt(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min
}
var cards = []
for (let i=2;i<=14;i++){
    let name, val
    switch(i){
        case (11):
            name = "J"
            val = 10
            break
        case (12):
            name = "Q"
            val = 10
            break
        case (13):
            name = "K"
            val = 10
            break
        case (14):
            name = "A"
            val = 11
            break
        default:
            name = i.toString()
            val = i
    }
    cards.push({
        name: name,
        value: val,
        },
    )
}
var avgCard = 0
for (let i=0;i<cards.length;i++){
    avgCard+= cards[i].value
}
avgCard /= cards.length

function getCard(){
    return cards[getRandInt(0,cards.length-1)]
}

function getSum(cards){
    let res = 0
    let aces = 0
    for (let i=0;i<cards.length;i++){
        if (cards[i].value == 11){
            aces++
        }
        res += cards[i].value
    }

    for (let i=aces;i>0;i--){
        if (res > 21){
            res-=10;
        }
    }
    return res
}

function getHand(cards){
    var res = ""
    for (let i=0;i<cards.length;i++){
        res += (cards[i].name + " ")
    }
    res += ("sum: "+getSum(cards))
    return res
}

let count = 1
do{
    var dealer = []
    var player = []
    dealer.push(getCard())
    dealer.push(getCard())
    player.push(getCard())
    player.push(getCard())
    var d = getSum(dealer)
    var p = getSum(player)
    while(p <= 13 | (p<d & d>=17 & d<=21)){
        player.push(getCard())
        p = getSum(player)
    }
    while (d < 17 & p<21) {
        dealer.push(getCard())
        d = getSum(dealer)
    }
    if (d>21 & p>21 | d==p){
        console.log("Draw")
    }else if (p>21){
        console.log("Dealer wins")
    }else if(d>21){
        console.log("Player wins")
    }else {
        console.log((p>d ? "Player" : "Dealer") + " wins")
    }
    console.log(getHand(dealer))
    console.log(getHand(player))
    

    count--
}
while(count > 0)


