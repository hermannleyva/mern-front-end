//core
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./shared/pages/Home";
import NewTrip from "./captains/pages/NewTrip";
import Captains from "./captains/pages/Captains";
import CaptainTrips from "./captains/pages/CaptainTrips";
import UpdateTrip from "./captains/pages/UpdateTrip";
import Trips from "./trips/Trips";
import Auth from "./captains/pages/Auth";

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
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/contact" exact element={null} />
          <Route path="/listyourboat" exact element={null} />
          <Route path="/aboutus" exact element={null} />
          <Route path="/store" exact element={null} />
          <Route path="/trips" exact element={<Trips/>}/>

          {/* Captain Routes (unAuth) */}
          <Route path="/captains" exact element={<Captains />} />
          <Route path="/:userName/trips" exact element={<CaptainTrips />} />

          {/* Captain Routes (Auth) */}
          <Route path="/trips/new" exact element={<NewTrip />} />
          <Route path="/:userName/trips/:tripId" exact element={<UpdateTrip />} />

        </Routes>
      </main>
    </Router>
  );
};

export default App;
