const sortear =()=>{

    var i = 0  , j=0 , igual=0 , vetor = []


do{
    vetor[i]=Math.floor(Math.random()*30)
    igual = 0
    for (var j=0; j < i ; j++) {
        if(vetor[j] == vetor[i]){
            igual ++
        }
    }
    if(igual == 0){
        i++

    }

}while(i<25)}



function separar(){

    setInterval(sortear,1000)
      
}
const parar =()=>{
    clearInterval(separar)
}

