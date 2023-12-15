console.log("your code run here")
function union(input1:number | string,input2:number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
    result=input1+input2;}
else {
    result=input1.toString()+input2.toString();
}
return result;
}
const unionresult=union(34,24);
console.log(unionresult);
const stringres=union('Manoj','Seeta')
console.log(stringres);
