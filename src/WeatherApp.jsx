import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
  const[weatherInfo,setWeatherInfo]=useState( 
    {
          city:"Noida",
          SeaLevel: 996,
           feelLike: 36.7,
           humidity: 51,
           pressure: 996,
           temp: 33.06,
           tempMax: 33.06,
           tempMin: 33.06,
           weatherDes: "overcast clouds"
    })

    let updateInfo=(newResult)=>{
        setWeatherInfo(newResult)
    }
    return(
        <div className="WeatherApp">
         <SearchBox updateInfo={updateInfo}    />
         <InfoBox  info={weatherInfo}/>

        </div>
    );
}