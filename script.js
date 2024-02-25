let pontos = 0;
let derrotas = 0;


let options = [
    3,
    2,
    1
];

const bot = () => {
    let resbot;
    resbot = options[Math.floor(Math.random() * options.length )];   
    return resbot;
}

const jogar = (ppt) => {
  let botplay = bot();

    switch(ppt){
        case 1:
        options.push(2)
        
         if(botplay==2){
            alert('Resultado do BOT: Papel.\n Você perdeu!!')  ;
            derrotas++;
        }   else if(botplay==3){
                alert('Resultado do BOT: Tesoura.\n Você ganhou!!');
                pontos++;   
        }   else{ 
                alert('Resultado do BOT: Pedra.\n Empate');
        }
        break;    
        
        case 2:
        options.push(3)
        
        if(botplay==3){
            alert('Resultado do BOT: Tesoura.\n Você perdeu!!')  ;
            derrotas++;
        }   else if(botplay==1){
                alert('Resultado do BOT: Pedra.\n Você ganhou!!');
                pontos++;   
        }   else{ 
                alert('Resultado do BOT: Papel.\n Empate');
        }
        break;
        
        case 3:
        options.push(1)
        
        if(botplay==1){
            alert('Resultado do BOT: Pedra.\n Você perdeu!!')  ;
            derrotas++;
        }   else if(botplay==2){
                alert('Resultado do BOT: Papel.\n Você ganhou!!');
                pontos++;   
        }   else{ 
                alert('Resultado do BOT: Tesoura.\n Empate');
        }
        break;
    }

let empates = (options.length-3)-(pontos+derrotas)
document.getElementById('points').value = pontos;
document.getElementById('draws').value = empates;
document.getElementById('defeats').value = derrotas;
};





