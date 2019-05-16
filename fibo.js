console.log( "valor "  + fibo(7));



function fibo(num){

    if (num === 1 || num === 2){
        return num;
     }else{
        return fibo(num-1)+fibo(num-2)   
    }
}