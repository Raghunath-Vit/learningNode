function log(num){
    if(num > 5){
    return;
}
console.log(num);
log(num + 1);
}
log(1);



function randomUntilFive(result = 0, count = 0){
    if(result === 5)
    {
        console.log(`The random result: ${result}`);
        console.log(`How many times random is executed: ${count}`);
        return;
    }
    result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    count++;
    randomUntilFive(result, count);
}
randomUntilFive();



function factorial(num){
    if(num === 1){
    return num;
    }
    return num * factorial(num-1)
   }
   console.log(factorial(5));


