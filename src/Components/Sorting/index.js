import useInput from "hooks/useInput";
import { useState } from "react";
import { verifiedInput } from "./utils/validate";
import { quickSort } from "./utils/sort";
import { debouncing } from "utils/delay";

import SortingForm from "./SortingForm";
import styled from "styled-components";

function Sorting() {
  const [result, setResult] = useState({ asc: "", desc: "" });
  const [error, setError] = useState(null);
  const [input, onChange] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();

    const settingResult = ({ asc, desc }) => {
      setResult((result) => ({ ...result, asc }));

      debouncing(setResult, 3000, (result) => ({ ...result, desc }));
    };

    const sortInput = () => {
      const numberArray = input.split(",").map((item) => Number(item));
      const sortedArray = quickSort(numberArray);
      const asc = sortedArray.join(",");
      const desc = sortedArray.reverse().join(",");

      return { asc, desc };
    };

    const submitSuccess = () => {
      setError(null);

      const { asc, desc } = sortInput();

      settingResult({ asc, desc });
    };

    const submitFailure = (error) => {
      setError(error);
    };

    try {
      if (!verifiedInput(input)) {
        throw Error("올바르지 않은 입력 값입니다.");
      }

      submitSuccess();
    } catch (error) {
      submitFailure(error);
    }
  };

  return (
    <Container>
      <SortingForm
        onSubmit={onSubmit}
        value={input}
        onChange={onChange}
        error={error}
      />

      <Title>오름차순 결과</Title>
      <Result>{result.asc}</Result>

      <Title>내림차순 결과</Title>
      <Result>{result.desc}</Result>
    </Container>
  );
}

const Container = styled.div`
  width: 550px;
`;

const Title = styled.div`
  margin: 30px 0px 15px 0px;
  font-size: 20px;
  font-weight: 600;
`;

const Result = styled.div`
  padding: 30px;
  width: 100%;
  min-height: 100px;
  background-color: aliceblue;
  border-radius: 10px;
  font-size: 20px;
  line-height: 30px;
  word-break: break-all;
  letter-spacing: 1px;
`;

export default Sorting;
