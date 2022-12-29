import React from 'react';
let statustimer = 0;
let statustimerclass = "one";

const CountDown = ({ minutes = 0, seconds = 0 }) => {
    const [paused, setPaused] = React.useState(false);
    const [[m, s], setTime] = React.useState([minutes, seconds]);
    
    let a = ['.one', '.two', '.three', '.four', '.one']
    const tick = () => {
    //   if (paused || over) return;
    

      if (m === 0 && s === 0) {
        reset();
        statustimer = statustimer + 1;

        const first = document.querySelector(a[statustimer-1]);
        console.log(first);
        const last = document.querySelector(a[statustimer]);
        console.log(last);

        first.before(last);
        if (statustimer === 4){
            statustimer = 0;
        }
      } 
    //   else if (m === 0 && s === 0) {
    //     setTime([59, 59]);
    //   } 
      else if (s === 0) {
        setTime([m - 1, 59]);
      } 
      else {
        setTime([m, s - 1]);
      }
    };
  
    const reset = () => {
      setTime([parseInt(minutes), parseInt(seconds)]);
      setPaused(false);

    //   setOver(false);
    };
  
    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
    //   <div>
        <p>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
    //   </div>
    );
  };

  export default CountDown;