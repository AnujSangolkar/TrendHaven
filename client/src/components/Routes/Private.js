import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import {Outlet} from "react-router-dom";
import axios from "axios";

import Spinner from "../Spinner";

export default function PrivateRoute(){
    const [ok,setOk] = useState(false)
    const [auth,setAuth] = useAuth()
    console.log("Debugging messag  +++++++++++++++++++++++++++++ ");
    useEffect(() => {
      const authCheck = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`);
        if (res.data.ok) {
          console.log("Debugging messag  ================================ ");
          setOk(true);
        } else {
          console.log("Debugging messag  ------------------------------- ");
          setOk(false);
        }
      };
      if (auth?.token) authCheck();
    }, [auth?.token]);
  
    return ok ? <Outlet /> : <Spinner />;
  }