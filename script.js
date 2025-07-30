// http://api.weatherapi.com/v1/current.json?key=9da36d6a1d6e416b90962753252807&q=Tirupati&aqi=no 


const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener('submit', searchForLocation);

let target = "Tirupati";

const fetchResults = async (targetLocation) => {
    try {
        let url = `http://api.weatherapi.com/v1/current.json?key=9da36d6a1d6e416b90962753252807&q=${targetLocation}&aqi=no`;

        const res = await fetch(url);
        const data = await res.json();

        console.log(data);

        let locationName = data.location.name;
        let time = data.location.localtime;
        let temp = data.current.temp_c;
        let condition = data.current.condition.text;

        updateDetails(temp, locationName, time, condition);

    } catch (error) {
        alert("Failed to fetch weather data. Please check the location name.");
        console.error(error);
    }
};

function updateDetails(temp, locationName, time, condition) {
    temperatureField.innerText = `${temp}°C`;
    locationField.innerText = locationName;
    dateandTimeField.innerText = time;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value.trim();
    if (target !== "") {
        fetchResults(target);
    }
}

fetchResults(target);

