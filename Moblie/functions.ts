function string_length(message:string):number{
    return message.length;
}

let x:number = string_length("Test 1");

console.log(x);

function string_nospaces(message:string):number{
return message.replace(" ","").length;
}

let y:number = string_nospaces("test 1");
console.log(y);

function string_length_both(message:string, spaces?:boolean):number{
    let count:number;
    if(spaces)
    {
        count = string_length(message);
    }else{
        count = string_nospaces(message);
    }
    return count;
}

let i :number = string_length_both("test1", true);
console.log(i);