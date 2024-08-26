const fibo = (n) => {
  let num1 = 0;
  let num2 = 1;
  let newNum;

  console.log(num2);
  console.log(num1);
  for (let i = 0; i < n; i++) {
    newNum = num1 + num2;
    console.log(newNum);
    num2 = num1;
    num1 = newNum;
  }
};

fibo(16)

const fiboRe = (c, n, y) => {
    let num1 = n
    let num2 = y
    let newNum;
    let count = c

    console.log(num1)
    console.log(num2)
    if(count <= 0){
        count += 1
        newNum = num1 + num2
        num1 = num2
        num2 = newNum
        console.log(newNum)
        fiboRe(count, num1, num2)
    }
}

fiboRe(0, 1, 1)