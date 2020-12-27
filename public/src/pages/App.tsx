import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}

const App: React.FC<Props> = ({ history }) => {
  const handleClick = () => {
    history.push("/pages");
  };

  return (
    <div>
      <h1>React x TypeScript!</h1>
      <button onClick={handleClick}>open</button>
      <Link to="/page">next</Link>
    </div>
  );
};

export default App;
