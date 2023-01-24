import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import WatchCard from './WatchCard';
// import {IonIcon} from "react-ion-icon";

function timeFeature() {
  var today = new Date(),
  hours = today.getHours()>9 ? today.getHours() : '0'+today.getHours(),
  minutes = today.getMinutes()>9 ? today.getMinutes() : '0'+today.getMinutes(),
  timeVariable = hours + ':' + minutes;

  return (
    <div className='featureData'>
      <p>{timeVariable}</p>
    </div>
  );
}

function rateFeature() {
  const pulseRate = 78;
  
  return (
    <div className='featureData' style={{padding: "16% 22.5%"}}>
      <i className="fa fa-heartbeat" aria-hidden="true"></i>
      <p>{pulseRate}</p>
    </div>
  );
}

function App() {
  const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        { 
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
  }

  const [selectedWatch,setSelectedWatch] = useState(0);
  const [selectedfeature,setSelectedFeature] = useState(0);

  return (
    <div className="App">
      <div className="row">
        <div className = "col-12 header">Header</div>
      </div>
      <div className="row main_container">
        <div className = "col-6 leftPage">

          {selectedfeature===0 ? timeFeature() : rateFeature() }

          <img src={ProductData.colorOptions[selectedWatch].imageUrl} alt ={ProductData.colorOptions[selectedWatch].styleName}/>
        </div>
        <div className = "col-6 rightPage">
          <h2>{ProductData.title}</h2>
          <p>{ProductData.description}</p>
          <div style={{marginBottom: "20px"}}>
            <h4>Select Color</h4>
            <WatchCard index={0} isSelected={selectedWatch===0} setSelectedWatch={setSelectedWatch} watch_img={ProductData.colorOptions[0]}/>
            <WatchCard index={1} isSelected={selectedWatch===1} setSelectedWatch={setSelectedWatch} watch_img={ProductData.colorOptions[1]} />
            <WatchCard index={2} isSelected={selectedWatch===2} setSelectedWatch={setSelectedWatch} watch_img={ProductData.colorOptions[2]}/>
            <WatchCard index={3} isSelected={selectedWatch===3} setSelectedWatch={setSelectedWatch} watch_img={ProductData.colorOptions[3]} />
          </div>

          <h4>Features</h4>
          <div style={{marginBottom: "20px"}}>
            <button onClick = {()=> setSelectedFeature(0)}
              className= {selectedfeature===0 ? 'btn btn_style btnSelected' : 'btn btn_style'}>
              {ProductData.featureList[0]}
            </button>

            <button onClick = {()=> setSelectedFeature(1)}
              className= {selectedfeature===1? 'btn btn_style btnSelected' : 'btn btn_style' }>
              {ProductData.featureList[1]}
            </button>
          </div>

          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
