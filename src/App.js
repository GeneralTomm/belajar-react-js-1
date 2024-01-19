import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

