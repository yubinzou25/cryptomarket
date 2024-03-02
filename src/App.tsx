
import Footer from './components/footer/Footer';
import HomePage from './components/pages/homepage/HomePage';
import Header from './components/header/Header';

function App() {


  return (
    <div className="mx-auto max-w-screen-xl px-20">
      <Header/>
      <main>
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}


export default App
