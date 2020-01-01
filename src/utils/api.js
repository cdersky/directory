function getErrorMsg(msg){
  return msg
}

export function getEarthquakes(){
  return fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson`)
    .then(res=>res.json())
    .then(earthquakes=>{
      if(earthquakes.message){
        throw new Error(getErrorMsg(earthquakes.message))
      }
      return earthquakes
    })
}