import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Plans from './pages/Plans';
import BookNow from './pages/BookNow';
import PastWorks from './pages/PastWorks';
import Feedback from './pages/Feedback';

function AppContent() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="/past-works" element={<PastWorks />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;