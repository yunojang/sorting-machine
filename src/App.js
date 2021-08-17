import Timer from "Components/Timer";
import Sorting from "Components/Sorting";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <Timer format="ko-KR" />
        <Sorting />
        <Timer format="en-US" />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 590px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
