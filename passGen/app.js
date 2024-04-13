function generatePassword(e)
{
    //e.preventDefault();
    const alphaLower="abcdefghijklmnopqrstuvwxyz";
    const alphaUpper=alphaLower.toUpperCase();
    console.log(alphaUpper)
    const numbers="0123456789";
    const symbol="~`!@#$%^&*()[]{}?.|\/?';:";
    let password='';
    let allChar='Sarvesh'

    if(document.getElementById('char').checked){
        allChar += alphaLower+alphaUpper;
    }
    if(document.getElementById('num').checked)
    {
        allChar +=numbers
    }
    if(document.getElementById('smb').checked)
    {
        allChar +=symbol
    }
    let passwordLength=document.getElementById('rg').value;
    console.log(passwordLength)
    document.getElementById('size').innerText=passwordLength


    for(i=0;i<passwordLength;i++)
    {
        let randomIndex=Math.floor(Math.random()* allChar.length);
        password +=allChar[randomIndex];
    }
    document.getElementById('txt').value=password

}
//generatePassword()
document.getElementById('btn').addEventListener('click',generatePassword())

document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox){
    checkbox.addEventListener('change',generatePassword)
})
