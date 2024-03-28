/*

*/
const array=['a','b','c','d','e','f'];
const newarray=array.entries();
for(const [index,value] of newarray)
{
    console.log(index,value);
}