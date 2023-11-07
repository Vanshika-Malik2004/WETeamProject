import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import { Switch, Route, Redirect } from "react-router-dom";
import BookingSuccessfull from "./pages/BookingSuccessfull";
import EventBookings from "./pages/EventBookings";
import AllEducators from "./pages/AllEducators";
import About from "./pages/About";
import EducatorEventPage from "./pages/EducatorEventPage";
import NavbarForDashboard from "./components/NavbarForDashboard";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            !currentUser ? <Home {...props} /> : <Redirect to="/dashboard" />
          }
        />
        <Route
          exact
          path="/dashboard"
          render={(props) =>
            currentUser ? <Dashboard {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/educators/:educatorId"
          component={EducatorEventPage}
        />

        <Route exact path="/booking/:userId/:eventId" component={Booking} />
        <Route
          exact
          path="/booking/successfull"
          component={BookingSuccessfull}
        />

        <Route
          exact
          path="/bookings/:eventId"
          render={(props) =>
            currentUser ? <EventBookings {...props} /> : <Redirect to="/" />
          }
        />
        <Route path="/allEducators" component={AllEducators} />
        <Route path="/about" component={About} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
