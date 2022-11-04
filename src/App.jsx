import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Linktree from "./components/Linktree";
import Contact from "./Page/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main className="my-10 mx-5 md:mx-12 lg:mx-14">
        <Routes>
          <Route exact path="/" element={<Linktree />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
