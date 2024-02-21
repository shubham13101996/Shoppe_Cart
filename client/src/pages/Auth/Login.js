import React, { useState } from "react";
import Layouts from "../../components/Layout/Layouts";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        // console.log(res.data.message);
        toast.success(res.data && res.data.message);
        // toast.success("res.data.message");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/welcome");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <Layouts title={"Login - Ecommerce App"}>
      <div className="form-container rounded-lg">
        {/* <h1>Register Page</h1> */}
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email.."
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Password.."
              required
            />
          </div>

         <div className="mb-3">
         <Link
            to={"/"}
            className="text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Don't have an account?
          </Link>
         </div>


          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
          </div>

        
        </form>
      </div>
    </Layouts>
  );
};

export default Login;
