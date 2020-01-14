// ARROW FUNCTION

let x = (a, b) => {
    let result = a;
    if (b == 0) return 1

    for (i = 1; i < b; i++) result *= a

    return result;
};

let sayHi = ()=> console.log("Hi!")
sayHi();

res = x(9,4)
console.log(res)