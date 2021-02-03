function str_len(value: string){
    return value.length;
}

console.log(str_len("test 1"));

function str_len_spaces(value:string):number{
    let num:number = value.replace(/\s+/, "").length;
    return num;
}

console.log(str_len_spaces("test 1"));

function str_len_both(value:string, spaces?:boolean): number{
     let num:number;
     if (spaces){
         num=value.replace(/\s+/, "").length
     }
     else{
         num = value.length
     }
     return num;
     
}
console.log(str_len_both("test 2"));