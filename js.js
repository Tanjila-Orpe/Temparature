const api = '81b7ec9d1036840e43617ad5e9ed5d6b';
const func = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
}

const display = (data) => {
    // console.log(data.weather[0].main);
    const temperature = document.getElementById('temp');
    temperature.innerText = data.main.temp;
    const description = document.getElementById('type');
    description.innerText = data.weather[0].main;
}

document.getElementById('btn-search').addEventListener("click", () =>{
    const city = document.getElementById('temp-input').value;
    console.log(city);
    const cityName = document.getElementById('city-name');
    cityName.innerText = city;
    
    
    func(city);
});
func("Dhaka");