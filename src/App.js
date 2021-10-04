import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import OurCourse from "./components/OurCourse/OurCourse";
import Programming from "./components/Programming/Programming";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/Programming">
          <Programming />
        </Route>
        <Route exact path="/course">
          <OurCourse />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
