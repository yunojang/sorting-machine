import useInput from 'hooks/useInput';
import { useState } from 'react';
import styled from 'styled-components';
import { verifiedInput } from './utils/validate';
import { quickSort } from './utils/sort';
import { debouncing } from 'utils/delay';

import SortingForm from './SortingForm';

function Sorting() {
  const [result, setResult] = useState({ asc: '', desc: '' });
  const [error, setError] = useState(null);
  const [input, onChange] = useInput('');

  const onSubmit = e => {
    e.preventDefault();

    const settingResult = ({ asc, desc }) => {
      setResult(result => ({ ...result, asc }));

      debouncing(setResult, 3000, result => ({ ...result, desc }));
    }

    const sortInput = () => {
      const numberArray = input.split(',').map(item => Number(item));
      const sortedArray = quickSort(numberArray);
      const asc = sortedArray.join(',');
      const desc = sortedArray.reverse().join(',');

      return {asc,desc};
    }

    const submitSuccess = () => {
      setError(null);

      const {asc,desc} = sortInput();
      
      settingResult({ asc, desc });
    }

    const submitFailure = error => {
      setError(error)
    }

    try {
      if (!verifiedInput(input)) {
        throw Error('올바르지 않은 입력 값');
      }

      submitSuccess();
    }
    catch (error) {
      submitFailure(error);
    }
  }

  return (
    <>
      <SortingForm
        onSubmit={onSubmit}
        value={input}
        onChange={onChange}
      />
      <ErrorAlert hidden={!error}>{error?.message}</ErrorAlert>

      <div>{result.asc}</div>
      <div>{result.desc}</div>
    </>
  )
}

export default Sorting;

const ErrorAlert = styled.div`
  color: red;
`;
