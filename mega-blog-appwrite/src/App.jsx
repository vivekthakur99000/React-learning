import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice"
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const dispath = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispath(login({userData}));
      }else{
        dispath(logout());
      }
    }).finally(
      setLoading(false)
    );
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
   
}

export default App;
