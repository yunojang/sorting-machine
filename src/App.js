import Timer from "Components/Timer";
import Sorting from "Components/Sorting";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <Timer format="ko-KR" name="자세히 보기" />
        <Sorting />
        <Timer format="en-US" name="view detail" />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
