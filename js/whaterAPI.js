//////////////////////////////////////////
// API pixabay fetch api
// const MAIN_URL = fetch('https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json');
// let promise = MAIN_URL;
// promise
//     .then(function (response) {
//         let paraseData = response.json();
//         return paraseData;
//     })
//     .then(function (process) {
//         let userDisplay = document.querySelector('.user');
//         // for (let x = 0; x < 5; x++) {
//         //     let img = document.createElement('img');
//         //     img.src = process.hits[x].previewURL;
//         //     userDisplay.append(img);
//         //     console.log(img);
//         // }
//     })
//     .catch(err =>{
//       console.log(err);
//     });



//////////////////////////////////////////
// get postion users and say the temp! 

// let tempDgree = document.querySelector('#tempDgree');
// let city = document.querySelector('#city');
// let date = document.querySelector('#datetime');


  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(postion => {
      // long = postion.coords.longitude;
      // lat = postion.coords.latitude;
      const {longitude: long, latitude: lat} = postion.coords      
      // console.log(long);
      // console.log(lat);
      fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=85107d8cb0b5420e834edf763d00ba69&include=minutely`)
        .then(response => {
          return response.json(); 
        })
        .then(procec => {
          console.log(procec.data[0].weather.icon);
          const {temp, timezone, ob_time} = procec.data[0];
          const {icon} = procec.data[0].weather;
          tempDgree.textContent = temp;
          city.textContent = timezone;
          datetime.textContent = ob_time;  
        })
        .catch(err => {
          console.log(err);
        });
    })
  }
// get postion users ! 
// 8171174a38e449af819ac8965b62689c

// document.getElementById('')


// fetch(`	https://api.imgflip.com/get_memes`)
// .then(response => response.json()).then(data=> console.log(data))