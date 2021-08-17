import styled from "styled-components";

function SortingForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder="숫자,숫자,숫자.. 형식으로 입력하세요"
      />
      <ErrorAlert hidden={!props.error}>{props.error?.message}</ErrorAlert>

      <Submit type="submit" value="정렬하기" />
    </Form>
  );
}

export default SortingForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 50px;
  padding: 0 20px;
  margin-top: 15px;
  width: 100%;
  border: 1px solid #d6d7da;
  border-radius: 5px;
  font-size: 16px;

  ::placeholder {
    color: #afb4b8;
    font-size: 16px;
  }
  :focus {
    outline: none;
  }
`;

const Submit = styled.input`
  margin-top: 30px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  background: #4487ff;
  color: #fff;

  &:hover {
    background: #1769ff;
  }
`;

const ErrorAlert = styled.div`
  margin-top: 15px;
  width: 100%;
  text-align: left;
  color: #ee4649;
`;
