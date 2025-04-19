import React from 'react';
import './styles/styles.css';

export default function DisplayBox({words,setTypedText,typedText,timer,setTimer,setIsRunning}){

    function handleChange(e){

        setTypedText(e.target.value)
        setIsRunning(true);

    }

    return (
        <div className="card">
        <div className="mac-header">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        
        <p className="card-description">
          {words}
        </p>
        <span className="card-tag">:{timer}</span>
        <form>
            <div className="code-editor">
                <textarea value={typedText} onChange={handleChange} data-gramm="false"></textarea>
            </div>
        </form>
      </div>
    );
};