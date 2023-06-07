import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import EateryList from "./components/EateryList";
import EateryForm from "./components/EateryForm";
import EateriesRanking from "./components/EateriesRanking";
import Sidebar from "./components/Sidebar";
import "./App.css"; // Import custom CSS file for styling


const App = () => {
  const [eateries, setEateries] = useState([]);

  useEffect(() => {
    const fetchEateries = async () => {
      try {
        const response = await fetch("http://localhost:9292/eateries");
        if (response.ok) {
          const data = await response.json();
          setEateries(data);
        } else {
          console.error("Error fetching eateries:", response.status);
        }
      } catch (error) {
        console.error("Error fetching eateries:", error);
      }
    };

    fetchEateries();
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Sidebar/>


        <Routes>
          <Route path="/" element={<EateryList eateries={eateries} />} />
          <Route path="/EateryForm" element={<EateryForm />} />
          {/* /eatery-form   This is for the above code incase it brigs issues*/}
        </Routes>
    


      </div>
    </Router>
  );
};

export default App;