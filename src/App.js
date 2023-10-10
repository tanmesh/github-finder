import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title="Github Finder App" />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
