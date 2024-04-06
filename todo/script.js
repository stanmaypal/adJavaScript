const item=document.querySelector('#txt');//get input data
const list_item=document.querySelector('#list');//get list area

document.addEventListener('DOMContentLoaded',function(){

const saveItem=JSON.parse(localStorage.getItem('newItems'))||[]

saveItem.forEach(items=>adddata(items));
})

            item.addEventListener('keyup',function(add){
            //console.log(add.key);
            if(add.key=='Enter')
            {
            //call add item function
            adddata(this.value);
            this.value='';
            }
            })

function adddata(data)
{
    const newItem=document.createElement('li');
    newItem.innerHTML=`${data}
    <i class="fa fa-trash-o"></i>
    `
    // updatelocalstorage()
newItem.addEventListener("click",function(){
    newItem.classList.toggle('cmptsk')
    //sendStorage()
})

newItem.querySelector('i').addEventListener('click',function(){

    newItem.remove();
    //sendStorage()
})



list_item.appendChild(newItem)
updatelocalstorage()
}
function updatelocalstorage()
{
    const items=Array.from(list_item.children).map(child=>child.textContent.trim())
    localStorage.setItem('newItems',JSON.stringify(items))
}
