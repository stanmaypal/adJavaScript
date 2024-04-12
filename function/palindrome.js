 const idPalindrome=(words)=>{
    newStr1=words.replace(/[^A-Za-z0-9]/g,'').toUpperCase().trim();
    //console.log(newStr);
   newStr=newStr1.split('').reverse().join('');
   console.log(newStr);
   if(newStr1==newStr)
   {
    console.log("String is Palindrom ")
   }
   else
   {
    console.log("String is not Palindrom")
   }

 }
 console.log(idPalindrome("Dad"));
 console.log(idPalindrome("A man, a plan, a canal: Panama"));