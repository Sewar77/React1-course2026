import { useNavigate } from "react-router-dom";
function Test() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/home")}> go</button>
    </>
  );
}

export default Test;
