import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null); //all users in db/localstorage
  const [currentUser, setCurrentUser] = useState(null); //user who logged in, it may be null
  const navigate = useNavigate();
  useEffect(() => {
    //جواتها مشان اول ما يعمل ريفريش يجيب كل اليوزرز من الداتابيز-لوكالستوريج
    const existedUsers = JSON.parse(localStorage.getItem("users"));
    if (existedUsers) {
      setUsers(existedUsers);
    }
    const user = JSON.parse(localStorage.getItem("currentUser"));
    //keep user logged in
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const login = (formData) => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields!");
      return;
    }
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === formData.email);
    if (!isExist) {
      toast.error("User not found! please create new account. ");
      return;
    }
    if (isExist.password !== formData.password) {
      toast.error("Password is not correct!");
      return;
    }
    //role based access => rba =>
    toast.success("Login Successfully!");
    setCurrentUser(isExist);
    localStorage.setItem("currentUser", JSON.stringify(isExist));
    navigate("/user-dashboard");
  }; //task

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/");
    toast.success("Logout successfully");
    return;
  };

  const register = (formData) => {
    //create new user
    //formdata={
    //name:"",
    //email:"",
    //password:""
    //}
    if (!formData.email || !formData.name || !formData.password) {
      //validation
      toast.error("Please fill all the fields!!");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("Password should be more than 8 charecters. ");
      return;
    }
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === formData.email);
    if (isExist) {
      toast.error("Your email is already exist! try login ");
      return;
    }
    //create new user and stored them in users and lcoalstorage
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "user", //user/manager
    };
    const updatedUsers = [...allUsers, newUser]; //updated users is a new ARRAY containes all old users and the new user

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("resgisterd successfully! try to log in");
    // use paths
    navigate("/login");
    return;
  };
  const displayAllUsers = () => {}; //next time, in admin dashboard!
  return (
    <UserContext.Provider
      value={{ register, users, login, currentUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
//login logic, login form, logout, customize navbar, userdashboard, current user,
