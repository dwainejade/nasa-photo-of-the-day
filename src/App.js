import React from "react";
import "./App.css";
import PhotoList from './components/PhotoList';
import PhotoCard from "./components/PhotoCard";


function App() {
  return (
    <div className="App">
      <div className="header">

      </div>
      <div className="main-container">
        <div className="image">
          <h1>NASA PIC OF THE DAY</h1>
        </div>
        <PhotoList />
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;
