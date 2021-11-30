do{
    var a = +prompt('Введите число');
}while(isNaN(a) || a == 0);

let b = +prompt('Введите степень');

let c = 1;

if(isNaN(b) || b == 0){
    for(let i = 1; i <= 2; i++){
        c = c * a
    }
}else{
    for(let i = 1; i <= b; i++){
        c = c * a
    }
}

alert(c);