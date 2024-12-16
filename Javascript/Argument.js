// function add()
// {
//     let sum=0;
//     let len=arguments.length;
//     for(var i=0;i<len;i++)
//         {
//             sum+=arguments[i];
//         }
//     console.log(len);
//     console.log(sum);
// }



function add() {
    let args = Array.from(arguments);
    let sum = args.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    console.log(sum);
}

add(2,3,4);
add(34,45,6,45,100);