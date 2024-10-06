import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



import  "./InfoBox.css";
function InfoBox({info}){
const INIT_URL="https://th.bing.com/th/id/OIP.KKiYQoidk6mjcE86jh8CLAHaEK?rs=1&pid=ImgDetMain"
const HOT_URL="https://th.bing.com/th/id/OIP.vT-iuX-aYh7_JOEoNd6HDAHaEh?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const COLD_URL="https://th.bing.com/th/id/OIP.7gOZ8lNaxNKT5rRIqdXC5wHaEZ?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const RAIN_URL="https://th.bing.com/th/id/OIP.84BKGIzBhaCetdzRUhQfxAHaEr?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";



return(
<div className="InfoBox">
<div className="classContainer">
<Card sx={{ maxWidth: 380 }}>
<CardMedia
sx={{ height: 170 }}
image={info. humidity>80 ? RAIN_URL :info.temp>15 ? HOT_URL:COLD_URL}
title="green iguana"/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{info.city}{

info.humidity>80 ? <ThunderstormIcon/> :info.temp>15 ? < WbSunnyIcon/>:<AcUnitIcon/>
}
</Typography>
<Typography variant="body2" color="text.secondary" component={"span"}>
<p>Temperature={info.temp}&deg;C</p> 
<p>Humidity={info.temp}</p> 
<p>Min temp={info.tempMin}&deg;C</p>
<p>Max temp={info.tempMax}&deg;C</p> 
 <p>The weather can be describes as <i>{info.weather}</i> && feels like={info.feelslike}&deg;C</p> 
</Typography>
</CardContent>
</Card>
</div>
</div>
);

}
export default InfoBox;