import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); //all users in db/localstorage
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
    //if user role is admin, go to admin dashboard, and if user role is user go to user dashboadr
    toast.success("Login Successfully!");
    setCurrentUser(isExist);
    localStorage.setItem("currentUser", JSON.stringify(isExist));
    if (isExist.role === "user") navigate("/user-dashboard");
    if (isExist.role === "admin") navigate("/admin/dashboard");
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
      role: "user", //user/admin
    };
    const updatedUsers = [...allUsers, newUser]; //updated users is a new ARRAY containes all old users and the new user

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("resgisterd successfully! try to log in");
    // use paths
    navigate("/login");
    return;
  };
  const displayAllUsers = () => {}; //next time, in admin dashboard!

  const deleteUser = (userId) => {
    //userId = 1774691552163
    //when use filter to delete => !== .
    const existedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = existedUsers.filter((user) => userId !== user.id); //the new array without the userId
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    toast.success("deleted successfully");
  };

  const updateUser = (userId, updatedData) => {
    const existedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = existedUsers.map((user) => {
      if (user.id === userId) {
        return { ...user, ...updatedData };
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    toast.success("updated Successfully");
  };
  const addNewUser = (userData) => {
    const allowedRoles = ["user", "admin"];
    if (
      !userData.name ||
      !userData.email ||
      !userData.role ||
      !userData.password
    ) {
      toast.error("all fields are required");
      return;
    }
    if (!allowedRoles.includes(userData.role.toLowerCase())) {
      toast.error("role must be user or admiin only!");
      return;
    }
    if (userData.password.length < 8) {
      toast.error("Password should be more than 8 charecters. ");
      return;
    }
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === userData.email);
    if (isExist) {
      toast.error("the email is already exist! ask user to login ");
      return;
    }
    //create new user and stored them in users and lcoalstorage
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role.toLowerCase(),
    };
    const updatedUsers = [...allUsers, newUser]; //updated users is a new ARRAY containes all old users and the new user

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("user created successfully, user can login");
    setUsers(updateUser);
    return;
  };
  return (
    <UserContext.Provider
      value={{
        register,
        users,
        login,
        currentUser,
        logout,
        deleteUser,
        updateUser,
        addNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
//login logic, login form, logout, customize navbar, userdashboard, current user,
