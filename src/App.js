import './App.css';
import Convertor from './Components/Convertor/Convertor';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <main className="container">
          <Convertor />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
