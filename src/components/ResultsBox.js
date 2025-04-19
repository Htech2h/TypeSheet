import React from "react";
import './styles/results.css'

export default function ResultsBox(){

    return(
        <div className="container">
        <div className="card">
          <div className="header">
            <p className="title">results</p>

          </div>
          <div className="footer">
            <div className="code">

              <p> WPM: </p>
              <p className="text">Time:</p>
            </div>
          </div>
        </div>
      </div>
    );
};