import { useEffect, useState } from "react";
import { formatDate } from "./utils";
import styled from "styled-components";

const DETAIL_MESSAGE = {
  "ko-KR" : "자세히 보기",
  "en-US" : "view detail",
}

function Timer({ format }) {
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
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />
          {DETAIL_MESSAGE[format]}
        </label>
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
  z-index:-1;

  img {
    position: absolute;
    right: 50px;
    top: 25px;
    width: 80px;
    z-index:-1;
  }
`;

const Check = styled.div`
  margin-top: 5px;
  font-size: 15px;
  user-select: none;
  input {
    margin-right: 5px;
  }
`;

export default Timer;
