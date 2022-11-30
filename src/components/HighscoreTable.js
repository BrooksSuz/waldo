import { readUserData } from "../firebase-config2";

const HighscoreTable = () => {
  return (
    <div onClick={console.log(readUserData("Brooks"))}>
      <p style={{ color: "white" }}>Hello</p>
    </div>
  );
};

export default HighscoreTable;
