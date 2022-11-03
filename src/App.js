import {React, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomHook from "./pages/CustomHook";
import ErrorBoundary from "react-error-boundary";
import TestPage from "./pages/TestPage";
import PageNotFound from "./pages/PageNotFound";
import  Reducer  from "./pages/Reducer";
import './index.css';

function App() {
  return (
    <Router>
      <nav>
        <div>
          <ul className="navbar">
            <li>
        <Link to="/">CustomHook</Link>
        <Link to="/reducer">Reducer</Link>
        {/* <Link to="/testPage">TestPage</Link> */}
        <Link to="/errorBoundary">ErrorBoundary</Link>
            </li>
          </ul>
        </div>
      </nav>
    
      <div>
        <Routes>
          <Route path="/" element={<CustomHook />}></Route>
          <Route path="reducer" element={<Reducer />}></Route>
          {/* <Route path="testPage" element={<ErrorBoundary><TestPage /></ErrorBoundary>}></Route> */}
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="errorBoundary" element={<ErrorBoundary />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
