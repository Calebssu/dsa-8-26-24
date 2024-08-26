# DSA Notes

### Fibo Seq

The Fibonacci Sequence is a series of numbers where each following number in the sequence is the sum of the last two numbers.

### Loop vs Recursion model


~~~
//JS
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
~~~

The loop model has already set in stone values: (num1, num2, newNum). This model opts to use a for loop to iterate a set amount of times.

~~~
//JS
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
~~~

The recursion model opts to use methods to loop itself instead of a loop. Once the condition is met the functon then ends.

### The Big O Notation for this algorithm

To be completely honest I'm not sure about this. If I can answer then I'll update the README. 