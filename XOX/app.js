const blocks=document.querySelectorAll(".block");
const playertext=document.getElementById("player")
const errortext=document.getElementById("error")
let player="X";
let oyunBitti=false;
let kazan;
let winner;



function oyunBaslat(){
playertext.textContent='Oyuna Başlamak için kutucuğa tıklayın '
blocks.forEach(block=>block.addEventListener("click", ()=> alanSec(block)))

}
function alanSec(block){
    if (block.textContent===""){
        block.textContent=player;
    }else{
        errortext.textContent="Yanlış yaptınız"
        block.style.border="2px solid red"

    }
   
    turnPlayer();
   kontrolKazan();
    kontrolColumns();
    kontrolCapraz();

    if(oyunBitti){
        playertext.textContent=`Oyun bitti, ${winner} Kazandı`
        blocks.forEach(block=>block.style.pointerEvents='none')
    }
     
} 
    


function turnPlayer(){
if(player==="X"){
    player= "O"
    playertext.textContent= `Sıra ${player} da`
    return;

}else if(player==="O"){
    player= "X"
    playertext.textContent=`Sıra ${player} de`     
}
}

function kontrolKazan(){
   let row1= blocks[0].textContent==blocks[1].textContent&&blocks[0].textContent==blocks[2].textContent
   &&blocks[0].textContent!==""
   let row2= blocks[3].textContent==blocks[4].textContent&&blocks[3].textContent==blocks[5].textContent
   &&blocks[3].textContent!==""
   let row3= blocks[6].textContent==blocks[7].textContent&&blocks[6].textContent==blocks[8].textContent
   &&blocks[6].textContent!==""

   if(row1|| row2|| row3){
    oyunBitti=true
   }
   if(row1)return winner =blocks[0].textContent
   if(row2)return winner =blocks[3].textContent
   if(row3)return winner =blocks[6].textContent
}
function kontrolColumns(){
    let col1= blocks[0].textContent==blocks[3].textContent&&blocks[0].textContent==blocks[6].textContent
    &&blocks[0].textContent!==""
    let col2= blocks[1].textContent==blocks[4].textContent&&blocks[1].textContent==blocks[7].textContent
    &&blocks[2].textContent!==""
    let col3= blocks[2].textContent==blocks[5].textContent&&blocks[2].textContent==blocks[8].textContent
    &&blocks[2].textContent!==""
 
    if(col1|| col2|| col3){
     oyunBitti=true
    }
    if(col1)return winner =blocks[0].textContent
    if(col2)return winner =blocks[1].textContent
    if(col3)return winner =blocks[2].textContent
}

function kontrolCapraz(){
    let cap1= blocks[0].textContent==blocks[4].textContent&&blocks[0].textContent==blocks[8].textContent
    &&blocks[0].textContent!==""
    let cap2= blocks[2].textContent==blocks[4].textContent&&blocks[2].textContent==blocks[6].textContent
    &&blocks[2].textContent!==""
    
 
    if(cap1|| cap2){
     oyunBitti=true
    }
    if(cap1)return winner =blocks[0].textContent
    if(cap2)return winner =blocks[2].textContent
    
}
//Çapraz olduğu için indisler çapraz şekilde alınmalıdır !!



oyunBaslat();