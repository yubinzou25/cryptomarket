
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {


  return (
    <div className="mx-auto max-w-screen-2xl px-20">
      <Header/>
      <main>
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}


export default App
