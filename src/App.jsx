// Import Modules:
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Components:
import RootLayout from "./layout/component/RootLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
