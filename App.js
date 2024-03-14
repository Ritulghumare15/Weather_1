import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const apiKey = "99d3c3557db54a4b3f4a8c9ec711721a" 
  const [inputcity, setInputCity] = useState("")
  const [data, setData] = useState({})

  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console("err", err)
    })
  }
  const handleChangeInput = (e) => {
    setInputCity(e.target.value)

  }
  const handleSearch = () => {
    getWetherDetails(inputcity)
  }
  return (
    <div className="col-md-12">
      <div className="wetherBg ">

        <h1 className="heading ">Wether App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" placeholder="Type City name" onChange={handleChangeInput} />

          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {Object.keys(data).length > 0 &&
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">

          <img className="wethericon" alt="wethericon" src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" />

          <h5 className="wetherCity"> {data?.name}</h5>

          <h6 className="wetherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>

        </div>


      </div>
      }

    </div>



  );
}

export default App;
