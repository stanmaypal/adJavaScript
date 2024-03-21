/*console.log("Hello And Welcome to JavaScript")
var name="Javascript";
console.log(name)
let limit=23;
console.log(limit)
const data="This is Js"
console.log(data);*/

const Ankush=new Date() 

const year=Ankush.getFullYear()
const month=Ankush.getMonth()+1
const day=Ankush.getDate()
const hour=Ankush.getHours();
const min=Ankush.getMinutes();
console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(min)
const timet=`${hour<10?'0':''}${hour}:${min}`

const fullDate=`${day}-${month<10 ? '0':''}${month}-${year}`;
console.log(fullDate)
console.log(timet);

//console.log(Ankush.getMonth()+1)



