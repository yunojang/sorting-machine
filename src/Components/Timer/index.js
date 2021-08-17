import { useEffect, useState } from "react";
import { formatDate } from "./utils";
import styled from "styled-components";

function Timer({ format, name }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const currentSettingTimer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(currentSettingTimer);
    };
  }, []);

  return (
    <Container>
      {formatDate(currentDate, format, isChecked)}
      <Check>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <label>{name}</label>
      </Check>
      <img src="images/alarm-clock.png" alt="clock" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 30px 0;
  min-width: 550px;
  padding: 40px;
  background-color: #f6f7f9;
  border-radius: 10px;
  font-size: 20px;

  img {
    position: absolute;
    right: 50px;
    top: 25px;
    width: 80px;
  }
`;

const Check = styled.div`
  margin-top: 5px;
  label {
    font-size: 15px;
    padding-left: 5px;
  }
`;

export default Timer;
