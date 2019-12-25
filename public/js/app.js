// ; // - simple API

// Fetch is browser-supported JS function so it's client-side function. It doesn't work in NodeJS.
// fetch(puzzleApiUrl).then((response) => {
//     response.json().then((data) => {
//
//         if(data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data.location);
//             console.log(data.forecast);
//         }
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const locationField = document.querySelector('#location');
const forecastField = document.querySelector('#forecast');



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    const url = 'http://localhost:3000/weather?address='+location;

    locationField.textContent = 'Loading forecast...';
    forecastField.textContent = '';

    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error);

                locationField.textContent = data.error;
                forecastField.textContent = '';
            } else {
                locationField.textContent = data.location;
                forecastField.textContent = data.forecast;
            }
        });
    });
});