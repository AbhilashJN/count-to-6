//let inp = process.argv.slice(2);
//let result = inp.map( (str)=>str[0]?str[0]:""  ).reduce((accumulator, currentValue) => accumulator + currentValue);
//console.log(`[${inp}] becomes "${result}"`);


let inp2 = ['Abc' , 'Def' , 'ghi' , 'jKl'];

let result2 = inp2.map( (str)=>str[0]?str[0]:''  ).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`[${inp2}] becomes "${result2}"`);

;



let inp3 = ['Abc' , '' , 'ghi' , 'jKl'];

let result3 = inp3.map( (str)=>str[0]?str[0]:'' ).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`[${inp3}] becomes "${result3}"`);



let inp4 = ['' , '' , '' , ''];

let result4 = inp4.map( (str)=>str[0]?str[0]:'' ).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`[${inp4}] becomes "${result4}"`);



let inp5 = [];

let result5 = inp5.map( (str)=>str[0]?str[0]:'' ).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`[${inp5}] becomes "${result4}"`);


