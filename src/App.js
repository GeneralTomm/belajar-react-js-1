import Navbar from './Navbar';
import Home from './Home';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
       <Home />
       
      </div>
    </div>
  );
}

