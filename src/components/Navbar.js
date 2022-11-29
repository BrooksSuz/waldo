import "../styles/Navbar.css";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const { found } = props;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(null);
  const [hours, setHours] = useState(null);

  const countFound = () => {
    const arrFound = Object.values(Object.assign({}, found));
    const temp = [];
    
    arrFound.forEach((val) => {
      if (val) {
        temp.push(val)
      }
    });
    
    return (3 - temp.length);
  };

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds + 1), 1000);
    return () => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
        clearInterval(interval);
      } else if (minutes === 59) {
        setSeconds(0);
        setMinutes(0);
        setHours(hours + 1);
        clearInterval(interval);
      } else {
        clearInterval(interval);
      }
    };
  }, [seconds, minutes, hours]);

  useEffect(() => {
    countFound();
  }, [found]);

  return (
    <nav>
      <ul>
        <li><h1>Restart</h1></li>
        <h3 style={{ color: "white"}}>You have {countFound()} more to go!</h3>
        <li><h1>{hours} | {minutes} | {seconds}</h1></li>
      </ul>
    </nav>
  );
};

export default Navbar;
