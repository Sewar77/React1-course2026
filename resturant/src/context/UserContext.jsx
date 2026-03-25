import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null); //all users in db/localstorage

  useEffect(() => {
    //جواتها مشان اول ما يعمل ريفريش يجيب كل اليوزرز من الداتابيز-لوكالستوريج
    const existedUsers = JSON.parse(localStorage.getItem("users"));
    if (existedUsers) {
      setUsers(existedUsers);
    }
  }, []);

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
    toast.success("resgisterd successfully!");
    return;
  };

  const login = (formData) => {}; //task
  const displayAllUsers = () => {}; //next time
  return (
    <UserContext.Provider value={{ register, users }}>
      {children}
    </UserContext.Provider>
  );
};
