
import Footer from './components/Footer';
import NavaBar from './components/NavaBar';
import HomePage from './pages/HomePage';


function App() {


  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <NavaBar/>
      <main>
        <HomePage/>
      </main>
      <Footer/>

    </div>
  );
};


export default App
