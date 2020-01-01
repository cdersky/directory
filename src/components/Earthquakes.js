import React, { Component } from 'react'

import {getEarthquakes as fetchEarthquakes } from '../utils/api'

export default class recentEarthquakes extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      data: null,
      formattedEarthquakes : []
    }
  }
  
  componentDidMount(){
    this.updateEarthquakes()
  }
  
  updateEarthquakes(){
    fetchEarthquakes()
    .then(data=>{
      this.setState({
        data : data.features,
        formattedEarthquakes : this.styleCard(data.features.slice(0, 3))
      })
    })
    .catch((error)=>{
      console.warn('Error fetching repos: ', error)
      this.setState({
        error: 'There was an error fetching the repos.'
      })
    })
  }
  
  styleCard(quakes){
    return quakes.map(quake=>{
      return (
        <ul key={quake.properties.url}>
          <a href={quake.properties.url}>
            <div className="card">
            <div>Magnitude <b>{quake.properties.mag}</b></div>
            <div>Location {quake.properties.place}</div>
            <img src={`https://tile.thunderforest.com/static/landscape/${quake.geometry.coordinates[0]},${quake.geometry.coordinates[1]},10/250x250.png?apikey=51f6a2fd62b64947b69ca13c352652ae`}/>  
          </div>
          </a>
        </ul>
        )
      })
    }
    


    // <script src='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js'></script>
    // <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
    
    // <div id='map' style='width: 400px; height: 300px;'></div>
    // <script>
    // mapboxgl.accessToken = 'pk.eyJ1IjoiY2RlcnNreSIsImEiOiJjanN3MmdxNHAwNnVhNDNzMTNrNmtvcGFkIn0.eXyBb8YWgN34LSSs9GYbZQ';
    // var map = new mapboxgl.Map({
    // container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v11'
    // });
    // </script>

    render(){
      return (
        <React.Fragment>
          <h1>Earthquakes</h1>
          {!this.state.formattedEarthquakes.length && <p>LOADING...</p>}
          <div className="grid">{this.state.formattedEarthquakes}</div>
        </React.Fragment>
        )
      }
      
    }
    
    