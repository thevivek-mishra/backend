function add(a, b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

// we can also export like this 

// exports.add = ()=>a+b;
// exports.sub = ()=>a-b;

// this will override 
// module.export = add
// module.export = sub

// we can use use this for multiple export

module.exports = {add, sub}

// we can rename also 

// module.export = {addFn:add, subFn:sub}