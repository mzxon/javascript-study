/* myscript.js */

//두수사이의 합을 반환하시오
function hap(a, b){
    if(a>b){
        let tmp=a; a=b; b=tmp;
    }
    let sum=0;
    for(let n=a; n<=b; n++){
        sum += n;
    }
    return sum;
}
function diff(a, b){
    return Math.abs(a-b);
}


//두수사이의 차이를 반환하시오 (절대값)
function diff(a, b){
    return Math.abs(a-b);
}


//윤년, 평년을 반환하시오
function leap(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }
}