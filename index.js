const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1=document.getElementById("Password1")
let passwordEl2=document.getElementById("Password2")
let length=characters.length
console.log(length)
function generatePassword()
{
    for(let i=0;i<14;i++)
   {
    let index=Math.floor(Math.random()*length)
    passwordEl1.innerText+=characters[index]
    index=Math.floor(Math.random()*length)
    passwordEl2.innerText+=characters[index]
   }

}