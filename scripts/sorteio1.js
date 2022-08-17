 
function sortear(){ 
  var ganhador = window.document.querySelector('.ganhador')
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
  

  
    for(i =0;i<6;i++){
          ganhador.innerHTML =` <tr><td>${i+1}º</td> <td>${nome[vetor[i]]} </td><td>${vetor[i]}</td> <td>${tel[vetor[i]]}</td><td>${premio[i]}</td></tr>`
          
    }
  
  
}

//var atualizar = setInterval( sortear ,1000)
var parar = clearInterval(sortear,1000)
