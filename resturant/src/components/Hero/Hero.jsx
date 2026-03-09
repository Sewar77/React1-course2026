import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const arr = [
    { id: 1, name: "sewar", email: "sewar@gmail.com" },
    { id: 2, name: "sewa2r", email: "sewar@gmail.com" },
    { id: 3, name: "sewa3r", email: "sewar@gmail.com" },
    { id: 4, name: "sewa4r", email: "sewar@gmail.com" },
    { id: 5, name: "sewar5", email: "sewar@gmail.com" },
    { id: 6, name: "sewar6", email: "sewar@gmail.com" },
    { id: 8, name: "sewa7r", email: "sewar@gmail.com" },
    { id: 9, name: "sewar", email: "sewar@gmail.com" },
  ];
  //parent component
  return (
    <>
      <button onClick={() => navigate("/test")}> go to test</button>

      <h1>hero section</h1>
      <div>
        {arr.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <br />
              <div>{item.email}</div>
              <button
                onClick={() => {
                  navigate("/home", {
                    //send props
                    state: {
                      id: item.id,
                      name: item.name,
                      email: item.email,
                    },
                  });
                }}
              >
                Go
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Hero;
