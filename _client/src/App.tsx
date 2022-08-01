import './App.css';
import Choose from './components/Choose/Choose';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div className="App">
      <Home/>
      <Popular/>
      <Choose/>
    </div>
  );
}

export default App;
