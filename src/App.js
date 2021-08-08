import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Cards from './components/cards/Card';


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
