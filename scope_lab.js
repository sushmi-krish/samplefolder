var globalVar ="I'm a global variable";
let globalLet ="I'm also global, but scoped with let";
const globalConst ="I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

function show(){
   
    var functionVar ="I'm a block-scoped var";
    let functionLet ="I'm a block-scoped let";
    const functionConst = "I,m a block-scoped const";
}
show()
console.log(blockVar);//execute the output
console.log(blockLet);//throw error
console.log(blockConst);//throw error 

console.log(functionVar);//throw error
console.log(functionLet);
console.log(functionConst);
