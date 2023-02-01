import styled from "@emotion/styled";
//template literal
const EmotionBox = styled.div`
  background-color: yellow;
  font-size: 20px;
  width: 200px;
  padding: 20px;
  margin: 20px;
  color: "black";
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: orange;
  }
`;

// object
const EmotionBox2 = styled.div({
  backgroundColor: "blue",
  color: "black",
  fontSize: "20px",
  width: "200px",
  padding: "20px",
  margin: "20px",
  border: "1px solid black",
  borderRadius: "4px",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "navy",
  },
});

const Counter = () => {
  return (
    <div>
      <button>+</button> 0
    </div>
  );
};

/** 주석테스트 */
const Practice = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Practice</h1>

      <div>header</div>
      <div>
        content
        <div>
          <Counter></Counter>
          <div className="App">
            <EmotionBox>Emotion Box!</EmotionBox>
            <EmotionBox2>Emotion Box!</EmotionBox2>
          </div>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Practice;
