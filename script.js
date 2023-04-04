var dayOneDate = document.getElementById('dayOneDate');
var dayTwoDate = document.getElementById('dayTwoDate');
var dayThreeDate = document.getElementById('dayThreeDate');
var dayFourDate = document.getElementById('dayFourDate');
var dayFiveDate = document.getElementById('dayFiveDate');
var dayOneIcon = document.getElementById('dayOneIcon');
var dayTwoIcon = document.getElementById('dayTwoIcon');
var dayThreeIcon = document.getElementById('dayThreeIcon');
var dayFourIcon = document.getElementById('dayFourIcon');
var dayFiveIcon = document.getElementById('dayFiveIcon');
var dayOneWind = document.getElementById('dayOneWind');
var dayTwoWind = document.getElementById('dayTwoWind');
var dayThreeWind = document.getElementById('dayThreeWind');
var dayFourWind = document.getElementById('dayFourWind');
var dayFiveWind = document.getElementById('dayFiveWind');
var dayOneHumidity = document.getElementById('dayOneHumidity');
var dayTwoHumidity = document.getElementById('dayTwoHumidity');
var dayThreeHumidity = document.getElementById('dayThreeHumidity');
var dayFourHumidity = document.getElementById('dayFourHumidity');
var dayFiveHumidity = document.getElementById('dayFiveHumidity');




getApi();
function getApi() {
    var newUrlCity = 'api.openweathermap.org/data/2.5/forecast?lat=37.129&lon=-84.0833&appid={API key}'

    fetch(newUrlCity)
        
}
console.log(newUrlCity);