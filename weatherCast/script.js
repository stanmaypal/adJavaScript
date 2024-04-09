const API_KEYS="e11ddad43e8c3eb6e64355f71c0cf8b6";


const weather= async(city)=>{
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`
const response=await fetch(api_url)
const wdata=await response.json();
   console.log(wdata.main.temp)
   console.log(wdata.name)
   console.log(new Date(wdata.sys.sunset * 1000).toLocaleTimeString('en-in', { hour: '2-digit', minute: '2-digit' }))
   console.log(new Date(wdata.sys.sunrise * 1000).toLocaleTimeString('en-in', { hour: '2-digit', minute: '2-digit' }))
}
weather('Gorakhpur')