import React, { useState, useEffect, useRef } from 'react';


const Hello = () => {
  const [visible, setVisible] = useState(true);
  const [displayText, setDisplayText] = useState("MILORD! WELCOME TO THE WEB DEV DESKTOP!");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!";
  const textRef = useRef(null);

  useEffect(() => {
    const targetText = displayText;
    const duration = 3000; 
    const startTime = performance.now();

    const animateText = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const iteration = Math.floor(progress * targetText.length);

      if (textRef.current) {
        textRef.current.innerText = targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return letter;
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
      }

      if (progress < 1) {
        requestAnimationFrame(animateText);
      } else {
        setTimeout(() => {
          setVisible(false);
        }, 1000); 
      }
    };

    requestAnimationFrame(animateText);

    return () => {
    };
  }, [displayText]);

  return (
    <div className={`hello ${!visible ? 'fade-out' : ''}`}>
      <h1 className='greetings' ref={textRef}>
        {displayText}
      </h1>
    </div>
  );
}

export default Hello;
