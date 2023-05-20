let nameDateIcon = document.getElementById('CityNameDateIcon');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
const searchButton = document.getElementById('searchButton');
let dayOneDate = document.getElementById('dayOneDate');
let dayTwoDate = document.getElementById('dayTwoDate');
let dayThreeDate = document.getElementById('dayThreeDate');
let dayFourDate = document.getElementById('dayFourDate');
let dayFiveDate = document.getElementById('dayFiveDate');
let dayOneIcon = document.getElementById('dayOneIcon');
let dayTwoIcon = document.getElementById('dayTwoIcon');
let dayThreeIcon = document.getElementById('dayThreeIcon');
let dayFourIcon = document.getElementById('dayFourIcon');
let dayFiveIcon = document.getElementById('dayFiveIcon');
let dayOneWind = document.getElementById('dayOneWind');
let dayTwoWind = document.getElementById('dayTwoWind');
let dayThreeWind = document.getElementById('dayThreeWind');
let dayFourWind = document.getElementById('dayFourWind');
let dayFiveWind = document.getElementById('dayFiveWind');
let dayOneHumidity = document.getElementById('dayOneHumidity');
let dayTwoHumidity = document.getElementById('dayTwoHumidity');
let dayThreeHumidity = document.getElementById('dayThreeHumidity');
let dayFourHumidity = document.getElementById('dayFourHumidity');
let dayFiveHumidity = document.getElementById('dayFiveHumidity');
let dayOneTemp = document.getElementById(`dayOneTemp`);
let dayTwoTemp = document.getElementById(`dayTwoTemp`);
let dayThreeTemp = document.getElementById(`dayThreeTemp`);
let dayFourTemp = document.getElementById(`dayFourTemp`);
let dayFiveTemp = document.getElementById(`dayFiveTemp`);
let searchedCityZip = document.getElementById('SearchedCityZip');
let lat;
let lon;
const today = dayjs().format('MMMM D, YYYY');

// add City name, Date, Icon here
nameDateIcon.textContent = `Fake City, ${today}.` 

const day1 = dayjs().add(1, 'day').format('MMMM D, YYYY');
dayOneDate.textContent = day1
const day2 = dayjs().add(2, 'day').format('MMMM D, YYYY');
dayTwoDate.textContent = day2
const day3 = dayjs().add(3, 'day').format('MMMM D, YYYY');
dayThreeDate.textContent = day3
const day4 = dayjs().add(4, 'day').format('MMMM D, YYYY');
dayFourDate.textContent = day4
const day5 = dayjs().add(5, 'day').format('MMMM D, YYYY');
dayFiveDate.textContent = day5





//on submit this will run
function getApi(event) {
    event.preventDefault();
    const APIKey = '97a725bc4d9e6103871a89dd3bed19db';
    let zip = searchedCityZip.value;
    //let zip = 38305;
    
    fetch(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${APIKey}`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            lat = data.lat;
            lon = data.lon;
            cityName = data.name;
            // add  Icon here
            nameDateIcon.textContent = `${cityName} ${today}`
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=97a725bc4d9e6103871a89dd3bed19db`
            )
            .then(function(response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                kelvinMain = data.main.temp
                farTemp = ((kelvinMain - 273.15) * 1.8) + 32
                // set temp
                temp.textContent= ` Temp: ` +farTemp.toFixed(2);

                windMain = data.wind.speed
                wind.textContent = ` Wind: ${windMain} MPH`;
                //set wind
                humidityMain = (data.main.humidity+'%')
                humidity.textContent = `Humidity: ${humidityMain}`
                //set humidity
            })
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=97a725bc4d9e6103871a89dd3bed19db`
            )
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                
                
                
                kelvinDay1 = data.list[4].main.temp;
                day1FarTemp = ((kelvinDay1 - 273.15) * 1.8) + 32;
                // text content day 1 temp.
                dayOneTemp.textContent = `Temp: ${day1FarTemp.toFixed(2)}`

                day1Wind = data.list[4].wind.speed;
                // text content day 1 wind speed.
                dayOneWind.textContent = `Wind: ${day1Wind} MPH`

                day1Humidity = data.list[4].main.humidity+`%`;
                // text content day 1 humidity.
                dayOneHumidity.textContent = `Humidity: ${day1Humidity}`
                
                
                
                kelvinDay2 = data.list[12].main.temp;
                day2FarTemp = ((kelvinDay2 - 273.15) * 1.8) + 32;
                // text content day 2 temp.
                dayTwoTemp.textContent = `Temp: ${day2FarTemp.toFixed(2)}`

                day2Wind = data.list[12].wind.speed;
                // text content day 2 wind speed.
                dayTwoWind.textContent = `Wind: ${day2Wind} MPH`

                day2Humidity = data.list[12].main.humidity+`%`;
                // text content day 2 humidity.
                dayTwoHumidity.textContent = `Humidity: ${day2Humidity}`
                
                
                
                kelvinDay3 = data.list[20].main.temp;
                day3FarTemp = ((kelvinDay3 - 273.15) * 1.8) + 32;
                // text content day 3 temp.
                dayThreeTemp.textContent = `Temp: ${day3FarTemp.toFixed(2)}`

                day3Wind = data.list[20].wind.speed;
                // text content day 3 wind speed.
                dayThreeWind.textContent = `Wind: ${day3Wind} MPH`

                day3Humidity = data.list[20].main.humidity+`%`;
                // text content day 3 humidity.
                dayThreeHumidity.textContent = `Humidity: ${day3Humidity}`

                
                
                kelvinDay4 = data.list[28].main.temp;
                day4FarTemp = ((kelvinDay4 - 273.15) * 1.8) + 32;
                // text content day 4 temp.
                dayFourTemp.textContent = `Temp: ${day4FarTemp.toFixed(2)}`

                day4Wind = data.list[28].wind.speed;
                // text content day 4 wind speed.
                dayFourWind.textContent = `Wind: ${day4Wind} MPH`

                day4Humidity = data.list[28].main.humidity+`%`;
                // text content day 4 humidity.
                dayFourHumidity.textContent = `Humidity: ${day4Humidity}`


                
                
                
                kelvinDay5 = data.list[36].main.temp;
                day5FarTemp = ((kelvinDay5 - 273.15) * 1.8) + 32;
                // text content day 5 temp.
                dayFiveTemp.textContent = `Temp: ${day5FarTemp.toFixed(2)}`
                
                day5Wind = data.list[36].wind.speed;
                // text content day 5 wind speed.
                dayFiveWind.textContent = `Wind: ${day5Wind} MPH`

                day5Humidity = data.list[36].main.humidity+`%`;
                // text content day 5 humidity.
                dayFiveHumidity.textContent = `Humidity: ${day5Humidity}`

                console.log(day5FarTemp);
            })
        })

}

searchButton.addEventListener('click', getApi);


