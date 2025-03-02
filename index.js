document.body.style.background = "url('files/bgbody.gif')";

document.querySelector('#Searchbtn').addEventListener('click', function () {


    const City = document.getElementById('Cityname').value;

    // const imgkey = "9theXdDt0k23fD1fexcbGA-_f0lnRzsGlM_R_ta_rYk";
    // const imgurl = `https://api.unisplash.com/search/photos?page=1&query=${City}&client_id=${imgkey}`;
    // const res = fetch(imgurl);
    // var data = res.json();

    document.querySelector('#imgg').innerHTML = null;
    console.log("Search Clicked")
    const apikey = '364d79a6938d856eb1d89533b9ea9551'
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
    console.log(City)
    async function checkweather() {

        const response = await fetch(apiUrl + City + `&appid=${apikey}`);


        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".Wthr").style.display = "none"

        }
        
        else {
    
        var data = await response.json();
        document.querySelector('#Citname').innerHTML = data.name;
        document.querySelector('#citytemp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('#windspeed').innerHTML = data.wind.speed + "Km/Hr";
        let whethercond = data.weather[0].main;
        let n = "files/";
        let i = ".png";
        const pic = n + whethercond + i;
        var elem = document.createElement("img");
        elem.src = pic;
        elem.setAttribute("height", "60rem");
        elem.setAttribute("width", "60rem");
        elem.setAttribute("description", whethercond);
        document.getElementById("imgg").appendChild(elem);
        document.querySelector(".Wthr").style.display = "block"
    }

}
    checkweather();

})





document.querySelector('#Cityname').addEventListener('click', function () {

    
    document.querySelector(".error").style.display = null;
})
