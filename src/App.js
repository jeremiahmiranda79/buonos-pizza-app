import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import useUserRoutes from './components/routes/userRoutes';

function App() {
  const userRoutes = useUserRoutes();

  return (
    <Router>
      <div className="">
        <Header />

        <div className="">
          <Routes>
            {userRoutes}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router> 
  );
}

export default App;