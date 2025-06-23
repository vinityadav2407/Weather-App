import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
   let[city,setCity]=useState("");
   let [error,setError]=useState(false);
    
   const API_URL="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY="4ae8769bbb079dde2d6df20950d2a23a"

   let getWeatherInfo=async ()=>{
    try{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);

    let result={
        city:city,
        feelLike:jsonResponse.main.feels_like,
        humidity:jsonResponse.main.humidity,
        temp:jsonResponse.main.temp,
        tempMax:jsonResponse.main.temp_max,
        tempMin:jsonResponse.main.temp_min,
        pressure:jsonResponse.main.pressure,
        SeaLevel:jsonResponse.main.sea_level,
        weatherDes:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
}catch{
    throw error;
}
   }

   let handleChange=(event)=>{
    setCity(event.target.value);
   }

   let handleSubmit= async(event)=>{
    try{
     event.preventDefault();
     console.log(city);
    setCity("");
   let newInfo= await getWeatherInfo();
   setError(false);
   return updateInfo(newInfo);
    }catch{
        setError(true);
    }
   }
    return(
        <div className="SearchBox">
            <h1>Weather App by @VINIT_YADAV  </h1>
            <form onSubmit={handleSubmit}>

              <TextField id="cityname" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                 <br /><br />
              <Button variant="contained" type='Submit' >Search weather</Button>

            
            </form>
            <p style={{color:"red"}}>{error&&"sorry, we can't find this place!"}</p>
        </div>
    );
}