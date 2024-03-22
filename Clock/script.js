function myClock()
{
    let tody;
    const c_d=new Date();
    const hh=c_d.getHours();
    const min=c_d.getMinutes();
    const sec=c_d.getSeconds()
    const dt=c_d.getDate();
    const mt=c_d.getMonth()+1;
    const yt=c_d.getFullYear();
    const dy=c_d.getDay()
    console.log(dy);

    
    switch(dy)
    {
        case 1:
            tody="MON"
            break;
            case 2:
                tody="TUE"
                break;
                case 3:
                    tody="WED"
                    break;
                    case 4:
                        tody="THU"
                        break;
                        case 5:
                            tody="FRI"
                            break;
                            case 6:
                                tody="SAT"
                                break;
                                case 7:
                                    tody="SUN"
                                    break;
    }
   // const date_time=`${tody} ${dt}/${mt}/${yt}`;

    //const time=`${hh}:${min}:${sec}`
    const date_time=`${tody} ${dt<10?'0':''}${dt}/${mt<10?'0':''}${mt}/${yt}`;

    const time=`${hh<10 ?'0':''}${hh}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`
    console.log(time)
    document.getElementById("times").textContent=time;
    document.getElementById("d_t").textContent=date_time;

    document.getElementById('fc').innerHTML="Original Digital Clock"

}
setInterval(myClock,1000);

myClock();
