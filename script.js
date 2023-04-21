/*https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci40152855&format=geojson

ამ API-ს გამოყენებით შექმენი headline უახლეს სეისმურ მოვლენებზე (ერთ მოვლენაზე მინიმუმ)
მინიმუმ 10 სახის ინფორმაციით (ადგილმდებარეობა, დრო, მაგნიტუდა, სტატიის სახელი, ფოტო, ლინკი ა.შ)
*/

let magnitudeElement = document.getElementById("magnitude")
let timeElement = document.getElementById("time")
let placeElement = document.getElementById("place")
let typeElement = document.getElementById("type")
let titleElement = document.getElementById("title")
let cunamiWarningElement = document.getElementById("cunamiWarning")
let urlElement = document.getElementById("url")


async function getEarthQuakeWarning(){
    const APIUrl =`https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci40152855&format=geojson`
    const response = await fetch(APIUrl)
    const data = await response.json()
    //console.log(data)
    const fullInfo = { 
        magnitude:"",
        time:"",
        place:"",
        type:"",
        title:"",
        cunamiWarning:"",
        url:""

    }
    console.log("=====")
    for (i in data.properties){
            if (i=="mag"){
                fullInfo.magnitude=data.properties[i]
             }
              if (i=="place"){
                 fullInfo.place=data.properties[i]
              }
              if (i=="time"){
                fullInfo.time=data.properties[i]
             }
             if (i=="type"){
                fullInfo.type=data.properties[i]
             }
             if (i=="title"){
                fullInfo.title=data.properties[i]
             }
             if (i=="tsunami"){
                fullInfo.cunamiWarning=data.properties[i]
             }
             if (i=="url"){
                fullInfo.url=data.properties[i]
             }
    }


    magnitudeElement.textContent = fullInfo.magnitude
    timeElement.textContent = fullInfo.time
    placeElement.textContent = fullInfo.place
    typeElement.textContent = fullInfo.type
    titleElement.textContent = fullInfo.title
    cunamiWarningElement.textContent = fullInfo.cunamiWarning  
    urlElement.href = fullInfo.url
    console.log(fullInfo)
}

setInterval(() => {

    getEarthQuakeWarning()
}, 5000);