
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomePage from './components/pages/homepage/HomePage';
import Market from './components/pages/market/Market';
import Login from './components/pages/login/Login';
import SignUp from './components/pages/login/SignUp';

function App() {


  return (
    <div className="mx-auto max-w-screen-xl px-20">
      <Header/>
      <main>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "market" element={<Market/>}/>
        <Route path = "login" element={<Login/>}/>
        <Route path = "signup" element={<SignUp/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}


export default App
