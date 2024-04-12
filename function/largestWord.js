//Hello this is Javascript and Laravel Classesss batch no 120420241230


function largest(str){
    let bigword='';
words=str.split(" ")
console.log(words)

for(let i=0;i<words.length;i++)
{
    if(words[i].length>bigword.length)
    bigword=words[i]
}
return(bigword);
}
console.log(largest("Hellothis is Javascript fewfewewewewewewew and Laravel Classesss batch no"))
//[3,67,89,09,45,45,34]



