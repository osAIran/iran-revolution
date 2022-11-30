import React, { useState, useEffect } from 'react';
import './Counter.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Counter = ({ signed, qouta }) => {

    const [counter, setCounter] = useState(0);
    const [animationLikes, setAnimationLikes] = useState('initial');

    // if (counter !== signed) {

    // calculate dutration of counter
    const duration = 1;
    const totalMilSecDur = duration * 1000;

    const timeToAnimate = 2 * 1000

    const increment = (qouta - signed) / timeToAnimate

    // useEffect(() => {
    //     let end = signed;
    //     if (counter == end) return;

    //     // calculate duration of count in seconds of max 5 seconds

    //     let timer = setInterval(() => {
    //         counter += increment;

    //         if (counter >= end) {
    //             // setAnimationLikes('final');
    //             counter = end;
    //         }

    //         setCounter(counter);
    //         if (counter === end) clearInterval(timer)
    //     },  1);
    // }, [signed]);

    // // }



    // const handleLikes = () => {

    //     // 1. Old number goes up
    //     setTimeout(() => setAnimationLikes('goUp'), 0);
    //     // 2. Incrementing the counter  
    //     setTimeout(() => setLikes(likes + 1), 100);
    //     // 3. New number waits down  
    //     setTimeout(() => setAnimationLikes('waitDown'), 100);
    //     // 4. New number stays in the middle
    //     setTimeout(() => setAnimationLikes('initial'), 200);

    // }

    return (

        <div className='Grid' style={{padding:10}}>
            <div className='Signed' >
                <b className='purple'>{signed.toLocaleString()}</b> have signed. Let's go to <b className='purple'>{qouta.toLocaleString()}!</b>
            </div>
        </div>
    );

}

export default Counter;
