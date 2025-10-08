import Home from "./apps/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
