import React, { useEffect } from 'react'
import { useState } from 'react'
import './styles/typingtest.css'
import DisplayBox from './DisplayBox'
import Menuy from './Menuy'

export default function TypingTest(){
    const [words, setWords] = useState("");              // words to type
    const [typedText, setTypedText] = useState("");      // what the user is typing
    const [currentIndex, setCurrentIndex] = useState(0); // current word/char position
    const [timer, setTimer] = useState(30);              // countdown timer
    const [isRunning, setIsRunning] = useState(false);   // has typing started?
    const [results, setResults] = useState({correct:0, wrong:0,initTime:timer,time:0});        // store final result


    //random words
    useEffect(()=>{

        const storyWords = [
            "adventure", "deep", "within", "mysterious", "forest", "resided", 
            "courageous", "explorer", "journeyed", "solitary", "village", 
            "surrounded", "ancient", "wilderness", "daily", "expeditions", 
            "accompanied", "faithful", "companion", "traversed", "serene", 
            "riverbanks", "observing", "vibrant", "butterflies", "soaring", 
            "majestic", "creatures", "horizon", "unexpectedly", "discovered", 
            "glistening", "artifact", "radiating", "brilliance", "sunlight", 
            "captivated", "curiosity", "suddenly", "whispering", "echoed", 
            "shadows", "enticing", "unknown", "determined", "venture", 
            "darkened", "thicket", "where", "sunlight", "diminished", 
            "atmosphere", "enchanted", "rustling", "foliage", "unearthed", 
            "mysteries", "trepidation", "overcome", "persistence", "guided", 
            "destiny", "unraveling", "secrets", "forgotten", "civilization", 
            "whispers", "ancient", "spirits", "propelled", "forward", 
            "discovery", "transcended", "ordinary", "existence","once",
            "upon", "a", "time", "there", "was", "a", "young", "boy", "who",
            "lived", "in", "a", "quiet", "village", "near", "the", "forest", "every", "day",
            "he", "would", "walk", "alone", "with", "his", "dog",
          ];
        if(!isRunning){
            const paragraph = Array.from({ length: 40 }, () => {
                const rand = Math.floor(Math.random() * storyWords.length);
                return storyWords[rand];
              }).join(" ");
    
            setWords(paragraph);
        }

    },[isRunning]);

    // generating random values

    useEffect(() => {
        let time;
        if (isRunning && timer > 0) {
          time = setInterval(() => {
            setTimer(prev => prev - 1);
          }, 1000);
        }
      
        return () => clearInterval(time);
      }, [isRunning, timer]);

      


    return(
        <div className='typingtest'>
            <div onClick={() =>{ window.location.reload()}} style={{ display: 'flex', gap: '0rem',color:'#ffbd2e',cursor:'pointer' }}>
                <h1>TypeSheet</h1>
                <p style={{fontSize:'25px', textAlign:'right'}}
                >⌨️</p>
            </div>
            {!isRunning? <Menuy setTimer={setTimer}/>:""}

            <DisplayBox 
                words={words}
                setTypedText={setTypedText}
                typedText={typedText}
                timer={timer}
                setTimer={setTimer}
                setIsRunning={setIsRunning}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                results={results}
                setResults={setResults}
            />

        </div>

    )
};