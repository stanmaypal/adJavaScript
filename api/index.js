const api="https://api.github.com/users/";

const github=async(username)=>{
const response= await fetch (api+username)
//console.log(response);
const data=  await response.json();
console.log(data.followers)
console.log(data.following)
console.log(data.name)
}

github("stanmaypal")