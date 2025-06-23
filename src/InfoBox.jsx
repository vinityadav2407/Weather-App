import "./InfoBox.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';//cold
import SunnyIcon from '@mui/icons-material/Sunny';// hot
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';//rainy
import WbTwilightIcon from '@mui/icons-material/WbTwilight';//normal

export default function InfoBox({info}){
   
    const INT_URL="https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    const Hot_URL="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
    
    const Cold_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    

    const Rainy_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";
    
    const  Normal_URL="https://images.unsplash.com/photo-1641188376725-5659af302b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bm9ybWFsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let condition = "";
    let icon=null;

     if (info.temp >= 30) {
         condition = Hot_URL;
         icon=<SunnyIcon/>
           } else if (info.temp <= 15) {
            condition = Cold_URL;
            icon=<AcUnitIcon/>
          } else if (info.humidity >= 70) {
           condition = Rainy_URL;
             icon=<ThunderstormIcon/>
        } else {
        condition = Normal_URL;
          icon=<WbTwilightIcon/>
    }

    

    return(
    <div className="InfoBox">
            <h2>Weather Info of the {info.city} - {info.weatherDes}</h2>

         <div className="card-Container">

            <Card sx={{ maxWidth: 445 }}>
                 <CardMedia
                     sx={{ height: 190 }}
                     image={condition}
                     title="green iguana"
                   />

                 <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                        {info.city } {icon }
                       </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p> Temperature =  {info.temp}&deg;C</p>
                        <p>Humidity =  {info.humidity}%</p>
                        <p>Min_Temp =  {info.tempMin}&deg;C</p>
                        <p>Max_Temp =   {info.tempMax}&deg;C</p>
                        <p>🌬️Pressure =   {info.pressure}hPa</p>
                        <p>🌊Sea_Level =  {info.SeaLevel}hPa</p>
                        <p>The weather can we described as the <i>{info.weatherDes}</i> and feels like the {info.feelLike}&deg;C</p>
                       </Typography>
                 </CardContent>

            </Card>
         </div>
     </div>
    );
}