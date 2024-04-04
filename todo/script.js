const item=document.querySelector('#txt');//get input data
const list_item=document.querySelector('#list');//get list area

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
newItem.addEventListener("click",function(){
    newItem.classList.toggle('cmptsk')
})

newItem.querySelector('i').addEventListener('click',function(){

    newItem.remove();
})



list_item.appendChild(newItem)
}
