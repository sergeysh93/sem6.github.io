var nums = [];
for (let i=0;i<15;i++){
    nums.push(Math.floor(Math.random()*40-10))
}

var avg1 = 0, avg2 = 0
var count1 = 0, count2 = 0, count3 = 0
for (let i=0;i<nums.length;i++){
    if (nums[i] == 0) {
        count3++
    }else if (nums[i] < 0){
        count1++
        avg1 += nums[i]
    }else{
        count2++
        avg2 +=nums[i]
    }
}
if (count1 != 0){
    avg1 /= count1
}
if (count2 != 0){
    avg2 /= count2
}

alert(avg1+" "+avg2)


for (let i=0;i<nums.length;i++){
    nums[i] = (nums[i] >= 0) ? nums[i] : nums[i]**2
}

var r = 0, g = 0, b = 0
for (let i=1;i<=1000000;i++){
    let x = Math.floor(Math.random()*3)
    if (x==0) {r++}
    if (x==1) {g++}
    if (x==2) {b++}
}

alert(r+" "+g+" "+b)