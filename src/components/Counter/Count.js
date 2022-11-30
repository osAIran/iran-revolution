import React, { useEffect, useState } from 'react';

//styling
import './Count.css';

const Count = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const { number, duration } = props

  // number displayed by component
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    // const number
    // if zero, return
    // end = number;
    if (start === props.number) return;

    
    let totalMilSecDur = duration
    let incrementTime = (totalMilSecDur / number) ;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === number) clearInterval(timer)
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <div className="Count">
      <h3>
        {count}
      </h3>
    </div>
  );
}

export default Count;