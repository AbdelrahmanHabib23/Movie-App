// import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieoSlice";
import MobileNavigation from "./component/MobileNavigation";

function App() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const fetchalltrending = async () => {
    try {
      const response = await axios.get("/trending/all/week");

      dispatch(setBannerData(response.data.results));
      console.log("response", response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchconfig = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
      console.log("data", response.data.images.secure_base_url + "original");
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchalltrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchconfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="pt-16">
      <Header />
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
