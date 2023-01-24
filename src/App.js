import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import WatchCard from './WatchCard';


function App() {
  const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {   
            id:1,
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png',
            img_state : true
        },
        {
            id:2,
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png',
            img_state : false
        },
        {
            id:3,
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png',
            img_state : false
        },
        {
            id:4,
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png',
            img_state : false
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
  }
  var today = new Date(),
  timeVariable = today.getHours() + ':' + today.getMinutes();
  // const prevRef = 0;

  return (
    <div className="App">
      <div className="row">
        <div className = "col-12 header">Header</div>
      </div>
      <div className="row main_container">
        <div className = "col-6 leftPage">
          <img src={ProductData.colorOptions[0].imageUrl} alt ={ProductData.colorOptions[0].styleName}/>
        </div>
        <div className= "featureData" >
        <p>{timeVariable}</p>
        </div>
        <div className = "col-6 rightPage">
          <h2>{ProductData.title}</h2>
          <p>{ProductData.description}</p>
          <div style={{marginBottom: "20px"}}>
            <h4>Select Color</h4>
            <WatchCard watch_img={ProductData.colorOptions[0]} prevRef={ProductData.colorOptions[0].id}/>
            <WatchCard watch_img={ProductData.colorOptions[1]} prevRef={ProductData.colorOptions[1].id}/>
            <WatchCard watch_img={ProductData.colorOptions[2]} prevRef={ProductData.colorOptions[2].id}/>
            <WatchCard watch_img={ProductData.colorOptions[3]} prevRef={ProductData.colorOptions[3].id}/>
          </div>

          <h4>Features</h4>
          <div style={{marginBottom: "20px"}}>
          <button className= 'btn btn_style btnSelected'>{ProductData.featureList[0]}</button>
          <button className='btn btn_style'>{ProductData.featureList[1]}</button>
          </div>

          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
