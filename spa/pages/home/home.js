export default()=>{
        const container = window.document.createElement('div');
        container.setAttribute("class","imagen")
    
        const template = `<div> <h2 class='ola'>Olá !</h2> 
        <p class='msg'>Meu nome é Hellena , e eu vim aqui agradecer e desejar boa sorte  a todos voces que ajudaram meu papai e minha mamãe a tornar a minha chegada mais confortavel ... <br>aos ganhadores meus parabéns, e aos que não tiverem sorte no sorteio, saibam que eu não ganhei no sorteio...  mas tive a sorte de nascer em um mundo onde existem pessoas como você. <br><strong class='obg'>muito obrigado</strong></p></div> </div><span class='boa'>boa sorte a todos </span>`
                
        container.innerHTML = template

        return container
}
/**<div>
        <h2 class='ola'>Olá !</h2>
        <p class='msg'>
                
         Meu nome é Hellena , e 
        eu vim aqui agradecer e desejar boa sorte  a todos voces que ajudaram meu papai e minha mamãe a tornar a minha chegada mais confortavel ... <br>
        aos ganhadores meus parabéns, e aos que não tiverem sorte no sorteio, saibam que eu não ganhei no sorteio...  mas tive a sorte de nascer em um mundo onde existem pessoas como você. <br>
        <strong class='obg'>muito obrigado</strong>
        </p>
    </div>
</div>

    <span class='boa'>boa sorte a todos </span> */