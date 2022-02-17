//core
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React, { useState, useCallback } from "react";

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
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        {/************************** (Auth) **************************/}
        <Route path="/trips/new" exact element={<NewTrip />} />
        <Route path="/:userName/trips/:tripId" exact element={<UpdateTrip />} />

        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={null} />
        <Route path="/listyourboat" exact element={null} />
        <Route path="/aboutus" exact element={null} />
        <Route path="/store" exact element={null} />
        <Route path="/trips" exact element={<Trips />} />
        <Route path="/captains" exact element={<Captains />} />
        <Route path="/:userName/trips" exact element={<CaptainTrips />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        {/************************* (unAuth) *************************/}
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={null} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/contact" exact element={null} />
        <Route path="/listyourboat" exact element={null} />
        <Route path="/aboutus" exact element={null} />
        <Route path="/store" exact element={null} />
        <Route path="/trips" exact element={<Trips />} />

        {/* Captain Routes (unAuth) */}
        <Route path="/captains" exact element={<Captains />} />
        <Route path="/:userName/trips" exact element={<CaptainTrips />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
