import "../styles/Navbar.css";
import { useState, useEffect, useRef } from "react";
import writeUserData from "../firebase-config2";

const Navbar = (props) => {
  const { found, setShowHighscoreTable } = props;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(null);
  const [hours, setHours] = useState(null);
  const inputName = useRef();
  let isRunning = true;

  const writeScore = () => {
    writeUserData(inputName.current.value, ((hours * 3600) + (minutes * 60) + seconds));
  };
  
  const countFound = () => {
    const arrFound = Object.values(found);
    const temp = [];
    
    arrFound.forEach((val) => {
      if (val) {
        temp.push(val);
      }
    });
    
    if (temp.length === 3) {
      isRunning = false;
      writeScore();
    }

    return (3 - temp.length);
  };

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        } else if (minutes === 59) {
          setSeconds(0);
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);
    }
      return () => clearInterval(intervalID);
  }, [seconds, minutes, hours, isRunning]);

  useEffect(() => {
    countFound();
  }, [found]);

  return (
    <nav>
      <ul style={{ display: "flex", alignItems : "center" }}>
        <li><h1>Restart</h1></li>
        <li><h3 style={{ color: "white" }}>You have {countFound()} more to go!</h3></li>
        <li><label style={{ color: "white" }} htmlFor="name">Name:<input id="name" name="name" ref={inputName}></input></label></li>
        <li><h1>{hours} | {minutes} | {seconds}</h1></li>
      </ul>
    </nav>
  );
};

export default Navbar;
