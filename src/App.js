//core
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./shared/pages/Home";
import NewTrip from "./captains/pages/NewTrip";
import Captains from "./captains/pages/Captains";

//components
import MainNavigation from "./shared/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>

          {/* General Routes (unAuth) */}
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" exact element={null} />
          <Route path="/login" exact element={null} />
          <Route path="/contact" exact element={null} />
          <Route path="/listyourboat" exact element={null} />
          <Route path="/aboutus" exact element={null} />
          <Route path="/store" exact element={null} />
          <Route path="/captains" exact element={<Captains />} />

          {/* Captain Paths (Auth) */}
          <Route path="/trips/new" exact element={<NewTrip />} />
          <Route path="/u1/mytrips" exact element={null} />

        </Routes>
      </main>
    </Router>
  );
};

export default App;
