import styled from "styled-components";

function SortingForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input
        onChange={props.onChange}
        value={props.value}
        type='text'
        placeholder='"숫자,숫자,숫자.. 형식으로 입력하세요"'
      />
      <ErrorAlert hidden={!props.error}>{props.error?.message}</ErrorAlert>

      <Submit type='submit' value='정렬하기' />
    </Form>
  )
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
  height: 35px;
  padding: 0 10px;
  width: 100%;
`;

const Submit = styled.input`
  width: 200px;
  height: 50px;
  border: none;
  background: #00aaff;
  color: #fff;
  margin-top: 30px;
`;

const ErrorAlert = styled.div`
  background: #ff5555;
  width: 100%;
  text-align: center;
  color: white;
`;
