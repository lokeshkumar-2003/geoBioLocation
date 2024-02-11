import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPeople from "./pages/ListPeople";
import PoepleBio from "./pages/PoepleBio";
import { useState } from "react";
import Map from "./pages/Map.js";
function App() {
  const [targetPeople, setTargetPeople] = useState();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ListPeople
                setTargetPeople={setTargetPeople}
                targetPeople={targetPeople}
              />
            }
          />
          <Route
            path="details"
            element={<PoepleBio targetPeople={targetPeople} />}
          />
          <Route path="map" element={<Map targetPeople={targetPeople} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
