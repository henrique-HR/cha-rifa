let set 
const escolher=()=>{ 
  
  var ganhador = window.document.querySelectorAll('.ganhador')
  var teu = window.document.querySelectorAll('.tel')  
  var pre = window.document.querySelectorAll('.premio')
  var num = window.document.querySelectorAll('.no')

  var con1=[]
  var nome = ['henrique1 ','roger2   ','gustavo3','priscila4','zoio5','claber','doidin','caue','none','renan','caique','pedro','julia','guilherme']
  
  var tel =['0' , '1651', '051691' ,'00611','6169161','1913160','16165060','616981651','6169']
  var premio =  ['combo','pizza','unha','roupa','tenis','coca']
  var i=0,j=0,igual,vetor=[]

  
  do{
        vetor[i]= Math.floor(Math.random()*14)

        igual=0

        for( j=0; j<i ;j++){
            if(vetor[j]==vetor[i] ){
              igual=1
            }
        }if(igual==0){
          i++
         
      }
        
  }while( i <6 )

  for(i=0;i<6;i++){
    
    con1[i]=vetor[i]
    
    ganhador[i].innerHTML =`<strong>${i+1}º</strong> ${nome[con1[i]]}`
    teu[i].innerHTML = ` ${tel[con1[i]]} `
    num[i].innerHTML = `${vetor[i]+1}`
    pre[i].innerHTML = `${premio[i]}`
  }

  
  
}
const sortear =()=>{

 set = setInterval(escolher,100)

}



const parar = ()=>{
  clearInterval(set)
}






