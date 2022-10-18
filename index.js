const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1=document.getElementById("Password1")
let passwordEl2=document.getElementById("Password2")
const text=document.getElementById("copy-el")
const text2=document.getElementById("copy-el2")
let length=characters.length
function generatePassword()
{
  let generatedPassword1=""
  let generatedPassword2=""
    for(let i=0;i<14;i++)
  {
      let index=Math.floor(Math.random()*length)
      generatedPassword1+=characters[index]
      index=Math.floor(Math.random()*length)
      generatedPassword2+=characters[index]
  }
  passwordEl1.innerText=generatedPassword1
  passwordEl2.innerText=generatedPassword2
}
text.addEventListener('click',()=>{
 copyPassword1()
})
text2.addEventListener('click',()=>{
  copyPassword2()
})
function copyPassword1()
{
  const textarea=document.createElement('textarea')
  textarea.setAttribute('readonly','');
  textarea.style.position='absolute';
  textarea.value=passwordEl1.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  console.log("clicked")
  document.body.removeChild(textarea)
}
function copyPassword2()
{
  const textarea=document.createElement('textarea')
  textarea.setAttribute('readonly','');
  textarea.style.position='absolute';
  textarea.value=passwordEl2.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  console.log("clicked")
  document.body.removeChild(textarea)
}
