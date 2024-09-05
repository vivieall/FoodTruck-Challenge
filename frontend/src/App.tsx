import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FoodTruckList from './components/FoodTruckList/FoodTruckList';
import HomePage from './components/HomePage/HomePage';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foodtrucks" element={<FoodTruckList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;