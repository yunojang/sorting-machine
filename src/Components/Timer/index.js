import { useEffect, useState } from "react";
import { formatDate } from "./utils";
import styled from "styled-components";

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
      <div>{formatDate(currentDate, format, isChecked)}</div>
      <Check>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <label>시간 보기</label>
      </Check>
    </Container>
  );
}

const Container = styled.div`
  min-width: 550px;
  padding: 50px;
  background-color: #f6f7f9;
  border-radius: 10px;
  font-size: 25px;
`;

const Check = styled.div`
  label {
    font-size: 15px;
    padding-left: 5px;
  }
`;

export default Timer;
