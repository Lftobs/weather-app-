
const apiKey =`9813d09c09302e59422d7221529ed81f`;


const body = document.querySelector('body')


// user input 
const input= document.querySelector('input');
const others= document.querySelector('.others')

// searched 
const hname= document.querySelector('.place');
const htemp = document.querySelector('.temp');
const hdesp= document.querySelector('.desp');
const htmax = document.querySelector('.tmax');
const htmin= document.querySelector('.tmin');
const hhum = document.querySelector('.hum');
const hvis = document.querySelector('.visible');

// current location
const hcurrent= document.querySelector('.cl');
const hcltmax= document.querySelector('.clmax');
const hcltmin= document.querySelector('.clmin');
const hclhum= document.querySelector('.clhum');
const hclvis= document.querySelector('.clvis');
const hcldesp= document.querySelector('.cldesp');

function search() {
    const y = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
    
    fetch(y)
.then(response => response.json())
.then(data => {
	console.log(data);
    let name = data['name'];
    let temp = data['main']['temp'];
    let desp = data['weather'][0]['description'];
    let tmax = data['main']['temp_max']
    let tmin = data['main']['temp_min']
    let hum = data['main']['humidity']
    let vis = data['visibility']
    if(temp >19.9) {
        body.style.background="url('bg6')";
    }else {
        body.style.background="url('bg7')";
    }
    console.log(name)
    hname.innerHTML = name;
    htemp.innerHTML = temp + "°c";
    hdesp.innerHTML = desp;
    htmax.innerHTML = tmax + "°c";
    htmin.innerHTML = tmin + "°c";
    hhum.innerHTML = hum;
    hvis.innerHTML = vis;
   
});
    
}
search()

//current location
function getLocation() {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  

  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat);
    console.log(lon);
    const endpf = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(endpf)
.then(r => r.json())
.then(dataT => {
    let cdesp = dataT['weather'][0]['description'];
    let ctemp = dataT['main']['temp']
    let ctmax = dataT['main']['temp_max']
    let ctmin = dataT['main']['temp_min']
    let chum = dataT['main']['humidity']
    let cvis = dataT['visibility']
    
    
    hcurrent.innerHTML="Current location : " + ctemp + "°c ";
    hcldesp.innerHTML = "( " + cdesp + " )";
    console.log(hcldesp)
    hcltmax.innerHTML = ctmax + "°c";
    console.log(hcltmax)
    hcltmin.innerHTML = ctmin + "°c";
    hclhum.innerHTML = chum;
    hclvis.innerHTML = cvis;
});
}

getLocation()


window.onclick = function (e) { 
        if(e.target == input) {
           others.style.transition="20s ease"
           others.style.display="none"
           
        }else {
        setTimeout(function(){
            others.style.display="block"
        },1000 )
            
            others.style.transition="50s ease"
        }
 
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.querySelector('.day').innerHTML = day
