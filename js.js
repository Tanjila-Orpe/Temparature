const api = '81b7ec9d1036840e43617ad5e9ed5d6b';
const func = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}

const display = (data) => {
    console.log(data.main.temp);
    setTemperature('temp', data.main.temp);
    setType('type', data.weather[0].main);
    
}
const setTemperature = (id, value) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = value;
}
const setType = (id, value) =>{
    const description = document.getElementById(id);
    description.innerText = value;
}
const setCityName = (id, value) =>{
    const cityName = document.getElementById(id);
    cityName.innerText = value;
}

document.getElementById('btn-search').addEventListener("click", () =>{
    const city = document.getElementById('temp-input');
    const cityValue = city.value;
    // console.log(city);
    setCityName('city-name', cityValue);
    func(city);
    city.value = '';
});
func("Dhaka");