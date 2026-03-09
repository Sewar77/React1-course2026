import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  const { name } = location.state || "no name";
  //child component
  return <></>;
}
export default Home;
//passing props
