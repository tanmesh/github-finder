import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { UserProvider } from "./context/users/UserContext"
import { AlertProvider } from "./context/alert/AlertContext"
import Alert from "./components/layout/Alert";
import UserProfile from "./components/users/UserProfile";

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="Github Finder App" />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/user/*" element={<UserProfile />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </UserProvider >
  );
}

export default App;
