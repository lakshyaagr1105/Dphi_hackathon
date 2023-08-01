import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import AddChallenge from "./pages/AddChallenge";
import ChallengeDetail from "./pages/ChallengeDetail";
import Challengeslist from "./pages/Challengeslist";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Challengeslist />}>
      </Route>
      <Route path="/form" element={ <AddChallenge />}>
      </Route>
      <Route path="/challenge/:id" element={ <ChallengeDetail />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
