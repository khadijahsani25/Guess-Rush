console.log("error")
let x = 3;
console.log(x)
let age1 = 10;
let age2 = 20;
isEqualTo10 = age1 === 10;
total = age1 + age2;
console.log(total)

price1 = 5;
price2 = "5"
console.log(price1 == price2)
console.log(price1 === price2)

if (!isEqualTo10) {
    console.log("Age is 10")
} else if (isEqualTo10) {
    console.log("Age is 10")
} else {
    console.log("Age is not 10")
}

if (age1 % 2 == 0) {
    console.log("Age is even")
} else {
    console.log("Age is odd")
}
switch (age1) {
    case 10:
        console.log("Age is 13")
        break;
    case 13:
        console.log("Age is 10")
    default:
        break;
}
result = age1 === 10 ? "age is 10" : "age is not 10";
console.log(result)
for (let index = 0; index < 10; index+=2) {
    console.log(index)
}
for (let index = 10; index > 0; index--) {
    console.log(index)
    
}

let z =0;
while (z < 10) {
    console.log(z)
    z+=1
}if (i===5) {
    break
} else {
    console.log()
}
do {
    console.log(x)
    z-=1
} while (z>0);