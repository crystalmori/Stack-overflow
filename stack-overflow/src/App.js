import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
// import { json } from 'express';

function App() {

  // const getData = async (url) => {
  //   const newData = await fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(res => res.json());
  //   console.log(newData);
  // }
  // getData('/home');


  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
