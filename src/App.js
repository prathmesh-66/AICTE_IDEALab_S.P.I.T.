import Header from "./components/header/header";
import Event from "./components/routes/event";
import Entre from "./components/routes/entre";
import Sponser from "./components/routes/sponser";
import Contact from "./components/routes/contact";
import About from "./components/routes/about";
import Homie from "./components/routes/home";
import Footer from "./components/footer/footer";
import Table from "./components/Equipment/BasicTable"
import Pastevent from "./components/Event/past/past_event";
import Upcomingevent from "./components/Event/Table/BasicTable";
import Team from "./components/Team/team"
import Photos from "../src/components/Event/past/temp/photos"

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Homie />} />
          <Route path="/about" element={<About />} exact />
          <Route path="/even" element={<Event />} exact />
          <Route path="/sponser" element={<Sponser />} />
          <Route path="/entre" element={<Entre />} />
          <Route path="/equipment" element={<Table />} exact></Route>
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/past_event" element={<Pastevent />} />
          <Route path="/upcoming_event" element={<Upcomingevent />} />
          <Route path="/photo/:id" element={<Photos />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
