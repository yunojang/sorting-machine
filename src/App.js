import Clock from 'Components/Timer';
import Sorting from 'Components/Sorting';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Container>
        <Clock format='ko-KR' />
        <Sorting />
        <Clock format='en-US' />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width : 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
