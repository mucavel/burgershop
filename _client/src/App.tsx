import Book from './components/Book/Book';
import Choose from './components/Choose/Choose';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div className="App">
      <Home/>
      <Popular/>
      <Choose/>
      <Events/>
      <Book/>
      <Footer/>
    </div>
  );
}

export default App;
