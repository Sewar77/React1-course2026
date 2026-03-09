import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  const { name } = location.state || "no name";
  //child component
  return (
    <>
      <h1>this is home page</h1>
      <p>props</p>
      {name}
    </>
  );
}
export default Home;
//passing props
