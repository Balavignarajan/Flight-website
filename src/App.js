import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Flight from './component/Flight';

function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<Flight/>}/>
       </Routes>
     </div>
    </Router>
    
  );
}

export default App;
