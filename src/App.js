import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Birthday from './component/Birthday';

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Birthday />} />
        </Routes>

      </Router>
       
    </div>
  );
}

export default App;
