import { useState } from 'react';
import Book from './components/Book/Book';
import Choose from './components/Choose/Choose';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';

function App() {
  const [ChoiceID, setChoiceID] = useState<number | undefined>()

  // const setChoiceID = (choiceID:number) => {
  //   const  ChoiceID = choiceID
  //   }

  return (
    <div className="App">
      <Home/>
      <Popular/>
      <Choose setChoiceID={setChoiceID}/>
      <Events/>
      <Book choiceID={ChoiceID}/>
      <Footer/>
    </div>
  );
}

export default App;
