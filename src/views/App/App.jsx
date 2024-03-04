import style from './App.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../header/Header';
import Gallery from '../gallery/Gallery';
import { useState } from 'react';

function App() {

  const [view, setView] = useState(true);

  return (
    <div className={style.App}>
      <Header view={view} setView={setView} />
      {view ? null : <Gallery />}
      <Footer />
    </div>
  );
}

export default App;