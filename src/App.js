import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Cards from './components/cards/Card';
import {data} from './data';

const list = []

  for(let i=0; i<data.length;i++) {
    list.push(<Cards title={data[i].title} image={data[i].image} desc={data[i].desc} />)
  }


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        {list}
      </div>
    </div>
  );
}

export default App;
