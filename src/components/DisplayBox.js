import React from 'react';
import './styles/styles.css';



export default function DisplayBox({words,setTypedText,typedText,timer,setIsRunning,currentIndex,setCurrentIndex,results,setResults}){

    function handleKeyDown(e){
        if(e.key ===" "){
          setCurrentIndex(n=>n+1);
        }
        //make an array of words to type
        const WordsArr = words.split(" ");
        const TypedArr = typedText.split(" ");
        let targetWord = WordsArr[currentIndex];
        if(targetWord === TypedArr[currentIndex]){
          setResults({...results,correct:results.correct+1,time:results.time=(results.initTime-timer)})
        }else{
          setResults({...results,wrong:results.wrong-1})
        }


    }

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
        
        {timer !== 0 ? (
                <>
                    <p className="card-description">{words}</p>
                    <span className="card-tag">:{timer}</span>
                    {results.correct}/
                    {results.time}
                    <form>
                        <div className="code-editor">
                            <textarea
                                value={typedText}
                                onChange={handleChange}
                                data-gramm="false"
                                onKeyDown={handleKeyDown}
                            />
                        
                        </div>
                    </form>
                </>
            ) : (
                <div className="results-box">
                    <h2>Results</h2>
                    <p>
                      WPM: <strong>
                        {Math.round((results.correct / results.initTime) * 60)}
                      </strong>
                    </p>

                    <p>
                      Accuracy: <strong>
                        {
                          typedText.trim()
                            ? Math.round((results.correct / typedText.trim().split(/\s+/).length) * 100)
                            : 0
                        }%
                      </strong>
                    </p>
                </div>
            )}
      </div>
    );
};