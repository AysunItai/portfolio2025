import Main from './pages/Main';
import ContactPage from './pages/ContactPage';
import ProjectFormPage from './pages/ProjectFormPage';
import Mentorship from './pages/Mentorship';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/project-planner" element={<ProjectFormPage/>}/>
        <Route path="/mentorship" element={<Mentorship/>}/>
     </Routes>
    </Router>
  );
}

export default App;
