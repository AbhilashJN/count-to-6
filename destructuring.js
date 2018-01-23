let inp = process.argv.slice(2);

let result ={};
[,result.username,result.email] = inp;
console.log(result);


let inp2 = ['myuserid','myusername','myemail','myage','myfname','mylname'];
let result2 ={};
[,result2.username,result2.email] = inp2;
console.log(result2);


let inp3 = ['','myusername','','myage','myfname','mylname'];
let result3 ={};
[,result3.username,result3.email] = inp3;
console.log(result3);


let inp4 = [];
let result4 ={};
[,result4.username,result4.email] = inp4;
console.log(result4);
