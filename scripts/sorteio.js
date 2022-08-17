 
function  sortear() { 
 
  var ganhador = window.document.querySelectorAll('.ganhador')
  var teu = window.document.querySelectorAll('.tel')  
  var pre = window.document.querySelectorAll('.premio')
  var num = window.document.querySelectorAll('.no')

  var con1=[]
  var nome = ['henrique ','roger   ','gustavo','priscila','zoio','claber','doidin','caue','none','renan','caique','pedro','julia','guilherme']
  
  var tel =['83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213','83 99965-3213' ,'83 99965-3213','83 99965-3213']
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




        //codigo reserva ganhador[i].innerHTML =`<strong>${i+1}º</strong> ${nome[con1[i]]} | nº ecolhido(${vetor[i]})| ${tel} |  ${premio[i]} `
  
  /*for(){


  }
  for(){


  }*/
 /*
var i =0;
var j =[];
var vet=[];
var igual

do{
   vet[i] = Math.floor(Math.random()*100);
   igual=0
  
      for( j=0; j<i ;j++){
          if(vet[j]==vet[i]){
            igual = 1
          }
      }
      if(igual==0){
        i++
      }


}while(i < 5)
for(c=0;c<5;c++){
  console.log(vet[c])

}*/
