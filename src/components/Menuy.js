import React from "react";
import './styles/menu.css'


export default function Menuy({setTimer}){
    return(
      <>
      <div className="radio-inputs">
        <label className="radio">
          <input type="checkbox" name="radio"/>
          <span className="name">Numbers</span>
        </label>
        <label className="radio">
          <input type="checkbox" name="radio" />
          <span className="name">panctuation</span>
        </label>
        <hr></hr>
        <label className="radio">

          <label className="radio">
            <input  type="radio" name="radio" defaultChecked onChange={(e)=>{
              if(e.target.checked){
                setTimer(30);
              }
            }} />
            <span className="name">30</span>
          </label>

          <label className="radio">
            <input type="radio" name="radio" onChange={(e)=>{
              if(e.target.checked){
                setTimer(60);
              }
            }} />
            <span className="name">60</span>
          </label>
        </label>
      </div>
      </>
    );
};